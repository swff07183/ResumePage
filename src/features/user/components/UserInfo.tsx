import React from 'react';
import styled from 'styled-components';
import SelectInput from '@components/Input/SelectInput';
import { ReactComponent as Pencil } from '@assets/svg/pencil.svg';
import { useUserForm } from '../stores/hooks';
import default_user_img from '@assets/img/default-user-img.png';
import { USER_TYPE } from '../options';
import { ReactComponent as IconMail } from '@assets/svg/mail.svg';
import { ReactComponent as IconHome } from '@assets/svg/home.svg';
import { ReactComponent as IconMobile } from '@assets/svg/mobile.svg';
import { ReactComponent as IconPhone } from '@assets/svg/phone.svg';

const UserInfo = () => {
  const { openUserForm } = useUserForm();

  return (
    <Wrapper>
      <div className="info-div">
        <div className="info-name">
          <span>홍성목</span>
          <SelectInput
            className="input_s"
            style={{ width: '128px', height: '32px' }}
            options={USER_TYPE}
          />
        </div>
        <div>
          <div className="info-content-row">
            <div className="info-content-item">
              <IconMail />
              <span>swff07183@naver.com</span>
            </div>
            <div className="info-content-item">
              <IconMobile />
              <span>051-1234-5678</span>
            </div>
            <div className="info-content-item">
              <IconPhone />
              <span>010-1234-5678</span>
            </div>
          </div>
          <div className="info-content-item">
            <IconHome />
            <span>부산광역시 해운대구 달맞이길 65번길 33, 101동 1234호</span>
          </div>
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

  & .info-content-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    & svg {
      width: 24px;
      height: 24px;
      & path {
        fill: #f0f0f0;
        stroke: #c0c0c0;
        stroke-width: 1px;
      }
    }
  }

  & .info-content-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  & .info-div {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    /* gap: 12px; */
  }
  & .info-name {
    display: flex;
    flex-grow: 1;
    gap: 8px;
    font-size: 24px;
    font-weight: bold;
  }
  & .info-right {
    margin-left: 220px;
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
