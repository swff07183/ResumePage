import React, { useState } from 'react';

import { EDUCATION_OPTIONS, GRADUATION_OPTIONS } from '../options';
import { REGION_OPTIONS } from '@/common/Options';

import { useEduForm, useFinalEdu } from '../stores/hooks';
import {
  SelectInput,
  FormButtons,
  CheckboxInput,
  Input,
  DateInput,
} from '@components';
import { ResumeForm } from '@/components/ResumeForm';

const EduMiddleForm = () => {
  const [middleInfo, setMiddleInfo] = useState({
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
    setMiddleInfo({ ...middleInfo, graduate: e.target.value });
    setIsError({ ...isError, graduate: false });
  };
  const handleSelectRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMiddleInfo({ ...middleInfo, region: e.target.value });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMiddleInfo({ ...middleInfo, [e.target.name]: e.target.value });
    setIsError({ ...isError, [e.target.name]: false });
  };
  const handleSubmit = () => {
    console.log({ ...middleInfo, isQualificationExam });
    if (!isQualificationExam)
      setIsError({
        ...isError,
        school: middleInfo.school === '',
        graduate: middleInfo.graduate === '',
      });
    else
      setIsError({
        ...isError,
        passDate: middleInfo.passDate === '',
      });
    if (
      (!isQualificationExam &&
        middleInfo.school !== '' &&
        middleInfo.graduate !== '') ||
      (isQualificationExam && middleInfo.passDate !== '')
    ) {
      closeEduForm();
    }
  };

  return (
    <ResumeForm hidden={finalEdu !== 'middle'}>
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
              value={middleInfo.region}
            />
            <DateInput
              className="input_s"
              name="passDate"
              placeholder="합격년월*"
              onChange={onChange}
              setDate={(date: string) => {
                setMiddleInfo({ ...middleInfo, passDate: date });
                setIsError({ ...isError, passDate: false });
              }}
              invalid={isError.passDate}
              initialValue={middleInfo.passDate}
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
            setMiddleInfo({ ...middleInfo, enterDate: date });
          }}
          initialValue={middleInfo.enterDate}
        />
        <DateInput
          className="input_s"
          name="graduateDate"
          placeholder="졸업년월"
          type="text"
          setDate={(date: string) =>
            setMiddleInfo({ ...middleInfo, graduateDate: date })
          }
          initialValue={middleInfo.graduateDate}
        />
        <SelectInput
          className="input_s"
          options={REGION_OPTIONS}
          onChange={handleSelectRegion}
        />
      </div>
      <FormButtons onCancel={closeEduForm} onSubmit={handleSubmit} />
    </ResumeForm>
  );
};

export default EduMiddleForm;
