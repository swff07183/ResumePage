import { getSkill, postSkill } from '@/api/extra';
import { queryClient } from '@/index';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useSkillQuery = () => {
  const query = useQuery({
    queryKey: ['skill'],
    queryFn: getSkill,
  });

  const mutation = useMutation({
    mutationFn: postSkill,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skill'] });
    },
  });

  return { query, mutation };
};
