import { Resume } from '@/components/Resume';
import React from 'react';
import { useEduForm } from '../stores/hooks';
import EducationForm from './EducationForm';
import EducationList from './EducationList';
import { useEducationInfoQuery } from '../hooks';

export const Education = () => {
  const { isEduFormOpen, openEduForm } = useEduForm();
  const { educationInfo } = useEducationInfoQuery();
  return (
    <Resume
      title="학력"
      isRequired
      isFormOpen={isEduFormOpen}
      handleAddButtonClick={!educationInfo ? openEduForm : undefined}
    >
      {isEduFormOpen ? <EducationForm /> : <EducationList />}
    </Resume>
  );
};
