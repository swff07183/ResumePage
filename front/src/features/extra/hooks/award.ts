import { deleteAward, getAward, postAward, putAward } from '@/api/extra';
import { queryClient } from '@/index';
import { useMutation, useQuery } from '@tanstack/react-query';
import { IAward } from '../types';
import { useExtraState } from '../stores/hooks';
import { useToast } from '@/hooks';

export const useAwardQuery = () => {
  const { closeExtraForm } = useExtraState();
  const { saveToast } = useToast();

  const { data } = useQuery<IAward[]>({
    queryKey: ['award'],
    queryFn: getAward,
  });

  const mutation = useMutation({
    mutationFn: (data: IAward) => postAward(data),
    onSuccess: () => {
      saveToast();
      queryClient.invalidateQueries({ queryKey: ['award'] });
      closeExtraForm('award');
    },
  });

  const updateMutation = useMutation({
    mutationFn: (data: IAward) => putAward(data.id!, data),
    onSuccess: () => {
      saveToast();
      queryClient.invalidateQueries({ queryKey: ['award'] });
      closeExtraForm('award');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteAward(id),
    onSuccess: () => {
      saveToast();
      queryClient.invalidateQueries({ queryKey: ['award'] });
    },
  });

  return { data, mutation, deleteMutation, updateMutation };
};
