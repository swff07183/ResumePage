import { useMutation, useQuery } from '@tanstack/react-query';
import { IUserInfo } from '../types';
import { getUserInfo, postUserInfoType } from '@/api/user';
import { useToast } from '@/hooks';
import { queryClient } from '@/index';

export const useUserInfoQuery = () => {
  const { saveToast } = useToast();

  const { data } = useQuery<IUserInfo>({
    queryKey: ['user', 'userInfo'],
    queryFn: () => getUserInfo(),
  });

  const mutation = useMutation({
    mutationFn: (data: { userType: string }) => postUserInfoType(data),
    onSuccess: (data) => {
      saveToast();
      queryClient.invalidateQueries({ queryKey: ['user', 'userInfo'] });
    },
  });

  return { data, mutation };
};
