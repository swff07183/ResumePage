import React, { useState } from 'react';
import styled from 'styled-components';
import SelectInput from '../../components/Input/SelectInput';
import {
  educationOptions,
  graduationOptions,
  regionOptions,
} from '../../common/Options';
import { eduFormState, finalEduState } from '../../store';
import { useRecoilState, useSetRecoilState } from 'recoil';
import FormButtons from '../FormButtons';
import CheckboxInput from '../../components/Input/CheckboxInput';
import Input from '../../components/Input';

interface EduUniversityForm {}

const EduUniversityForm = (props: EduUniversityForm) => {
  const [universityInfo, setUniversityInfo] = useState({
    school: '',
    graduate: '',
    enterDate: '',
    graduateDate: '',
    region: '',
    passDate: '',
  });
  const [isTransfer, setIsTransfer] = useState<boolean>(false);
  const [isQualificationExam, setIsQualificationExam] =
    useState<boolean>(false);
  const [finalEdu, setFinalEdu] = useRecoilState(finalEduState);
  const setIsEduFormOpen = useSetRecoilState(eduFormState);

  const handleSelectFinalEdu = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFinalEdu(e.target.value);
  };
  const handleSelectGraduation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUniversityInfo({ ...universityInfo, graduate: e.target.value });
  };
  const handleSelectRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUniversityInfo({ ...universityInfo, region: e.target.value });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUniversityInfo({ ...universityInfo, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper hidden={finalEdu !== 'university'}>
      <div className="form-col">
        <div className="form-row">
          <SelectInput
            options={educationOptions}
            onChange={handleSelectFinalEdu}
            value={finalEdu}
          />
          <SelectInput
            className="input_s"
            options={regionOptions}
            onChange={handleSelectRegion}
          />
          <Input name="school" placeholder="학교명" onChange={onChange} />
          <CheckboxInput
            content="편입"
            isChecked={isTransfer}
            setIsChecked={setIsTransfer}
          />
        </div>
        <div
          className="form-row"
          style={{ display: isQualificationExam ? 'none' : 'flex' }}
        >
          <Input />
          <SelectInput
            className="input_s"
            options={graduationOptions}
            onChange={handleSelectGraduation}
          />
          <Input
            className="input_s"
            name="enterDate"
            placeholder="입학년월"
            type="text"
            onChange={onChange}
          />
          <Input
            className="input_s"
            name="graduateDate"
            placeholder="졸업년월"
            type="text"
            onChange={onChange}
          />
          <SelectInput
            className="input_s"
            options={regionOptions}
            onChange={handleSelectRegion}
          />
        </div>
        <FormButtons
          onCancel={() => setIsEduFormOpen(false)}
          onSubmit={() => console.log(universityInfo)}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default EduUniversityForm;
