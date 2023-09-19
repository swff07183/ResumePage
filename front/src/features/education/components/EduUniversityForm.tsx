import React, { useState } from 'react';
import {
  EDUCATION_OPTIONS,
  EXTRA_MAJOR_TYPE_OPTIONS,
  STANDARD_GRADE_OPTIONS,
  UNIVERSITY_GRADUATION_OPTIONS,
  UNIVERSITY_TIME_OPTIONS,
  UNIVERSITY_TYPE_OPTIONS,
} from '../options';
import { REGION_OPTIONS } from '@/common/Options';
import { useEduForm, useFinalEdu } from '../stores/hooks';
import {
  SelectInput,
  FormButtons,
  CheckboxInput,
  Input,
  DateInput,
  AddButton,
} from '@components';
import { ResumeForm } from '@/components/ResumeForm';
import { IEducation } from '../types/IEducation';
import { useForm } from '@/hooks';
import { useMutation } from '@tanstack/react-query';
import { postEducation } from '@/api/education';
import { useEducationInfoQuery } from '../hooks';

const EduUniversityForm = () => {
  const { educationInfo } = useEducationInfoQuery();
  const {
    formData,
    setFormData,
    isError,
    setIsError,
    handleInputChange,
    handleSelectChange,
    handleDateChange,
  } = useForm<IEducation>(
    educationInfo ?? {
      name: '',
      major: '',
      state: '',
      enterDate: '',
      graduateDate: '',
      universityType: '',
      universityTime: '',
      passDate: '',
      extraMajor: '',
      extraMajorType: '',
      grade: '',
      standardGrade: '',
      region: '',
      isTransfer: false,
    }
  );

  // 추가전공
  const [activeExtraMajor, setActiveExtraMajor] = useState<boolean>(
    educationInfo?.extraMajor ? true : false
  );

  // 학점
  const [activeGrade, setActiveGrade] = useState<boolean>(
    educationInfo?.grade ? true : false
  );

  // 지역
  const [activeRegion, setActiveRegion] = useState<boolean>(
    educationInfo?.region ? true : false
  );

  const { closeEduForm } = useEduForm();
  const { finalEdu, handleSelectFinalEdu } = useFinalEdu();

  const mutation = useMutation({
    mutationFn: (data: IEducation) => postEducation(data),
    onSuccess: (data) => {
      console.log(data);
      closeEduForm();
    },
  });

  const handleSubmit = () => {
    const submitInfo = {
      ...formData,
      finalEdu: 'university',
      passDate: formData.isTransfer ? formData.passDate : '',
      extraMajor: activeExtraMajor ? formData.extraMajor : '',
      extraMajorType: activeExtraMajor ? formData.extraMajorType : '',
      grade: activeGrade ? formData.grade : '',
      standardGrade: activeGrade ? formData.standardGrade : '',
      region: activeRegion ? formData.region : '',
    };
    console.log(submitInfo);

    setIsError({
      ...isError,
      universityType: formData.universityType === '',
      name: formData.name === '',
      state: formData.state === '',
    });

    if (
      formData.universityType &&
      formData.name !== '' &&
      formData.state !== ''
    ) {
      mutation.mutate(submitInfo);
      // closeEduForm();
    }
  };

  return (
    <ResumeForm hidden={finalEdu !== 'university'}>
      <div className="form-row">
        <SelectInput
          options={EDUCATION_OPTIONS}
          onChange={handleSelectFinalEdu}
          value={finalEdu}
        />
        <SelectInput
          className="input_s"
          options={UNIVERSITY_TYPE_OPTIONS}
          onChange={handleSelectChange('universityType')}
          invalid={isError.universityType}
          value={formData.universityType}
        />
        <Input
          name="name"
          placeholder="학교명"
          onChange={handleInputChange}
          invalid={isError.name}
          value={formData.name}
        />
        <CheckboxInput
          content="편입"
          isChecked={formData.isTransfer}
          setIsChecked={() =>
            setFormData((prev) => ({ ...prev, isTransfer: !prev.isTransfer }))
          }
        />
      </div>
      <div className="form-row">
        <Input
          name="major"
          placeholder="전공"
          type="text"
          onChange={handleInputChange}
          value={formData.major}
        />
        <SelectInput
          className="input_s"
          invalid={isError.state}
          options={UNIVERSITY_GRADUATION_OPTIONS}
          onChange={handleSelectChange('state')}
          value={formData.state}
        />
        <SelectInput
          className="input_s"
          options={UNIVERSITY_TIME_OPTIONS}
          onChange={handleSelectChange('universityTime')}
          value={formData.universityTime}
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
      </div>
      {(activeExtraMajor || activeGrade) && (
        <div className="form-row">
          {activeExtraMajor && (
            <>
              <Input
                name="extraMajor"
                placeholder="추가전공"
                onChange={handleInputChange}
                value={formData.extraMajor}
              />
              <SelectInput
                className="input_s"
                options={EXTRA_MAJOR_TYPE_OPTIONS}
                onChange={handleSelectChange('extraMajorType')}
                value={formData.extraMajorType}
              />
            </>
          )}
          {activeGrade && (
            <>
              <Input
                name="grade"
                className="input_s"
                placeholder="학점"
                onChange={handleInputChange}
                value={formData.grade}
              />
              <SelectInput
                className="input_s"
                options={STANDARD_GRADE_OPTIONS}
                onChange={handleSelectChange('standardGrade')}
                value={formData.standardGrade}
              />
            </>
          )}
        </div>
      )}
      {activeRegion && (
        <div className="form-row">
          <SelectInput
            className="input_s"
            options={REGION_OPTIONS}
            onChange={handleSelectChange('region')}
            value={formData.region}
          />
        </div>
      )}
      <div className="form-row">
        <AddButton
          content="추가전공"
          isActive={activeExtraMajor}
          onClick={() => setActiveExtraMajor((prev) => !prev)}
        />
        <AddButton
          content="학점"
          isActive={activeGrade}
          onClick={() => setActiveGrade((prev) => !prev)}
        />
        <AddButton
          content="지역"
          isActive={activeRegion}
          onClick={() => setActiveRegion((prev) => !prev)}
        />
      </div>
      <FormButtons onCancel={closeEduForm} onSubmit={handleSubmit} />
    </ResumeForm>
  );
};

export default EduUniversityForm;
