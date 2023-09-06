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
import DateInput from '../../components/Input/DateInput';

const EduPrimaryForm = () => {
  const [primaryInfo, setPrimaryInfo] = useState({
    school: '',
    graduate: '',
    enterDate: '',
    graduateDate: '',
    region: '',
    passDate: '',
  });
  const [isError, setIsError] = useState({
    school: false,
    graduate: false,
    passDate: false,
  });
  const [isQualificationExam, setIsQualificationExam] =
    useState<boolean>(false);

  const { finalEdu, handleSelectFinalEdu } = useFinalEdu();
  const { closeEduForm } = useEduForm();

  const handleSelectGraduation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrimaryInfo({ ...primaryInfo, graduate: e.target.value });
    setIsError({ ...isError, graduate: false });
  };
  const handleSelectRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrimaryInfo({ ...primaryInfo, region: e.target.value });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrimaryInfo({ ...primaryInfo, [e.target.name]: e.target.value });
    setIsError({ ...isError, [e.target.name]: false });
  };

  const handleSubmit = () => {
    console.log({ ...primaryInfo, isQualificationExam });
    if (!isQualificationExam)
      setIsError({
        ...isError,
        school: primaryInfo.school === '',
        graduate: primaryInfo.graduate === '',
      });
    else
      setIsError({
        ...isError,
        passDate: primaryInfo.passDate === '',
      });
    if (
      (!isQualificationExam &&
        primaryInfo.school !== '' &&
        primaryInfo.graduate !== '') ||
      (isQualificationExam && primaryInfo.passDate !== '')
    )
      closeEduForm();
  };

  return (
    <Wrapper hidden={finalEdu !== 'primary'}>
      <div className="form-div">
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
                value={primaryInfo.region}
              />
              <DateInput
                className="input_s"
                name="passDate"
                placeholder="합격년월*"
                setDate={(date: string) => {
                  setPrimaryInfo({ ...primaryInfo, passDate: date });
                  setIsError({ ...isError, passDate: false });
                }}
                invalid={isError.passDate}
                initialValue={primaryInfo.passDate}
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
          <Input
            name="school"
            placeholder="학교명"
            invalid={isError.school}
            onChange={onChange}
          />
          <SelectInput
            className="input_s"
            invalid={isError.graduate}
            options={GRADUATION_OPTIONS}
            onChange={handleSelectGraduation}
          />
          <DateInput
            className="input_s"
            name="enterDate"
            placeholder="입학년월"
            type="text"
            setDate={(date: string) => {
              setPrimaryInfo({ ...primaryInfo, enterDate: date });
            }}
            initialValue={primaryInfo.enterDate}
          />
          <DateInput
            className="input_s"
            name="graduateDate"
            placeholder="졸업년월"
            type="text"
            setDate={(date: string) =>
              setPrimaryInfo({ ...primaryInfo, graduateDate: date })
            }
            initialValue={primaryInfo.graduateDate}
          />
          <SelectInput
            className="input_s"
            options={REGION_OPTIONS}
            onChange={handleSelectRegion}
            value={primaryInfo.region}
          />
        </div>
        <FormButtons onCancel={closeEduForm} onSubmit={handleSubmit} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default EduPrimaryForm;
