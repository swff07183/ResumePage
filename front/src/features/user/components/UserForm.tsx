import React from 'react';
import { ResumeForm } from '@components/ResumeForm';
import { useUserForm } from '../stores/hooks';
import {
  FormButtons,
  Input,
  SelectInput,
  DateInput,
  Resume,
} from '@components';

const UserForm = () => {
  const { closeUserForm } = useUserForm();

  return (
    <React.Fragment>
      <Resume title="기본정보" isRequired>
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
      </Resume>
    </React.Fragment>
  );
};

export default UserForm;
