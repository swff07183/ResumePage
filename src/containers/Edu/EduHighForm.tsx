import React, { useState } from 'react';
import styled from 'styled-components';
import SelectInput from '../../components/Input/SelectInput';
import {
  educationOptions,
  graduationOptions,
  highMajorOptions,
} from '../../common/Options';
import { eduFormState, finalEduState } from '../../store';
import { useRecoilState, useSetRecoilState } from 'recoil';
import FormButtons from '../FormButtons';
import CheckboxInput from '../../components/Input/CheckboxInput';
import Input from '../../components/Input';

interface EduHighFormProps {}

const EduHighForm = (props: EduHighFormProps) => {
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
  const [finalEdu, setFinalEdu] = useRecoilState(finalEduState);
  const setIsEduFormOpen = useSetRecoilState(eduFormState);

  const handleSelectFinalEdu = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFinalEdu(e.target.value);
  };
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
              options={educationOptions}
              onChange={handleSelectFinalEdu}
              value={finalEdu}
            />
          )}
          {isQualificationExam && (
            <React.Fragment>
              <SelectInput
                options={educationOptions}
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
              options={highMajorOptions}
              onChange={handleSelectMajor}
            />
          </div>
          <div className="form-row">
            <Input name="major" placeholder="전공" type="text" />
          </div>
        </div>
        <FormButtons
          onCancel={() => setIsEduFormOpen(false)}
          onSubmit={() => console.log(highInfo)}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default EduHighForm;
