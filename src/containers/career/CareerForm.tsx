import React, { useState } from 'react';
import { ResumeForm } from '../../components/ResumeForm';
import FormButtons from '../FormButtons';
import Input from '../../components/Input';
import SelectInput from '../../components/Input/SelectInput';
import CheckboxInput from '../../components/Input/CheckboxInput';
import TextArea from '../../components/TextArea';
import { useCareerForm } from '../../recoil/career/hooks';
import DateInput from '../../components/Input/DateInput';
import AddButton from '../../components/Button/AddButton';
import { useForm } from '../../hooks';
import { CAREER_STATUS_OPTIONS, REGION_OPTIONS } from '../../common/Options';

const careerTextAreaPlaceHolder = `담당업무를 입력해주세요.
- 진행한 업무를 다 적기 보다는 경력사항 별로 중요한 내용만 엄선해서 작성하는 것이 중요합니다!
- 담당한 업무 내용을 요약해서 작성해보세요!
- 경력별 프로젝트 내용을 적을 경우, 역할/팀구성/기여도/성과를 기준으로 요약해서 작성해보세요!
`;

const CareerForm = () => {
  const {
    formData,
    setFormData,
    isError,
    setIsError,
    handleSelectChange,
    handleInputChange,
    handleDateChange,
  } = useForm({
    company: '',
    status: '',
    enterDate: '',
    exitDate: '',
    position: '',
    part: '',
    task: '',
    salary: '',
    careerRegion: '',
  });
  const [checkSalary, setCheckSalary] = useState<boolean>(false);
  const [checkCareerRegion, setCheckCareerRegion] = useState<boolean>(false);

  const { closeCareerForm } = useCareerForm();

  const handleSubmit = () => {
    const { company, status, enterDate, exitDate } = formData;
    setIsError({
      ...isError,
      company: company === '',
      status: status === '',
      enterDate: enterDate === '',
      exitDate: exitDate === '',
    });
    if (company && status && enterDate && exitDate) {
      console.log({ ...formData, checkSalary, checkCareerRegion });
      closeCareerForm();
    }
  };

  return (
    <ResumeForm>
      <div className="form-div">
        <div className="form-row">
          <Input
            name="company"
            placeholder="회사명*"
            value={formData.company}
            invalid={isError.company}
            onChange={handleInputChange}
          />
          <SelectInput
            className="input_s"
            options={CAREER_STATUS_OPTIONS}
            value={formData.status}
            invalid={isError.status}
            onChange={handleSelectChange('status')}
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
        </div>
        <div className="form-row">
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
        </div>
        <div className="form-row">
          <TextArea
            name="task"
            title="담당업무"
            placeholder={careerTextAreaPlaceHolder}
            onChange={handleInputChange}
          />
        </div>
        {(checkSalary || checkCareerRegion) && (
          <div className="form-row">
            {checkSalary && (
              <React.Fragment>
                <Input
                  name="salary"
                  className="input_s"
                  placeholder="연봉"
                  onChange={handleInputChange}
                />
                <SelectInput className="input_s" />
              </React.Fragment>
            )}
            {checkCareerRegion && (
              <SelectInput
                className="input_s"
                options={REGION_OPTIONS}
                value={formData.careerRegion}
                onChange={handleSelectChange('careerRegion')}
              />
            )}
          </div>
        )}
        <div className="form-row">
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
        </div>
        <FormButtons onCancel={closeCareerForm} onSubmit={handleSubmit} />
      </div>
    </ResumeForm>
  );
};

export default CareerForm;
