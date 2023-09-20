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
import { useEducationInfoQuery } from '../hooks';
import { useForm } from '@/hooks';
import { IEducation } from '../types/IEducation';
import { initialEducation } from '../constant';

const EduMiddleForm = () => {
  const { educationInfo, mutation } = useEducationInfoQuery();
  const {
    formData,
    isError,
    setIsError,
    handleInputChange,
    handleSelectChange,
    handleDateChange,
  } = useForm<IEducation>(
    educationInfo?.finalEdu === 'middle'
      ? {
          ...initialEducation,
          finalEdu: 'middle',
          name: educationInfo.name,
          state: educationInfo.state,
          enterDate: educationInfo.enterDate,
          graduateDate: educationInfo.graduateDate,
          region: educationInfo.region,
          passDate: educationInfo.passDate,
        }
      : { ...initialEducation, finalEdu: 'middle' }
  );
  const [isQualificationExam, setIsQualificationExam] = useState<boolean>(
    educationInfo?.finalEdu === 'middle' && educationInfo?.isQualificationExam
      ? true
      : false
  );

  const { finalEdu, handleSelectFinalEdu } = useFinalEdu();
  const { closeEduForm } = useEduForm();

  const handleSubmit = () => {
    if (!isQualificationExam)
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
      (!isQualificationExam && formData.name !== '' && formData.state !== '') ||
      (isQualificationExam && formData.passDate !== '')
    ) {
      const postData = !isQualificationExam
        ? {
            ...initialEducation,
            finalEdu: 'middle',
            isQualificationExam: false,
            name: formData.name,
            state: formData.state,
            enterDate: formData.enterDate,
            graduateDate: formData.graduateDate,
            region: formData.region,
          }
        : {
            ...initialEducation,
            finalEdu: 'middle',
            isQualificationExam: true,
            passDate: formData.passDate ?? '',
            region: formData.region,
          };
      mutation.mutate(postData);
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
              onChange={handleSelectChange('region')}
              value={formData.region}
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
          name="name"
          placeholder="학교명"
          invalid={isError.name}
          onChange={handleInputChange}
          value={formData.name}
        />
        <SelectInput
          className="input_s"
          invalid={isError.state}
          options={GRADUATION_OPTIONS}
          onChange={handleSelectChange('state')}
          value={formData.state}
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
          options={REGION_OPTIONS}
          onChange={handleSelectChange('region')}
          value={formData.region}
        />
      </div>
      <FormButtons onCancel={closeEduForm} onSubmit={handleSubmit} />
    </ResumeForm>
  );
};

export default EduMiddleForm;
