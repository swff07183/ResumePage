import { useRecoilState } from 'recoil';
import { extraFormRecoilState, extraListRecoilState } from './atom';
import { ExtraMenuType } from '../types';

export const useExtraState = () => {
  const [extraListState, setExtraListState] =
    useRecoilState(extraListRecoilState);
  const [extraFormState, setExtraFormState] =
    useRecoilState(extraFormRecoilState);

  const openExtraList = (key: ExtraMenuType) => () =>
    setExtraListState({
      ...extraListState,
      [key]: true,
    });

  const closeExtraList = (key: ExtraMenuType) => () =>
    setExtraListState({
      ...extraListState,
      [key]: false,
    });

  const toggleExtraList = (key: ExtraMenuType) => () =>
    setExtraListState((prev) => ({
      ...extraListState,
      [key]: !prev[key],
    }));

  const openExtraForm = (key: ExtraMenuType) => () =>
    setExtraFormState({
      ...extraFormState,
      [key]: true,
    });
  const closeExtraForm = (key: ExtraMenuType) => () =>
    setExtraFormState({
      ...extraFormState,
      [key]: false,
    });

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
