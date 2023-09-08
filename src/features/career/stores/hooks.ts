import { useRecoilState } from 'recoil';
import { careerFormState } from './atoms';

export const useCareerForm = () => {
  const [isCareerFormOpen, setIsCareerFormOpen] =
    useRecoilState(careerFormState);

  const openCareerForm = () => setIsCareerFormOpen(true);
  const closeCareerForm = () => setIsCareerFormOpen(false);

  return { isCareerFormOpen, openCareerForm, closeCareerForm };
};
