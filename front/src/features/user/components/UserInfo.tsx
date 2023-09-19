import React, { useEffect } from 'react';
import styled from 'styled-components';
import { SelectInput } from '@components';
import { ReactComponent as IconPencil } from '@assets/svg/pencil.svg';
import { useUserForm, useUserInfoData } from '../stores/hooks';
import default_user_img from '@assets/img/default-user-img.png';
import { USER_TYPE } from '../options';
import { ReactComponent as IconMail } from '@assets/svg/mail.svg';
import { ReactComponent as IconHome } from '@assets/svg/home.svg';
import { ReactComponent as IconMobile } from '@assets/svg/mobile.svg';
import { ReactComponent as IconPhone } from '@assets/svg/phone.svg';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getUserInfo, postUserInfoType } from '@/api/user';
import { IUserInfo } from '../types';
import { queryClient } from '@/index';

const UserInfo = () => {
  const { openUserForm } = useUserForm();
  const { userInfoData, setUserInfoData } = useUserInfoData();

  const { data } = useQuery<IUserInfo>({
    queryKey: ['user', 'userInfo'],
    queryFn: () => getUserInfo(),
  });

  const mutation = useMutation({
    mutationFn: (data: { userType: string }) => postUserInfoType(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user', 'userInfo'] });
    },
  });

  useEffect(() => {
    setUserInfoData(data);
  }, [data]);

  return (
    <Wrapper>
      <div className="info-div">
        <div className="info-name">
          <span>{userInfoData?.name}</span>
          <SelectInput
            className="input_s"
            style={{ width: '128px', height: '32px' }}
            options={USER_TYPE}
            value={userInfoData?.userType}
            onChange={(e) => mutation.mutate({ userType: e.target.value })}
          />
        </div>
        <div>
          <div className="info-content-row">
            <div className="info-content-item">
              <IconMail />
              {userInfoData?.email ? (
                <span>{userInfoData.email}</span>
              ) : (
                <span className="no-data">이메일을 입력해주세요.</span>
              )}
            </div>
            <div className="info-content-item">
              <IconMobile />
              {userInfoData?.mobile ? (
                <span>{userInfoData.mobile}</span>
              ) : (
                <span className="no-data">휴대폰 번호를 입력해주세요.</span>
              )}
            </div>
            <div className="info-content-item">
              <IconPhone />
              {userInfoData?.number ? (
                <span>{userInfoData.number}</span>
              ) : (
                <span className="no-data">전화번호를 입력해주세요.</span>
              )}
            </div>
          </div>
          <div className="info-content-item">
            <IconHome />
            {userInfoData?.address ? (
              <>
                <span>{userInfoData.address}</span>
                <span>{userInfoData?.addressDetail || ''}</span>
              </>
            ) : (
              <span className="no-data">주소를 입력해주세요.</span>
            )}
          </div>
        </div>
      </div>
      <div className="info-right">
        {/* <img src={default_user_img} alt="default_user_img" /> */}
        <button className="btn-user-edit" onClick={openUserForm}>
          <IconPencil />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: 140px;

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
  & .no-data {
    color: #677382;
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
