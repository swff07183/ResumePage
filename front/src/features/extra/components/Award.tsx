import React, { ChangeEvent, useState } from 'react';
import { Resume } from '@/components/Resume';
import { useExtraState } from '../stores/hooks';
import { ResumeForm } from '@/components/ResumeForm';
import { useForm } from '@/hooks';
import { AWARD_TYPE } from '../options';
import { SelectInput, NoListMessage, Input, DateInput } from '@components';

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
  const { formData, handleInputChange } = useForm({ content: '' });
  const [selectedType, setSelectedType] = useState<string>('');

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <>
      {selectedType === '' && (
        <ResumeForm>
          <ResumeForm.Row>
            <SelectInput
              options={AWARD_TYPE}
              value={selectedType}
              onChange={handleSelectChange}
            />
          </ResumeForm.Row>
          <ResumeForm.Buttons
            onCancel={() => closeExtraForm('award')}
            onSubmit={handleSubmit}
          />
        </ResumeForm>
      )}
      {selectedType === '1' && (
        <ResumeForm>
          <ResumeForm.Row>
            <SelectInput
              options={AWARD_TYPE}
              value={selectedType}
              onChange={handleSelectChange}
            />
            <Input placeholder="자격증명 *" />
            <Input placeholder="발행처/기관" />
          </ResumeForm.Row>
          <ResumeForm.Row>
            <SelectInput className="input_s" />
            <DateInput placeholder="합격년월" />
          </ResumeForm.Row>
          <ResumeForm.Buttons
            onCancel={() => closeExtraForm('award')}
            onSubmit={handleSubmit}
          />
        </ResumeForm>
      )}
      {selectedType === '2' && (
        <ResumeForm>
          <ResumeForm.Row>
            <SelectInput
              options={AWARD_TYPE}
              value={selectedType}
              onChange={handleSelectChange}
            />
            <SelectInput className="input_s" />
            <Input placeholder="어학시험명" />
            <DateInput placeholder="취득일" />
          </ResumeForm.Row>
          <ResumeForm.Row>
            <Input className="input_s" type="number" placeholder="점수" />
            <SelectInput className="input_s" />
          </ResumeForm.Row>
          <ResumeForm.Buttons
            onCancel={() => closeExtraForm('award')}
            onSubmit={handleSubmit}
          />
        </ResumeForm>
      )}
      {selectedType === '3' && (
        <ResumeForm>
          <ResumeForm.Row>
            <SelectInput
              options={AWARD_TYPE}
              value={selectedType}
              onChange={handleSelectChange}
            />
            <Input className="input_l" placeholder="수상∙공모전명" />
            <DateInput className="input_s" placeholder="수상∙공모일" />
          </ResumeForm.Row>
          <ResumeForm.Row>
            <Input placeholder="수여∙주최기관" />
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
