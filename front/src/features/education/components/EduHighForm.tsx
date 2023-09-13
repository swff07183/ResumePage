import React, { useState } from 'react';

import {
  EDUCATION_OPTIONS,
  GRADUATION_OPTIONS,
  HIGH_MAJOR_OPTIONS,
} from '../options';

import { useEduForm, useFinalEdu } from '../stores/hooks';
import {
  SelectInput,
  FormButtons,
  CheckboxInput,
  Input,
  DateInput,
} from '@components';
import { ResumeForm } from '@/components/ResumeForm';

const EduHighForm = () => {
  const [highInfo, setHighInfo] = useState({
    school: '',
    graduate: '',
    enterDate: '',
    graduateDate: '',
    major: '',
    passDate: '',
  });
  const [isError, setIsError] = useState({
    school: false,
    graduate: false,
    passDate: false,
  });
  const [isTransfer, setIsTransfer] = useState<boolean>(false);
  const [isQualificationExam, setIsQualificationExam] =
    useState<boolean>(false);

  const { finalEdu, handleSelectFinalEdu } = useFinalEdu();
  const { closeEduForm } = useEduForm();

  const handleSelectGraduation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHighInfo({ ...highInfo, graduate: e.target.value });
    setIsError({ ...isError, graduate: false });
  };
  const handleSelectMajor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setHighInfo({ ...highInfo, major: e.target.value });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHighInfo({ ...highInfo, [e.target.name]: e.target.value });
    setIsError({ ...isError, [e.target.name]: false });
  };

  const handleSubmit = () => {
    console.log({ ...highInfo, isQualificationExam });
    if (!isQualificationExam)
      setIsError({
        ...isError,
        school: highInfo.school === '',
        graduate: highInfo.graduate === '',
      });
    else
      setIsError({
        ...isError,
        passDate: highInfo.passDate === '',
      });
    if (
      (!isQualificationExam &&
        highInfo.school !== '' &&
        highInfo.graduate !== '') ||
      (isQualificationExam && highInfo.passDate !== '')
    )
      closeEduForm();
  };

  return (
    <ResumeForm hidden={finalEdu !== 'high'}>
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
            <DateInput
              className="input_s"
              name="passDate"
              placeholder="합격년월*"
              onChange={onChange}
              setDate={(date: string) => {
                setHighInfo({ ...highInfo, passDate: date });
                setIsError({ ...isError, passDate: false });
              }}
              invalid={isError.passDate}
              initialValue={highInfo.passDate}
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
        className="form-div"
        style={{ display: isQualificationExam ? 'none' : 'flex' }}
      >
        <div className="form-row">
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
              setHighInfo({ ...highInfo, enterDate: date });
            }}
            initialValue={highInfo.enterDate}
          />
          <DateInput
            className="input_s"
            name="graduateDate"
            placeholder="졸업년월"
            type="text"
            setDate={(date: string) =>
              setHighInfo({ ...highInfo, graduateDate: date })
            }
            initialValue={highInfo.graduateDate}
          />
          <SelectInput
            className="input_s"
            options={HIGH_MAJOR_OPTIONS}
            onChange={handleSelectMajor}
            value={highInfo.major}
          />
        </div>
      </div>
      <FormButtons onCancel={closeEduForm} onSubmit={handleSubmit} />
    </ResumeForm>
  );
};

export default EduHighForm;
