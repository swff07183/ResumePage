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

const careerTextAreaPlaceHolder = `담당업무를 입력해주세요.
- 진행한 업무를 다 적기 보다는 경력사항 별로 중요한 내용만 엄선해서 작성하는 것이 중요합니다!
- 담당한 업무 내용을 요약해서 작성해보세요!
- 경력별 프로젝트 내용을 적을 경우, 역할/팀구성/기여도/성과를 기준으로 요약해서 작성해보세요!
`;

const CareerForm = () => {
  const { closeCareerForm } = useCareerForm();
  const [checkSalary, setCheckSalary] = useState<boolean>(false);
  const [checkCareerRegion, setCheckCareerRegion] = useState<boolean>(false);

  return (
    <ResumeForm>
      <div className="form-div">
        <div className="form-row">
          <Input placeholder="회사명*" />
          <SelectInput className="input_s" />
          <DateInput className="input_s" placeholder="입사년월" />
          <DateInput
            className="input_s"
            placeholder="퇴사년월"
            disabled={true}
          />
        </div>
        <div className="form-row">
          <Input placeholder="직급/직책" />
          <Input placeholder="근무부서" />
          <CheckboxInput content="회사명 비공개" />
        </div>
        <div className="form-row">
          <TextArea title="담당업무" placeholder={careerTextAreaPlaceHolder} />
        </div>
        {(checkSalary || checkCareerRegion) && (
          <div className="form-row">
            {checkSalary && (
              <React.Fragment>
                <Input className="input_s" placeholder="연봉" />
                <SelectInput className="input_s" />
              </React.Fragment>
            )}
            {checkCareerRegion && <SelectInput className="input_s" />}
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
        <FormButtons onCancel={closeCareerForm} />
      </div>
    </ResumeForm>
  );
};

export default CareerForm;
