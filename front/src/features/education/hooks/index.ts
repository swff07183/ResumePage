import { useMutation, useQuery } from '@tanstack/react-query';
import { IEducation } from '../types/IEducation';
import { getEducation, postEducation } from '@/api/education';
import { useEduForm } from '../stores/hooks';
import { queryClient } from '@/index';

export const useEducationInfoQuery = () => {
  const { closeEduForm } = useEduForm();
  const { data: educationInfo } = useQuery<IEducation>({
    queryKey: ['education', 'info'],
    queryFn: getEducation,
  });

  const mutation = useMutation({
    mutationFn: (params: IEducation) => postEducation(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['education', 'info'] });
      closeEduForm();
    },
  });

  return { educationInfo, mutation };
};
