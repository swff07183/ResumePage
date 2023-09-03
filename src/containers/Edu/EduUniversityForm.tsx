import React, { useState } from 'react';
import styled from 'styled-components';
import SelectInput from '../../components/Input/SelectInput';
import {
  educationOptions,
  graduationOptions,
  regionOptions,
} from '../../common/Options';
import FormButtons from '../FormButtons';
import CheckboxInput from '../../components/Input/CheckboxInput';
import Input from '../../components/Input';
import { useEduForm, useFinalEdu } from '../../recoil/edu/hooks';

const EduUniversityForm = () => {
  const [universityInfo, setUniversityInfo] = useState({
    school: '',
    graduate: '',
    enterDate: '',
    graduateDate: '',
    region: '',
    passDate: '',
  });
  const [isTransfer, setIsTransfer] = useState<boolean>(false);

  const { closeEduForm } = useEduForm();
  const { finalEdu, handleSelectFinalEdu } = useFinalEdu();

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
        <div className="form-row">
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
          onCancel={closeEduForm}
          onSubmit={() => console.log(universityInfo)}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default EduUniversityForm;
