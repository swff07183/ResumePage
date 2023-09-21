import React, { useState } from 'react';

import { ResumeForm } from '@components/ResumeForm';
import {
  FormButtons,
  Input,
  SelectInput,
  TextArea,
  DateInput,
  AddButton,
} from '@components';

import { useCareerForm } from '../stores/hooks';

import { useForm } from '@/hooks';

import { CAREER_STATUS_OPTIONS } from '../options';
import { MONEY_OPTIONS, REGION_OPTIONS } from '@/common/Options';
import { ICareer } from '../types/ICareer';
import { useCareerQuery } from '../hooks';

const careerTextAreaPlaceHolder = `담당업무를 입력해주세요.
- 진행한 업무를 다 적기 보다는 경력사항 별로 중요한 내용만 엄선해서 작성하는 것이 중요합니다!
- 담당한 업무 내용을 요약해서 작성해보세요!
- 경력별 프로젝트 내용을 적을 경우, 역할/팀구성/기여도/성과를 기준으로 요약해서 작성해보세요!
`;

const CareerForm = () => {
  const [checkSalary, setCheckSalary] = useState<boolean>(false);
  const [checkCareerRegion, setCheckCareerRegion] = useState<boolean>(false);

  const { closeCareerForm } = useCareerForm();
  const { data, mutation } = useCareerQuery();
  console.log(data);

  const {
    formData,
    isError,
    setIsError,
    handleSelectChange,
    handleInputChange,
    handleDateChange,
  } = useForm<ICareer>({
    name: '',
    state: '',
    enterDate: '',
    exitDate: '',
    position: '',
    part: '',
    detail: '',
    money: '',
    moneyUnit: '',
    region: '',
  });

  const handleSubmit = () => {
    const { name, state, enterDate, exitDate } = formData;
    setIsError({
      ...isError,
      name: name === '',
      state: state === '',
      enterDate: enterDate === '',
      exitDate: exitDate === '',
    });
    if (name && state && enterDate && exitDate) {
      mutation.mutate(formData);
    }
  };

  return (
    <ResumeForm>
      <ResumeForm.Row>
        <Input
          name="name"
          placeholder="회사명*"
          value={formData.name}
          invalid={isError.name}
          onChange={handleInputChange}
        />
        <SelectInput
          className="input_s"
          options={CAREER_STATUS_OPTIONS}
          value={formData.state}
          invalid={isError.state}
          onChange={handleSelectChange('state')}
        />
        <DateInput
          className="input_s"
          placeholder="입사년월"
          initialValue={formData.enterDate}
          invalid={isError.enterDate}
          setDate={handleDateChange('enterDate')}
        />
        <DateInput
          className="input_s"
          placeholder="퇴사년월"
          initialValue={formData.exitDate}
          invalid={isError.exitDate}
          setDate={handleDateChange('exitDate')}
        />
      </ResumeForm.Row>
      <ResumeForm.Row>
        <Input
          name="position"
          placeholder="직급/직책"
          onChange={handleInputChange}
        />
        <Input
          name="part"
          placeholder="근무부서"
          onChange={handleInputChange}
        />
        {/* <CheckboxInput content="회사명 비공개" /> */}
      </ResumeForm.Row>
      <ResumeForm.Row>
        <TextArea
          name="detail"
          title="담당업무"
          placeholder={careerTextAreaPlaceHolder}
          onChange={handleInputChange}
          value={formData.detail}
        />
      </ResumeForm.Row>
      {(checkSalary || checkCareerRegion) && (
        <ResumeForm.Row>
          {checkSalary && (
            <React.Fragment>
              <Input
                name="money"
                className="input_s"
                placeholder="연봉"
                onChange={handleInputChange}
              />
              <SelectInput
                className="input_s"
                options={MONEY_OPTIONS}
                value={formData.moneyUnit}
                onChange={handleSelectChange('moneyUnit')}
              />
            </React.Fragment>
          )}
          {checkCareerRegion && (
            <SelectInput
              className="input_s"
              options={REGION_OPTIONS}
              value={formData.region}
              onChange={handleSelectChange('region')}
            />
          )}
        </ResumeForm.Row>
      )}
      <ResumeForm.Row>
        <AddButton
          content="연봉"
          isActive={checkSalary}
          onClick={() => setCheckSalary((prev) => !prev)}
        />
        <AddButton
          content="근무지역"
          isActive={checkCareerRegion}
          onClick={() => setCheckCareerRegion((prev) => !prev)}
        />
      </ResumeForm.Row>
      <FormButtons onCancel={closeCareerForm} onSubmit={handleSubmit} />
    </ResumeForm>
  );
};

export default CareerForm;
