import { deleteAward, getAward, postAward, putAward } from '@/api/extra';
import { queryClient } from '@/index';
import { useMutation, useQuery } from '@tanstack/react-query';
import { IAward } from '../types';
import { useExtraState } from '../stores/hooks';

export const useAwardQuery = () => {
  const { closeExtraForm } = useExtraState();

  const { data } = useQuery<IAward[]>({
    queryKey: ['award'],
    queryFn: getAward,
  });

  const mutation = useMutation({
    mutationFn: (data: IAward) => postAward(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['award'] });
      closeExtraForm('award');
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: IAward) => putAward(data.id!, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['award'] });
      closeExtraForm('award');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteAward(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['award'] });
    },
  });

  return { data, mutation, deleteMutation, updateMutation };
};
