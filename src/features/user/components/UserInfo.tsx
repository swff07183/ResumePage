import React from 'react';
import styled from 'styled-components';
import SelectInput from '@components/Input/SelectInput';
import { ReactComponent as Pencil } from '@assets/svg/pencil.svg';
import { useUserForm } from '../stores/hooks';
import default_user_img from '@assets/img/default-user-img.png';
import { USER_TYPE } from '../options';

const UserInfo = () => {
  const { openUserForm } = useUserForm();

  return (
    <Wrapper>
      <div className="info-content">
        <div className="info-name">
          <span>홍성목</span>
          <SelectInput
            className="input_s"
            style={{ width: '128px', height: '32px' }}
            options={USER_TYPE}
          />
        </div>
      </div>
      <div className="info-right">
        <img src={default_user_img} alt="default_user_img" />
        <button className="btn-user-edit" onClick={openUserForm}>
          <Pencil />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  & .info-content {
    flex-grow: 1;
    display: flex;
  }
  & .info-name {
    display: flex;
    gap: 8px;
    font-size: 24px;
    font-weight: bold;
  }
  & .info-right {
    display: flex;
    gap: 10px;
    & img {
      width: 100px;
      height: 140px;
      object-fit: cover;
    }
  }
  & .btn-user-edit {
    background-color: transparent;
    border: none;
    width: 30px;
    height: 30px;
    cursor: pointer;
    &:hover {
      background-color: #a6b0c02f;
    }
    & svg {
      width: 30px;
      height: 30px;
    }
    & path {
      fill: #8491a7;
    }
  }
`;

export default UserInfo;
