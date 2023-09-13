import React from 'react';
import { ResumeForm } from '@components/ResumeForm';
import { EDUCATION_OPTIONS } from '../options';
import EduPrimaryForm from './EduPrimaryForm';
import EduMiddleForm from './EduMiddleForm';
import EduHighForm from './EduHighForm';
import EduUniversityForm from './EduUniversityForm';
import { useEduForm, useFinalEdu } from '../stores/hooks';
import { FormButtons, SelectInput } from '@components';

const EducationForm = () => {
  const { closeEduForm } = useEduForm();
  const { finalEdu, handleSelectFinalEdu } = useFinalEdu();

  return (
    <>
      {finalEdu === '' && (
        <ResumeForm>
          <SelectInput
            options={EDUCATION_OPTIONS}
            onChange={handleSelectFinalEdu}
            value={finalEdu}
          />
          <FormButtons onCancel={closeEduForm} />
        </ResumeForm>
      )}
      <EduPrimaryForm />
      <EduMiddleForm />
      <EduHighForm />
      <EduUniversityForm />
    </>
  );
};

export default EducationForm;
