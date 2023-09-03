import React, { useState } from 'react';
import styled from 'styled-components';
import SelectInput from '../../components/Input/SelectInput';
import {
  EDUCATION_OPTIONS,
  GRADUATION_OPTIONS,
  REGION_OPTIONS,
} from '../../common/Options';
import FormButtons from '../FormButtons';
import CheckboxInput from '../../components/Input/CheckboxInput';
import Input from '../../components/Input';
import { useEduForm, useFinalEdu } from '../../recoil/edu/hooks';

const EduPrimaryForm = () => {
  const [primaryInfo, setPrimaryInfo] = useState({
    school: '',
    graduate: '',
    enterDate: '',
    graduateDate: '',
    region: '',
    passDate: '',
  });
  const [isQualificationExam, setIsQualificationExam] =
    useState<boolean>(false);

  const { finalEdu, handleSelectFinalEdu } = useFinalEdu();
  const { closeEduForm } = useEduForm();

  const handleSelectGraduation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrimaryInfo({ ...primaryInfo, graduate: e.target.value });
  };
  const handleSelectRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrimaryInfo({ ...primaryInfo, region: e.target.value });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrimaryInfo({ ...primaryInfo, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper hidden={finalEdu !== 'primary'}>
      <div className="form-col">
        <div className="form-row">
          {!isQualificationExam && (
            <SelectInput
              options={EDUCATION_OPTIONS}
              onChange={handleSelectFinalEdu}
              value={finalEdu}
            />
          )}
          {isQualificationExam && (
            <React.Fragment>
              <SelectInput
                className="input_s"
                options={EDUCATION_OPTIONS}
                onChange={handleSelectFinalEdu}
                value={finalEdu}
              />
              <SelectInput
                className="input_s"
                options={REGION_OPTIONS}
                onChange={handleSelectRegion}
              />
              <Input
                className="input_s"
                name="passDate"
                placeholder="합격년월*"
                onChange={onChange}
              />
            </React.Fragment>
          )}
          <CheckboxInput
            content="중입 검정고시(초졸)"
            isChecked={isQualificationExam}
            setIsChecked={setIsQualificationExam}
          />
        </div>
        <div
          className="form-row"
          style={{ display: isQualificationExam ? 'none' : 'flex' }}
        >
          <Input name="school" placeholder="학교명" onChange={onChange} />
          <SelectInput
            className="input_s"
            options={GRADUATION_OPTIONS}
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
            options={REGION_OPTIONS}
            onChange={handleSelectRegion}
          />
        </div>
        <FormButtons
          onCancel={closeEduForm}
          onSubmit={() => console.log(primaryInfo)}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default EduPrimaryForm;
