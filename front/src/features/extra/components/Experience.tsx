import React from 'react';
import { Resume } from '@/components/Resume';
import { useExtraState } from '../stores/hooks';
import { ResumeForm } from '@/components/ResumeForm';
import { useForm } from '@/hooks';
import { EXPERIENCE_TYPE } from '../options';
import {
  SelectInput,
  Input,
  DateInput,
  TextArea,
  NoListMessage,
} from '@components';

const Experience = () => {
  const { extraFormState, openExtraForm } = useExtraState();

  return (
    <Resume
      title="경험/활동/교육"
      isFormOpen={extraFormState.skill}
      handleAddButtonClick={() => openExtraForm('experience')}
    >
      {extraFormState.experience ? <ExperienceForm /> : <ExperienceList />}
    </Resume>
  );
};

const ExperienceForm = () => {
  const { closeExtraForm } = useExtraState();
  const { formData, handleInputChange, handleSelectChange, handleDateChange } =
    useForm({
      experience: '',
      place: '',
      startDate: '',
      endDate: '',
      detail: '',
    });

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <ResumeForm>
      <ResumeForm.Row>
        <SelectInput
          options={EXPERIENCE_TYPE}
          onChange={handleSelectChange('experience')}
        />
        <Input
          name="place"
          placeholder="기관/장소명 *"
          onChange={handleInputChange}
        />
      </ResumeForm.Row>
      <ResumeForm.Row>
        <DateInput
          className="input_s"
          setDate={handleDateChange('startDate')}
          placeholder="시작년월"
        />
        <DateInput
          className="input_s"
          setDate={handleDateChange('endDate')}
          placeholder="종료년월"
        />
      </ResumeForm.Row>
      <ResumeForm.Row>
        <TextArea
          name="detail"
          title="활동 설명"
          placeholder="경험/활동 상세내역 입력"
          onChange={handleInputChange}
        />
      </ResumeForm.Row>
      <ResumeForm.Buttons
        onCancel={() => closeExtraForm('experience')}
        onSubmit={handleSubmit}
      />
    </ResumeForm>
  );
};

const ExperienceList = () => {
  return (
    <NoListMessage message="교육이수내역, 해외연수, 대내외활동 등의 경험을 작성해보세요!" />
  );
};

export default Experience;
