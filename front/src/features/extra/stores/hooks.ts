import { useRecoilState } from 'recoil';
import {
  extraFormRecoilState,
  extraListRecoilState,
  selectedAwardState,
  selectedExperienceState,
} from './atom';
import { ExtraMenuType } from '../types';
import { useCallback } from 'react';

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

  const openExtraList = useCallback(
    (key: ExtraMenuType) =>
      setExtraListState((prev) => ({
        ...prev,
        [key]: true,
      })),
    []
  );

  const closeExtraList = useCallback((key: ExtraMenuType) => {
    setExtraListState((prev) => ({
      ...prev,
      [key]: false,
    }));
    setExtraFormState((prev) => ({
      ...prev,
      [key]: false,
    }));
  }, []);

  const toggleExtraList = useCallback((key: ExtraMenuType) => {
    if (extraListState[key])
      setExtraFormState((prev) => ({
        ...prev,
        [key]: false,
      }));
    setExtraListState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const openExtraForm = useCallback(
    (key: ExtraMenuType) =>
      setExtraFormState((prev) => ({
        ...prev,
        [key]: true,
      })),
    []
  );

  const closeExtraForm = useCallback((key: ExtraMenuType) => {
    if (key === 'award') setSelectedAward(null);
    if (key === 'experience') setSelectedExperience(null);
    setExtraFormState((prev) => ({
      ...prev,
      [key]: false,
    }));
  }, []);

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
