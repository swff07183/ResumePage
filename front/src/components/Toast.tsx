import useToast from '@/hooks/useToast';
import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

interface ToastProps {}

const Toast = (props: ToastProps) => {
  const {} = props;
  const { toastState, setToastState } = useToast();

  return (
    <Snackbar
      message="toastMessage"
      open={toastState.open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      autoHideDuration={2000}
      onClose={() => {
        setToastState({ open: false });
      }}
    >
      <Alert
        severity={toastState.type}
        sx={{
          width: '400px',
          fontWeight: 'bold',
        }}
      >
        {toastState.message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
