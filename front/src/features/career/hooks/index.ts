import { useMutation, useQuery } from '@tanstack/react-query';
import { ICareer } from '../types/ICareer';
import { useCareerForm } from '../stores/hooks';
import { getCareerList, postCareer } from '@/api/career';
import { queryClient } from '@/index';

export const useCareerQuery = () => {
  const { closeCareerForm } = useCareerForm();
  const { data } = useQuery<ICareer[]>({
    queryKey: ['career', 'list'],
    queryFn: getCareerList,
  });

  const mutation = useMutation({
    mutationFn: (params: ICareer) => postCareer(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['career', 'list'] });
      closeCareerForm();
    },
  });

  return { data, mutation };
};
