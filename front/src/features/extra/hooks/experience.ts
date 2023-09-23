import { queryClient } from '@/index';
import { useMutation, useQuery } from '@tanstack/react-query';
import { IExperience } from '../types';
import { useExtraState } from '../stores/hooks';
import {
  deleteExperience,
  getExperience,
  postExperience,
  putExperience,
} from '@/api/extra';

export const useExperienceQuery = () => {
  const { closeExtraForm } = useExtraState();

  const { data } = useQuery<IExperience[]>({
    queryKey: ['experience'],
    queryFn: getExperience,
  });

  const mutation = useMutation({
    mutationFn: (data: IExperience) => postExperience(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['experience'] });
      closeExtraForm('experience');
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: IExperience) => putExperience(data.id!, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['experience'] });
      closeExtraForm('experience');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteExperience(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['experience'] });
    },
  });

  return { data, mutation, deleteMutation, updateMutation };
};
