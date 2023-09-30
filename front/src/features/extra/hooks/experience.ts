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
import { useToast } from '@/hooks';

export const useExperienceQuery = () => {
  const { closeExtraForm } = useExtraState();
  const { saveToast } = useToast();

  const { data } = useQuery<IExperience[]>({
    queryKey: ['experience'],
    queryFn: getExperience,
  });

  const mutation = useMutation({
    mutationFn: (data: IExperience) => postExperience(data),
    onSuccess: () => {
      saveToast();
      queryClient.invalidateQueries({ queryKey: ['experience'] });
      closeExtraForm('experience');
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: IExperience) => putExperience(data.id!, data),
    onSuccess: () => {
      saveToast();
      queryClient.invalidateQueries({ queryKey: ['experience'] });
      closeExtraForm('experience');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteExperience(id),
    onSuccess: () => {
      saveToast();
      queryClient.invalidateQueries({ queryKey: ['experience'] });
    },
  });

  return { data, mutation, deleteMutation, updateMutation };
};
