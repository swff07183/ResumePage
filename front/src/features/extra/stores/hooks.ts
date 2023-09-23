import { useRecoilState } from 'recoil';
import {
  extraFormRecoilState,
  extraListRecoilState,
  selectedAwardState,
  selectedExperienceState,
} from './atom';
import { ExtraMenuType } from '../types';

export const useSelectedAward = () => {
  const [selectedAward, setSelectedAward] = useRecoilState(selectedAwardState);

  return { selectedAward, setSelectedAward };
};

export const useSelectedExperience = () => {
  const [selectedExperience, setSelectedExperience] = useRecoilState(
    selectedExperienceState
  );

  return { selectedExperience, setSelectedExperience };
};

export const useExtraState = () => {
  const [extraListState, setExtraListState] =
    useRecoilState(extraListRecoilState);
  const [extraFormState, setExtraFormState] =
    useRecoilState(extraFormRecoilState);
  const { setSelectedAward } = useSelectedAward();
  const { setSelectedExperience } = useSelectedExperience();

  const openExtraList = (key: ExtraMenuType) =>
    setExtraListState((prev) => ({
      ...prev,
      [key]: true,
    }));

  const closeExtraList = (key: ExtraMenuType) => {
    setExtraListState((prev) => ({
      ...prev,
      [key]: false,
    }));
    setExtraFormState((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  const toggleExtraList = (key: ExtraMenuType) => {
    if (extraListState[key])
      setExtraFormState((prev) => ({
        ...prev,
        [key]: false,
      }));
    setExtraListState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const openExtraForm = (key: ExtraMenuType) =>
    setExtraFormState((prev) => ({
      ...prev,
      [key]: true,
    }));

  const closeExtraForm = (key: ExtraMenuType) => {
    if (key === 'award') setSelectedAward(null);
    if (key === 'experience') setSelectedExperience(null);
    setExtraFormState((prev) => ({
      ...prev,
      [key]: false,
    }));
  };

  return {
    extraListState,
    openExtraList,
    closeExtraList,
    toggleExtraList,
    extraFormState,
    openExtraForm,
    closeExtraForm,
  };
};
