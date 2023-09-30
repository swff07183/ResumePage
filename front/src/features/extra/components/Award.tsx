import React from 'react';
import { Resume } from '@/components/Resume';
import { useExtraState, useSelectedAward } from '../stores/hooks';
import { ResumeForm } from '@/components/ResumeForm';
import { useForm } from '@/hooks';
import { AWARD_TYPE, LANGUAGE_OPTIONS } from '../options';
import {
  SelectInput,
  NoListMessage,
  Input,
  DateInput,
  ResumeList,
} from '@components';
import { IAward } from '../types';
import { useAwardQuery } from '../hooks/award';
import { formatDate } from '@/utils';

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
  const { selectedAward } = useSelectedAward();
  const {
    formData,
    isError,
    setIsError,
    handleInputChange,
    handleSelectChange,
    handleDateChange,
  } = useForm<IAward>(
    selectedAward ?? {
      type: '',
      licenseName: '',
      licenseDate: '',
      licensePlace: '',
      language: '',
      languageRating: '',
      languageScore: '',
      languageName: '',
      languageDate: '',
      awardName: '',
      awardDate: '',
      awardPlace: '',
    }
  );

  const { mutation, updateMutation } = useAwardQuery();

  const handleSubmit = () => {
    if (formData.type === 'license') {
      const { id, licenseName, licenseDate, licensePlace } = formData;
      setIsError({
        ...isError,
        licenseName: licenseName === '',
        licenseDate: licenseDate === '',
        licensePlace: licensePlace === '',
      });
      if (licenseName && licenseDate && licensePlace) {
        if (id) {
          updateMutation.mutate({
            type: 'license',
            id,
            licenseName,
            licenseDate,
            licensePlace,
          });
        } else
          mutation.mutate({
            type: 'license',
            licenseName,
            licenseDate,
            licensePlace,
          });
      }
    } else if (formData.type === 'language') {
      const {
        id,
        language,
        languageScore,
        languageRating,
        languageName,
        languageDate,
      } = formData;
      setIsError({
        ...isError,
        language: language === '',
        languageName: languageName === '',
        languageDate: languageDate === '',
      });
      if (language && languageDate && languageName) {
        if (id)
          updateMutation.mutate({
            id,
            type: 'language',
            language,
            languageScore,
            languageRating,
            languageName,
            languageDate,
          });
        else
          mutation.mutate({
            type: 'language',
            language,
            languageScore,
            languageRating,
            languageName,
            languageDate,
          });
      }
    } else if (formData.type === 'award') {
      const { id, awardName, awardDate, awardPlace } = formData;
      setIsError({
        ...isError,
        awardName: awardName === '',
        awardDate: awardDate === '',
        awardPlace: awardPlace === '',
      });
      if (awardName && awardDate && awardPlace) {
        if (id)
          updateMutation.mutate({
            type: 'award',
            id,
            awardName,
            awardDate,
            awardPlace,
          });
        else
          mutation.mutate({
            type: 'award',
            awardName,
            awardDate,
            awardPlace,
          });
      }
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
              name="languageRating"
              className="input_s"
              placeholder="급수"
              value={formData.languageRating}
              onChange={handleInputChange}
              invalid={isError.languageRating}
            />
            <Input
              name="languageScore"
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
  const { data, deleteMutation } = useAwardQuery();
  const { setSelectedAward } = useSelectedAward();
  const { openExtraForm } = useExtraState();
  return data && data.length > 0 ? (
    <ResumeList>
      <ResumeList.Col>
        {data.map((award, idx) => (
          <ResumeList.Item style={{ minHeight: '80px' }} key={award.id}>
            {award.type === 'license' && (
              <ResumeList.Col>
                <ResumeList.Row>
                  <ResumeList.Title>{award.licenseName}</ResumeList.Title>
                  <ResumeList.State>(취득)</ResumeList.State>
                  <ResumeList.Date>
                    {formatDate(award.licenseDate)}
                  </ResumeList.Date>
                </ResumeList.Row>
                <ResumeList.Row>{award.licensePlace}</ResumeList.Row>
              </ResumeList.Col>
            )}
            {award.type === 'language' && (
              <ResumeList.Col>
                <ResumeList.Row>
                  <ResumeList.Title>{award.languageName}</ResumeList.Title>
                  <ResumeList.State>({award.language})</ResumeList.State>
                  <ResumeList.Date>
                    {formatDate(award.languageDate)}
                  </ResumeList.Date>
                </ResumeList.Row>
                <ResumeList.Row>{award.languageScore}점</ResumeList.Row>
              </ResumeList.Col>
            )}
            {award.type === 'award' && (
              <ResumeList.Col>
                <ResumeList.Row>
                  <ResumeList.Title>{award.awardName}</ResumeList.Title>
                  <ResumeList.State>(수상)</ResumeList.State>
                  <ResumeList.Date>
                    {formatDate(award.awardDate)}
                  </ResumeList.Date>
                </ResumeList.Row>
                <ResumeList.Row>{award.awardPlace}</ResumeList.Row>
              </ResumeList.Col>
            )}

            <div>
              <ResumeList.Button
                type="edit"
                onClick={() => {
                  setSelectedAward(award);
                  openExtraForm('award');
                }}
              />
              <ResumeList.Button
                type="delete"
                onClick={() => {
                  if (window.confirm('해당 항목을 삭제하시겠습니까?'))
                    deleteMutation.mutate(award.id!);
                }}
              />
            </div>
          </ResumeList.Item>
        ))}
      </ResumeList.Col>
    </ResumeList>
  ) : (
    <NoListMessage message="자격/어학/수상 내역을 입력해주세요" />
  );
};

export default Award;
