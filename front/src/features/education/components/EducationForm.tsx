import React, { useEffect } from 'react';
import { ResumeForm } from '@components/ResumeForm';
import { EDUCATION_OPTIONS } from '../options';
import EduPrimaryForm from './EduPrimaryForm';
import EduMiddleForm from './EduMiddleForm';
import EduHighForm from './EduHighForm';
import EduUniversityForm from './EduUniversityForm';
import { useEduForm, useFinalEdu } from '../stores/hooks';
import { FormButtons, SelectInput } from '@components';
import { useEducationInfoQuery } from '../hooks';

const EducationForm = () => {
  const { closeEduForm } = useEduForm();
  const { finalEdu, setFinalEdu, handleSelectFinalEdu } = useFinalEdu();

  const { educationInfo } = useEducationInfoQuery();

  useEffect(() => {
    setFinalEdu(educationInfo?.finalEdu ?? '');
  }, [educationInfo]);

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
