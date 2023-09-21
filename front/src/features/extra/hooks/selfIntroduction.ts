import { queryClient } from '@/index';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ISelfIntroduction } from '../types';
import { useExtraState } from '../stores/hooks';
import {
  deleteSelfIntroduction,
  getSelfIntroduction,
  postSelfIntroduction,
} from '@/api/extra';

export const useSelfIntroductionQuery = () => {
  const { closeExtraForm } = useExtraState();

  const query = useQuery<ISelfIntroduction>({
    queryKey: ['selfIntroduction'],
    queryFn: getSelfIntroduction,
    retry: 0,
  });

  const mutation = useMutation({
    mutationFn: (data: ISelfIntroduction) => postSelfIntroduction(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['selfIntroduction'] });
      closeExtraForm('selfIntroduction');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteSelfIntroduction(),
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: ['selfIntroduction'] });
    },
  });

  return { query, mutation, deleteMutation };
};
