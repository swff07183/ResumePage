import { makeSameKeyObj } from '@/utils';
import { useState } from 'react';

export const useForm = <T extends object>(form: T) => {
  const [formData, setFormData] = useState<T>({ ...form });

  const [isError, setIsError] = useState<{ [key in keyof T]: boolean }>(
    makeSameKeyObj<T, boolean>(form, false)
  );

  const handleSelectChange = (key: string) => {
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFormData({ ...formData, [key]: e.target.value });
      setIsError({ ...isError, [key]: false });
    };
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsError({ ...isError, [e.target.name]: false });
  };

  const handleDateChange = (key: string) => {
    return (date: string) => {
      setFormData({ ...formData, [key]: date });
      setIsError({ ...isError, [key]: false });
    };
  };

  const handleCheckboxChange = (key: string) => {
    return () => {
      setFormData((prev: any) => ({ ...prev, [key]: !prev?.[key] }));
    };
  };

  return {
    formData,
    setFormData,
    isError,
    setIsError,
    handleSelectChange,
    handleInputChange,
    handleDateChange,
    handleCheckboxChange,
  };
};
