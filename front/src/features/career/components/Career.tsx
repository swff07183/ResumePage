import { Resume } from '@/components/Resume';
import React from 'react';
import { useCareerForm } from '../stores/hooks';
import CareerForm from './CareerForm';
import CareerList from './CareerList';

const Career = () => {
  const { isCareerFormOpen, openCareerForm } = useCareerForm();
  return (
    <Resume
      title="경력"
      isFormOpen={isCareerFormOpen}
      handleAddButtonClick={openCareerForm}
    >
      {isCareerFormOpen ? <CareerForm /> : <CareerList />}
    </Resume>
  );
};

export default Career;
