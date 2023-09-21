import { useRecoilState } from 'recoil';
import { careerFormState, selectedCareerState } from './atoms';
import { ICareer } from '../types/ICareer';

export const useSelectedCareer = () => {
  const [selectedCareer, setSelectedCareer] =
    useRecoilState(selectedCareerState);

  return { selectedCareer, setSelectedCareer };
};

export const useCareerForm = () => {
  const [isCareerFormOpen, setIsCareerFormOpen] =
    useRecoilState(careerFormState);

  const { setSelectedCareer } = useSelectedCareer();

  const openCareerForm = () => setIsCareerFormOpen(true);
  const closeCareerForm = () => {
    setSelectedCareer(null);
    setIsCareerFormOpen(false);
  };

  return { isCareerFormOpen, openCareerForm, closeCareerForm };
};
