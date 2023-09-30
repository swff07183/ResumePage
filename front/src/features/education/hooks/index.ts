import { useMutation, useQuery } from '@tanstack/react-query';
import { IEducation } from '../types/IEducation';
import { getEducation, postEducation } from '@/api/education';
import { useEduForm } from '../stores/hooks';
import { queryClient } from '@/index';
import { useToast } from '@/hooks';

export const useEducationInfoQuery = () => {
  const { closeEduForm } = useEduForm();
  const { saveToast } = useToast();
  const { data: educationInfo } = useQuery<IEducation>({
    queryKey: ['education', 'info'],
    queryFn: getEducation,
  });

  const mutation = useMutation({
    mutationFn: (params: IEducation) => postEducation(params),
    onSuccess: () => {
      console.log('mumu');
      queryClient.invalidateQueries({ queryKey: ['education', 'info'] });
      saveToast();
      closeEduForm();
    },
  });

  return { educationInfo, mutation };
};
