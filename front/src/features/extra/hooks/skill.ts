import { deleteSkill, getSkill, postSkill } from '@/api/extra';
import { queryClient } from '@/index';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ISkill } from '../types';
import { useExtraState } from '../stores/hooks';
import { useToast } from '@/hooks';

export const useSkillQuery = () => {
  const { closeExtraForm } = useExtraState();
  const { saveToast } = useToast();

  const { data } = useQuery({
    queryKey: ['skill'],
    queryFn: getSkill,
  });

  const mutation = useMutation({
    mutationFn: (data: ISkill) => postSkill(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skill'] });
      saveToast();
      closeExtraForm('skill');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteSkill(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skill'] });
      saveToast();
    },
  });

  return { data, mutation, deleteMutation };
};
