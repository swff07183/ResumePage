import React, { useState } from 'react';
import styled from 'styled-components';
import SelectInput from '../../components/Input/SelectInput';
import {
  EDUCATION_OPTIONS,
  GRADUATION_OPTIONS,
  HIGH_MAJOR_OPTIONS,
} from '../../common/Options';
import FormButtons from '../FormButtons';
import CheckboxInput from '../../components/Input/CheckboxInput';
import Input from '../../components/Input';
import { useEduForm, useFinalEdu } from '../../recoil/edu/hooks';

const EduHighForm = () => {
  const [highInfo, setHighInfo] = useState({
    school: '',
    graduate: '',
    enterDate: '',
    graduateDate: '',
    major: '',
    passDate: '',
  });
  const [isTransfer, setIsTransfer] = useState<boolean>(false);
  const [isQualificationExam, setIsQualificationExam] =
    useState<boolean>(false);

  const { closeEduForm } = useEduForm();
  const { finalEdu, handleSelectFinalEdu } = useFinalEdu();

  const handleSelectGraduation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHighInfo({ ...highInfo, graduate: e.target.value });
  };
  const handleSelectMajor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHighInfo({ ...highInfo, major: e.target.value });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHighInfo({ ...highInfo, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper hidden={finalEdu !== 'high'}>
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
                options={EDUCATION_OPTIONS}
                onChange={handleSelectFinalEdu}
                value={finalEdu}
              />
              <Input
                className="input_s"
                name="passDate"
                placeholder="합격년월*"
                onChange={onChange}
                width={135}
              />
            </React.Fragment>
          )}
          <CheckboxInput
            content="대입 검정고시"
            isChecked={isQualificationExam}
            setIsChecked={setIsQualificationExam}
          />
          <CheckboxInput
            content="편입"
            isChecked={isTransfer}
            setIsChecked={setIsTransfer}
          />
        </div>
        <div
          className="form-col"
          style={{ display: isQualificationExam ? 'none' : 'flex' }}
        >
          <div className="form-row">
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
              options={HIGH_MAJOR_OPTIONS}
              onChange={handleSelectMajor}
            />
          </div>
          <div className="form-row">
            <Input name="major" placeholder="전공" type="text" />
          </div>
        </div>
        <FormButtons
          onCancel={closeEduForm}
          onSubmit={() => console.log(highInfo)}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default EduHighForm;
