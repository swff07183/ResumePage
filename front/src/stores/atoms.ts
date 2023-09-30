import { atom } from 'recoil';
import { AlertColor } from '@mui/material';

export interface IToast {
  open: boolean;
  type?: AlertColor;
  message?: string;
}

export const toastRecoilState = atom<IToast>({
  key: 'toastRecoilState',
  default: {
    open: false,
    message: '',
  },
});
