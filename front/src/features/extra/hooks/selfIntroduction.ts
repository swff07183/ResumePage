import { queryClient } from '@/index';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ISelfIntroduction } from '../types';
import { useExtraState } from '../stores/hooks';
import {
  deleteSelfIntroduction,
  getSelfIntroduction,
  postSelfIntroduction,
} from '@/api/extra';
import { useToast } from '@/hooks';

export const useSelfIntroductionQuery = () => {
  const { closeExtraForm } = useExtraState();
  const { saveToast } = useToast();

  const { data } = useQuery<ISelfIntroduction>({
    queryKey: ['selfIntroduction'],
    queryFn: getSelfIntroduction,
    retry: 0,
  });

  const mutation = useMutation({
    mutationFn: (data: ISelfIntroduction) => postSelfIntroduction(data),
    onSuccess: () => {
      saveToast();
      queryClient.invalidateQueries({ queryKey: ['selfIntroduction'] });
      closeExtraForm('selfIntroduction');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteSelfIntroduction(),
    onSuccess: () => {
      saveToast();
      queryClient.resetQueries({ queryKey: ['selfIntroduction'] });
    },
  });

  return { data, mutation, deleteMutation };
};
