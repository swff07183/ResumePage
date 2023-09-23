import { deleteSkill, getSkill, postSkill } from '@/api/extra';
import { queryClient } from '@/index';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ISkill } from '../types';
import { useExtraState } from '../stores/hooks';

export const useSkillQuery = () => {
  const { closeExtraForm } = useExtraState();

  const { data } = useQuery({
    queryKey: ['skill'],
    queryFn: getSkill,
  });

  const mutation = useMutation({
    mutationFn: (data: ISkill) => postSkill(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skill'] });
      closeExtraForm('skill');
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteSkill(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skill'] });
    },
  });

  return { data, mutation, deleteMutation };
};
