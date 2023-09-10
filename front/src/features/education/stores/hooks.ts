import { useRecoilState } from 'recoil';
import { eduFormState, finalEduState } from './atoms';

export const useEduForm = () => {
  const [isEduFormOpen, setIsEduFormOpen] = useRecoilState(eduFormState);

  const openEduForm = () => setIsEduFormOpen(true);
  const closeEduForm = () => setIsEduFormOpen(false);

  return { isEduFormOpen, openEduForm, closeEduForm };
};

export const useFinalEdu = () => {
  const [finalEdu, setFinalEdu] = useRecoilState(finalEduState);

  const handleSelectFinalEdu = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFinalEdu(e.target.value);
  };

  return { finalEdu, setFinalEdu, handleSelectFinalEdu };
};
