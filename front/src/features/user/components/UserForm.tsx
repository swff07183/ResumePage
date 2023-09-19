import React from 'react';
import { ResumeForm } from '@components/ResumeForm';
import { useUserForm, useUserInfoData } from '../stores/hooks';
import { FormButtons, Input, SelectInput, Resume } from '@components';
import { GENDER_TYPE } from '../options';
import { useMutation } from '@tanstack/react-query';
import { useForm } from '@/hooks';
import { IUserInfo } from '../types';
import { postUserInfo } from '@/api/user';

const UserForm = () => {
  const { closeUserForm } = useUserForm();
  const { userInfoData } = useUserInfoData();

  const {
    formData,
    isError,
    setIsError,
    handleInputChange,
    handleSelectChange,
  } = useForm<IUserInfo>(
    userInfoData || {
      name: '',
      // userType: '',
      gender: '',
      birth: '',
      email: '',
      mobile: '',
      number: '',
      address: '',
      addressDetail: '',
    }
  );

  const mutation = useMutation({
    mutationFn: (data: IUserInfo) => postUserInfo(data),
    onSuccess: (data) => {
      console.log(data);
      closeUserForm();
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const handleSubmit = () => {
    console.log(formData);
    setIsError({
      name: formData.name === '',
      birth: formData.birth === '',
      email: formData.email === '',
      mobile: formData.mobile === '',
      address: formData.address === '',
    });
    if (
      formData.name !== '' &&
      formData.birth !== '' &&
      formData.email !== '' &&
      formData.mobile !== '' &&
      formData.address !== ''
    ) {
      mutation.mutate(formData);
    }
  };

  return (
    <React.Fragment>
      <Resume title="기본정보" isRequired>
        <ResumeForm>
          <div className="form-row">
            <Input
              name="name"
              placeholder="이름 *"
              onChange={handleInputChange}
              value={formData.name}
              invalid={isError.name}
            />
            <SelectInput
              className="input_s"
              options={GENDER_TYPE}
              onChange={handleSelectChange('gender')}
              value={formData.gender}
              invalid={isError.gender}
            />
            <Input
              name="birth"
              className="input_s"
              placeholder="생년월일(8자리) *"
              onChange={handleInputChange}
              value={formData.birth}
              invalid={isError.birth}
            />
          </div>
          <div className="form-row">
            <Input
              name="email"
              placeholder="이메일 *"
              onChange={handleInputChange}
              value={formData.email}
              invalid={isError.email}
            />
          </div>
          <div className="form-row">
            <Input
              name="mobile"
              placeholder="휴대폰 *"
              onChange={handleInputChange}
              value={formData.mobile}
              invalid={isError.mobile}
            />
          </div>
          <div className="form-row">
            <Input
              name="number"
              placeholder="전화번호"
              onChange={handleInputChange}
              value={formData.number}
            />
          </div>
          <div className="form-row">
            <Input
              name="address"
              placeholder="주소 *"
              onChange={handleInputChange}
              invalid={isError.address}
              value={formData.address}
            />
            <Input
              name="addressDetail"
              placeholder="상세주소"
              onChange={handleInputChange}
              value={formData.addressDetail}
            />
          </div>
          <FormButtons onCancel={closeUserForm} onSubmit={handleSubmit} />
        </ResumeForm>
      </Resume>
    </React.Fragment>
  );
};

export default UserForm;
