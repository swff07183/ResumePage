import React, { useEffect, useState } from 'react';

import SelectInput from '../../components/Input/SelectInput';
import { educationOptions } from '../../common/Options';
import { eduFormState, finalEduState } from '../../store';

import styled from 'styled-components';
import EduPrimaryForm from './EduPrimaryForm';
import EduMiddleForm from './EduMiddleForm';
import { useRecoilState } from 'recoil';
import FormButtons from '../FormButtons';
import EduHighForm from './EduHighForm';
// import EduUniversityForm from './EduUniversityForm';
import EduUniversityForm from './EduUniversityForm';

interface EducationFormProps {}

const EducationForm = (props: EducationFormProps) => {
  const [finalEdu, setFinalEdu] = useRecoilState(finalEduState);
  const [_, setIsEduFormOpen] = useRecoilState(eduFormState);

  const handleSelectFinalEdu = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFinalEdu(e.target.value);
  };

  return (
    <Wrapper>
      <div className="form-div">
        {finalEdu === '' && (
          <React.Fragment>
            <SelectInput
              options={educationOptions}
              onChange={handleSelectFinalEdu}
              value={finalEdu}
            />
            <FormButtons onCancel={() => setIsEduFormOpen(false)} />
          </React.Fragment>
        )}
        <EduPrimaryForm />
        <EduMiddleForm />
        <EduHighForm />
        <EduUniversityForm />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* height: 140px; */
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid #4876ef;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  box-shadow: 0 4px 16px 0 rgba(17, 42, 128, 0.08);
  & .form-div {
    width: 100%;
  }
`;

export default EducationForm;
