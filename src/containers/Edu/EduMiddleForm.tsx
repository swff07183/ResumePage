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

const EduMiddleForm = () => {
  const [middleInfo, setMiddleInfo] = useState({
    school: '',
    graduate: '',
    enterDate: '',
    graduateDate: '',
    region: '',
    passDate: '',
  });
  const [isQualificationExam, setIsQualificationExam] =
    useState<boolean>(false);

  const { closeEduForm } = useEduForm();
  const { finalEdu, handleSelectFinalEdu } = useFinalEdu();

  const handleSelectGraduation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMiddleInfo({ ...middleInfo, graduate: e.target.value });
  };
  const handleSelectRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMiddleInfo({ ...middleInfo, region: e.target.value });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMiddleInfo({ ...middleInfo, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper hidden={finalEdu !== 'middle'}>
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
                className="input_s"
                options={educationOptions}
                onChange={handleSelectFinalEdu}
                value={finalEdu}
              />
              <SelectInput
                className="input_s"
                options={regionOptions}
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
            content="고입 검정고시(중졸)"
            isChecked={isQualificationExam}
            setIsChecked={setIsQualificationExam}
          />
        </div>
        <div
          className="form-row"
          style={{ display: isQualificationExam ? 'none' : 'flex' }}
        >
          <Input
            className="input_m"
            name="school"
            placeholder="학교명"
            onChange={onChange}
          />
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
          onSubmit={() => console.log(middleInfo)}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default EduMiddleForm;
