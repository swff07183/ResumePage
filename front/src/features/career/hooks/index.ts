import { useMutation, useQuery } from '@tanstack/react-query';
import { ICareer } from '../types/ICareer';
import { useCareerForm } from '../stores/hooks';
import {
  deleteCareer,
  getCareerList,
  postCareer,
  putCareer,
} from '@/api/career';
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

  const updateMutation = useMutation({
    mutationFn: (params: ICareer) => putCareer(params.id!, params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['career', 'list'] });
      closeCareerForm();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteCareer(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['career', 'list'] });
    },
  });

  return { data, mutation, updateMutation, deleteMutation };
};
