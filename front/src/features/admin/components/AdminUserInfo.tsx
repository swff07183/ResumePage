import styled from 'styled-components';
import { ReactComponent as IconMail } from '@assets/svg/mail.svg';
import { ReactComponent as IconHome } from '@assets/svg/home.svg';
import { ReactComponent as IconMobile } from '@assets/svg/mobile.svg';
import { ReactComponent as IconPhone } from '@assets/svg/phone.svg';
import { ReactComponent as IconEarth } from '@assets/svg/earth.svg';

interface AdminUserInfoProps {
  userInfoData: any;
}

const AdminUserInfo = ({ userInfoData }: AdminUserInfoProps) => {
  return (
    <Wrapper>
      <div className="info-div">
        <div className="info-name">
          <div className="info-name-div">
            {userInfoData?.name ? (
              <span>{userInfoData?.name}</span>
            ) : (
              <span className="info-no-name">이름을 입력해주세요</span>
            )}
            <span className="info-usertype">
              {userInfoData?.userType ?? ''}
            </span>
          </div>
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
          <div className="info-content-row">
            <div className="info-content-item">
              <IconEarth className="icon-earth" />
              {userInfoData?.country ? (
                <span>{userInfoData.country}</span>
              ) : (
                <span className="no-data">국적을 입력해주세요.</span>
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

      &.icon-earth {
        path {
          stroke: #f0f0f0;
          fill: #c0c0c0;
        }
      }
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

  & .info-usertype {
    font-size: 16px;
    color: #677382;
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
  & .info-name-div {
    display: flex;
    align-items: end;
    gap: 8px;
    height: fit-content;
    & .info-no-name {
      font-size: 20px;
      color: #677382;
    }
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

export default AdminUserInfo;
