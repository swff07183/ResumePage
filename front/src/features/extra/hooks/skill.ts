import { getSkill, postSkill } from '@/api/extra';
import { queryClient } from '@/index';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ISkill } from '../types';

export const useSkillQuery = () => {
  const query = useQuery({
    queryKey: ['skill'],
    queryFn: getSkill,
  });

  const mutation = useMutation({
    mutationFn: (data: ISkill) => postSkill(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skill'] });
    },
  });

  return { query, mutation };
};
