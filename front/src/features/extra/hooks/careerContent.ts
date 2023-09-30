import { queryClient } from '@/index';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ICareerContent } from '../types';
import {
  deleteCareerContent,
  getCareerContent,
  postCareerContent,
} from '@/api/extra';
import { useExtraState } from '../stores/hooks';
import { useToast } from '@/hooks';

export const useCareerContentQuery = () => {
  const { closeExtraForm } = useExtraState();
  const { saveToast } = useToast();

  const { data } = useQuery<ICareerContent>({
    queryKey: ['careerContent'],
    queryFn: getCareerContent,
    retry: 0,
  });

  const mutation = useMutation({
    mutationFn: (data: ICareerContent) => postCareerContent(data),
    onSuccess: () => {
      saveToast();
      queryClient.invalidateQueries({ queryKey: ['careerContent'] });
      closeExtraForm('careerContent');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteCareerContent(),
    onSuccess: () => {
      saveToast();
      queryClient.resetQueries({ queryKey: ['careerContent'] });
    },
  });

  return { data, mutation, deleteMutation };
};
