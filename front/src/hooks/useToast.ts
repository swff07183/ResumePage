import { toastRecoilState } from '@/stores/atoms';
import { useRecoilState } from 'recoil';

const useToast = () => {
  const [toastState, setToastState] = useRecoilState(toastRecoilState);

  const openToast = (toast: { type: 'success' | 'error'; message: string }) => {
    const { type, message } = toast;

    setToastState({ open: true, type, message });
  };

  const saveToast = () => {
    setToastState({
      open: true,
      type: 'success',
      message: '성공적으로 저장하였습니다.',
    });
  };

  return { toastState, setToastState, openToast, saveToast };
};
export default useToast;
