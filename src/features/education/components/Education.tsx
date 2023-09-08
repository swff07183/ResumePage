import { Resume } from '@/components/Resume';
import React from 'react';
import { useEduForm } from '../stores/hooks';
import EducationForm from './EducationForm';
import EducationList from './EducationList';

const Education = () => {
  const { isEduFormOpen, openEduForm } = useEduForm();
  return (
    <Resume
      title="학력"
      isFormOpen={isEduFormOpen}
      handleAddButtonClick={openEduForm}
    >
      {isEduFormOpen ? <EducationForm /> : <EducationList />}
    </Resume>
  );
};

export default Education;
