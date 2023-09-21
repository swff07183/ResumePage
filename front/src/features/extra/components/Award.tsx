import React, { ChangeEvent, useEffect, useState } from 'react';
import { Resume } from '@/components/Resume';
import { useExtraState } from '../stores/hooks';
import { ResumeForm } from '@/components/ResumeForm';
import { useForm } from '@/hooks';
import { AWARD_TYPE, LANGUAGE_OPTIONS } from '../options';
import { SelectInput, NoListMessage, Input, DateInput } from '@components';
import { IAward } from '../types';

const Award = () => {
  const { extraFormState, openExtraForm } = useExtraState();

  return (
    <Resume
      title="자격/어학/수상"
      isFormOpen={extraFormState.award}
      handleAddButtonClick={() => openExtraForm('award')}
    >
      {extraFormState.award ? <AwardForm /> : <AwardList />}
    </Resume>
  );
};

const AwardForm = () => {
  const { closeExtraForm } = useExtraState();
  const {
    formData,
    setFormData,
    isError,
    setIsError,
    handleInputChange,
    handleSelectChange,
    handleDateChange,
  } = useForm<IAward>({
    type: '',
    licenseName: '',
    licenseDate: '',
    licensePlace: '',
    language: '',
    languageScore: '',
    languageName: '',
    languageDate: '',
    awardName: '',
    awardDate: '',
    awardPlace: '',
  });

  const handleSubmit = () => {
    console.log(formData);
    if (formData.type === 'license') {
      setIsError({
        ...isError,
        licenseName: formData.licenseName === '',
        licenseDate: formData.licenseDate === '',
        licensePlace: formData.licensePlace === '',
      });
    } else if (formData.type === 'language') {
      setIsError({
        ...isError,
        language: formData.language === '',
        languageScore: formData.languageScore === '',
        languageName: formData.languageName === '',
        languageDate: formData.languageDate === '',
      });
    } else if (formData.type === 'award') {
      setIsError({
        ...isError,
        awardName: formData.awardName === '',
        awardDate: formData.awardDate === '',
        awardPlace: formData.awardPlace === '',
      });
    } else if (formData.type === '') {
      setIsError({
        ...isError,
        type: true,
      });
    }
  };

  return (
    <>
      {formData.type === '' && (
        <ResumeForm>
          <ResumeForm.Row>
            <SelectInput
              options={AWARD_TYPE}
              value={formData.type}
              onChange={handleSelectChange('type')}
              invalid={isError.type}
            />
          </ResumeForm.Row>
          <ResumeForm.Buttons
            onCancel={() => closeExtraForm('award')}
            onSubmit={handleSubmit}
          />
        </ResumeForm>
      )}
      {formData.type === 'license' && (
        <ResumeForm>
          <ResumeForm.Row>
            <SelectInput
              options={AWARD_TYPE}
              value={formData.type}
              onChange={handleSelectChange('type')}
            />
            <Input
              name="licenseName"
              placeholder="자격증명 *"
              value={formData.licenseName}
              onChange={handleInputChange}
              invalid={isError.licenseName}
            />
            <DateInput
              className="input_s"
              placeholder="합격년월"
              initialValue={formData.licenseDate}
              setDate={handleDateChange('licenseDate')}
              invalid={isError.licenseDate}
            />
          </ResumeForm.Row>
          <ResumeForm.Row>
            <Input
              name="licensePlace"
              placeholder="발행처/기관"
              value={formData.licensePlace}
              onChange={handleInputChange}
              invalid={isError.licensePlace}
            />
          </ResumeForm.Row>
          <ResumeForm.Buttons
            onCancel={() => closeExtraForm('award')}
            onSubmit={handleSubmit}
          />
        </ResumeForm>
      )}
      {formData.type === 'language' && (
        <ResumeForm>
          <ResumeForm.Row>
            <SelectInput
              options={AWARD_TYPE}
              value={formData.type}
              onChange={handleSelectChange('type')}
            />
            <SelectInput
              options={LANGUAGE_OPTIONS}
              className="input_s"
              value={formData.language}
              onChange={handleSelectChange('language')}
              invalid={isError.language}
            />
            <Input
              name="languageName"
              placeholder="어학시험명"
              value={formData.languageName}
              onChange={handleInputChange}
              invalid={isError.languageName}
            />
          </ResumeForm.Row>
          <ResumeForm.Row>
            <DateInput
              placeholder="취득일"
              initialValue={formData.languageDate}
              setDate={handleDateChange('languageDate')}
              invalid={isError.languageDate}
            />
            <Input
              name="languagescore"
              className="input_s"
              type="number"
              placeholder="점수"
              value={formData.languageScore}
              onChange={handleInputChange}
              invalid={isError.languageScore}
            />
          </ResumeForm.Row>
          <ResumeForm.Buttons
            onCancel={() => closeExtraForm('award')}
            onSubmit={handleSubmit}
          />
        </ResumeForm>
      )}
      {formData.type === 'award' && (
        <ResumeForm>
          <ResumeForm.Row>
            <SelectInput
              options={AWARD_TYPE}
              value={formData.type}
              onChange={handleSelectChange('type')}
            />
            <Input
              name="awardName"
              className="input_l"
              placeholder="수상∙공모전명"
              value={formData.awardName}
              onChange={handleInputChange}
              invalid={isError.awardName}
            />
            <DateInput
              className="input_s"
              placeholder="수상∙공모일"
              initialValue={formData.awardDate}
              setDate={handleDateChange('awardDate')}
              invalid={isError.awardDate}
            />
          </ResumeForm.Row>
          <ResumeForm.Row>
            <Input
              name="awardPlace"
              placeholder="수여∙주최기관"
              value={formData.awardPlace}
              onChange={handleInputChange}
              invalid={isError.awardPlace}
            />
          </ResumeForm.Row>
          <ResumeForm.Buttons
            onCancel={() => closeExtraForm('award')}
            onSubmit={handleSubmit}
          />
        </ResumeForm>
      )}
    </>
  );
};

const AwardList = () => {
  return <NoListMessage message="자격/어학/수상 내역을 입력해주세요" />;
};

export default Award;
