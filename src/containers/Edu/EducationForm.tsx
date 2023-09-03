import React from 'react';
import { ResumeForm } from '../../components/ResumeForm';
import SelectInput from '../../components/Input/SelectInput';
import { EDUCATION_OPTIONS } from '../../common/Options';
import EduPrimaryForm from './EduPrimaryForm';
import EduMiddleForm from './EduMiddleForm';
import EduHighForm from './EduHighForm';
import EduUniversityForm from './EduUniversityForm';
import FormButtons from '../FormButtons';
import { useEduForm, useFinalEdu } from '../../recoil/edu/hooks';

const EducationForm = () => {
  const { closeEduForm } = useEduForm();
  const { finalEdu, handleSelectFinalEdu } = useFinalEdu();

  return (
    <ResumeForm>
      <div className="form-div">
        {finalEdu === '' && (
          <React.Fragment>
            <SelectInput
              options={EDUCATION_OPTIONS}
              onChange={handleSelectFinalEdu}
              value={finalEdu}
            />
            <FormButtons onCancel={closeEduForm} />
          </React.Fragment>
        )}
        <EduPrimaryForm />
        <EduMiddleForm />
        <EduHighForm />
        <EduUniversityForm />
      </div>
    </ResumeForm>
  );
};

export default EducationForm;
