import { useState } from 'react';

const makeErrorObj = (obj: any) => {
  const newObj = { ...obj };
  for (const key in newObj) {
    newObj[key] = false;
  }
  return newObj;
};

export const useForm = <T>(form: T) => {
  const [formData, setFormData] = useState<T>({ ...form });

  const [isError, setIsError] = useState(makeErrorObj(form));

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

  return {
    formData,
    setFormData,
    isError,
    setIsError,
    handleSelectChange,
    handleInputChange,
    handleDateChange,
  };
};
