import React from 'react';
import { Resume } from '@/components/Resume';
import { useExtraState, useSelectedExperience } from '../stores/hooks';
import { ResumeForm } from '@/components/ResumeForm';
import { useForm } from '@/hooks';
import { EXPERIENCE_TYPE } from '../options';
import {
  SelectInput,
  Input,
  DateInput,
  TextArea,
  NoListMessage,
  ResumeList,
} from '@components';
import { useExperienceQuery } from '../hooks/experience';
import { IExperience } from '../types';
import { formatDate } from '@/utils';

const Experience = () => {
  const { extraFormState, openExtraForm } = useExtraState();

  return (
    <Resume
      title="경험/활동/교육"
      isFormOpen={extraFormState.experience}
      handleAddButtonClick={() => openExtraForm('experience')}
    >
      {extraFormState.experience ? <ExperienceForm /> : <ExperienceList />}
    </Resume>
  );
};

const ExperienceForm = () => {
  const { closeExtraForm } = useExtraState();
  const { selectedExperience } = useSelectedExperience();
  const { mutation, updateMutation } = useExperienceQuery();
  const {
    formData,
    isError,
    setIsError,
    handleInputChange,
    handleSelectChange,
    handleDateChange,
  } = useForm<IExperience>(
    selectedExperience ?? {
      type: '',
      place: '',
      startDate: '',
      endDate: '',
      detail: '',
    }
  );

  const handleSubmit = () => {
    const { id, type, place, startDate, endDate, detail } = formData;
    setIsError({
      ...isError,
      type: type === '',
      place: place === '',
      startDate: startDate === '',
      endDate: endDate === '',
      detail: detail === '',
    });
    if (type && place && startDate && endDate && detail) {
      if (id) updateMutation.mutate(formData);
      else mutation.mutate(formData);
    }
  };

  return (
    <ResumeForm>
      <ResumeForm.Row>
        <SelectInput
          options={EXPERIENCE_TYPE}
          value={formData.type}
          onChange={handleSelectChange('type')}
          invalid={isError.type}
        />
        <Input
          name="place"
          placeholder="기관/장소명 *"
          value={formData.place}
          onChange={handleInputChange}
          invalid={isError.place}
        />
      </ResumeForm.Row>
      <ResumeForm.Row>
        <DateInput
          className="input_s"
          placeholder="시작년월"
          initialValue={formData.startDate}
          setDate={handleDateChange('startDate')}
          invalid={isError.startDate}
        />
        <DateInput
          className="input_s"
          placeholder="종료년월"
          initialValue={formData.endDate}
          setDate={handleDateChange('endDate')}
          invalid={isError.endDate}
        />
      </ResumeForm.Row>
      <ResumeForm.Row>
        <TextArea
          name="detail"
          title="활동 설명"
          placeholder="경험/활동 상세내역 입력"
          value={formData.detail}
          onChange={handleInputChange}
          invalid={isError.detail}
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
  const { data, deleteMutation } = useExperienceQuery();
  const { openExtraForm } = useExtraState();
  const { setSelectedExperience } = useSelectedExperience();

  return data && data.length > 0 ? (
    <ResumeList>
      <ResumeList.Col>
        {data.map((experience, idx) => (
          <ResumeList.Item style={{ minHeight: '80px' }} key={experience.id}>
            <ResumeList.Col>
              <ResumeList.Row>
                <ResumeList.Title>{experience.place}</ResumeList.Title>
                <ResumeList.Date>
                  {formatDate(experience.startDate)}~
                  {formatDate(experience.endDate)}
                </ResumeList.Date>
              </ResumeList.Row>
              <ResumeList.Row>
                <ResumeList.TextArea content={experience.detail} />
              </ResumeList.Row>
            </ResumeList.Col>
            <div>
              <ResumeList.Button
                type="edit"
                onClick={() => {
                  setSelectedExperience(experience);
                  openExtraForm('experience');
                }}
              />
              <ResumeList.Button
                type="delete"
                onClick={() => {
                  if (window.confirm('해당 항목을 삭제하시겠습니까?'))
                    deleteMutation.mutate(experience.id!);
                }}
              />
            </div>
          </ResumeList.Item>
        ))}
      </ResumeList.Col>
    </ResumeList>
  ) : (
    <NoListMessage message="교육이수내역, 해외연수, 대내외활동 등의 경험을 작성해보세요!" />
  );
};

export default Experience;
