import { queryClient } from '@/index';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ICareerContent } from '../types';
import {
  deleteCareerContent,
  getCareerContent,
  postCareerContent,
} from '@/api/extra';
import { useExtraState } from '../stores/hooks';

export const useCareerContentQuery = () => {
  const { closeExtraForm } = useExtraState();

  const query = useQuery<ICareerContent>({
    queryKey: ['careerContent'],
    queryFn: getCareerContent,
    retry: 0,
  });

  const mutation = useMutation({
    mutationFn: (data: ICareerContent) => postCareerContent(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['careerContent'] });
      closeExtraForm('careerContent');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteCareerContent(),
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: ['careerContent'] });
    },
  });

  return { query, mutation, deleteMutation };
};
