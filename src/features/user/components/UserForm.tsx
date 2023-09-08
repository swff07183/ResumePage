import React from 'react';
import { ResumeForm } from '@components/ResumeForm';
import FormButtons from '../../../components/FormButtons';
import { useUserForm } from '../stores/hooks';
import Input from '@components/Input';
import SelectInput from '@components/Input/SelectInput';
import DateInput from '@components/Input/DateInput';

const UserForm = () => {
  const { closeUserForm } = useUserForm();

  return (
    <React.Fragment>
      <div className="resume-title-div">
        <div className="resume-title">
          <h2>기본정보</h2>
          <span>필수</span>
        </div>
      </div>
      <ResumeForm>
        <div className="form-row">
          <Input placeholder="이름" />
          <SelectInput className="input_s" />
          <DateInput className="input_s" placeholder="생년월일" />
        </div>
        <div className="form-row">
          <Input placeholder="이메일 *" />
        </div>
        <div className="form-row">
          <Input placeholder="휴대폰 *" />
        </div>
        <div className="form-row">
          <Input placeholder="전화번호" />
        </div>
        <div className="form-row">
          <Input placeholder="주소 *" />
          <Input placeholder="상세주소" />
        </div>
        <FormButtons onCancel={closeUserForm} />
      </ResumeForm>
    </React.Fragment>
  );
};

export default UserForm;
