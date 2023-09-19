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
import { useForm } from '@/hooks';
import { IEducation } from '../types/IEducation';

const EduHighForm = () => {
  const {
    formData,
    setFormData,
    handleInputChange,
    handleSelectChange,
    handleDateChange,
    handleCheckboxChange,
  } = useForm<IEducation>({
    name: '',
    state: '',
    enterDate: '',
    graduateDate: '',
    major: '',
    passDate: '',
    isQualificationExam: false,
    isTransfer: false,
  });
  const [isError, setIsError] = useState({
    name: false,
    state: false,
    passDate: false,
  });

  const { finalEdu, handleSelectFinalEdu } = useFinalEdu();
  const { closeEduForm } = useEduForm();

  const handleSubmit = () => {
    if (!formData.isQualificationExam)
      setIsError({
        ...isError,
        name: formData.name === '',
        state: formData.state === '',
      });
    else
      setIsError({
        ...isError,
        passDate: formData.passDate === '',
      });
    if (
      (!formData.isQualificationExam &&
        formData.name !== '' &&
        formData.state !== '') ||
      (formData.isQualificationExam && formData.passDate !== '')
    )
      closeEduForm();
  };

  return (
    <ResumeForm hidden={finalEdu !== 'high'}>
      <div className="form-row">
        {!formData.isQualificationExam && (
          <SelectInput
            options={EDUCATION_OPTIONS}
            onChange={handleSelectFinalEdu}
            value={finalEdu}
          />
        )}
        {formData.isQualificationExam && (
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
              setDate={handleDateChange('passDate')}
              invalid={isError.passDate}
              initialValue={formData.passDate}
            />
          </React.Fragment>
        )}
        <CheckboxInput
          content="대입 검정고시"
          isChecked={formData.isQualificationExam}
          setIsChecked={handleCheckboxChange('isQualificationExam')}
        />
        <CheckboxInput
          content="편입"
          isChecked={formData.isTransfer}
          setIsChecked={handleCheckboxChange('isTransfer')}
        />
      </div>
      <div
        className="form-div"
        style={{ display: formData.isQualificationExam ? 'none' : 'flex' }}
      >
        <div className="form-row">
          <Input
            name="name"
            placeholder="학교명"
            invalid={isError.name}
            onChange={handleInputChange}
          />
          <SelectInput
            className="input_s"
            invalid={isError.state}
            options={GRADUATION_OPTIONS}
            onChange={handleSelectChange('state')}
          />
          <DateInput
            className="input_s"
            name="enterDate"
            placeholder="입학년월"
            type="text"
            setDate={handleDateChange('enterDate')}
            initialValue={formData.enterDate}
          />
          <DateInput
            className="input_s"
            name="graduateDate"
            placeholder="졸업년월"
            type="text"
            setDate={handleDateChange('graduateDate')}
            initialValue={formData.graduateDate}
          />
          <SelectInput
            className="input_s"
            options={HIGH_MAJOR_OPTIONS}
            onChange={handleSelectChange('major')}
            value={formData.major}
          />
        </div>
      </div>
      <FormButtons onCancel={closeEduForm} onSubmit={handleSubmit} />
    </ResumeForm>
  );
};

export default EduHighForm;
