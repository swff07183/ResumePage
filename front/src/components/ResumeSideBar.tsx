import React from 'react';
import styled from 'styled-components';
import { useExtraState } from '@features/extra/stores/hooks';
import { ReactComponent as Plus } from '@assets/svg/plus.svg';
import { ReactComponent as Minus } from '@assets/svg/minus.svg';
import { ExtraMenuType } from '../features/extra/types';
import { useUserInfoData } from '@/features/user/stores/hooks';
import { useEducationInfoQuery } from '@/features/education/hooks';

interface IMenu {
  name: string;
  key?: ExtraMenuType;
  required?: boolean;
}

export const ResumeSideBar = () => {
  const { extraListState, openExtraList, toggleExtraList } = useExtraState();
  const menuList: IMenu[] = [
    {
      name: '학력',
      required: true,
    },
    {
      name: '경력',
    },
    {
      name: '스킬',
      key: 'skill',
    },
    {
      name: '경험/활동/교육',
      key: 'experience',
    },
    {
      name: '자격/어학/수상',
      key: 'award',
    },
    // {
    //   name: '포트폴리오',
    //   key: 'portfolio',
    // },
    {
      name: '경력기술서',
      key: 'careerContent',
    },
    {
      name: '자기소개서',
      key: 'selfIntroduction',
    },
    // {
    //   name: '우대사항',
    //   key: 'preferential',
    // },
  ];

  return (
    <Wrapper>
      <ResumeProgress />
      {menuList.map((menu: IMenu) => (
        <SideMenuItem key={`menu-${menu.name}`}>
          <button
            className={`menu-title ${
              menu.key && extraListState[menu.key] ? 'active' : ''
            }`}
            onClick={() => menu.key && openExtraList(menu.key)}
          >
            {menu.name}
          </button>
          {menu.required && <div className="menu-required">필수</div>}
          {menu.key && (
            <button
              className={`menu-icon ${
                menu.key && extraListState[menu.key] ? 'icon-active' : ''
              }`}
              onClick={() => menu.key && toggleExtraList(menu.key)}
            >
              {extraListState[menu.key] ? (
                <Minus className="icon-minus" />
              ) : (
                <Plus className="icon-plus" />
              )}
            </button>
          )}
        </SideMenuItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 8px;

  padding: 24px 16px 24px;
  width: 294px;
  height: 600px;
  border-radius: 8px;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 4px 16px rgba(21, 39, 111, 0.08);
`;

const SideMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 24px;
  font-weight: 900;
  & .menu-required {
    font-size: 12px;
    font-weight: 700;
    color: #67738e;
  }

  & .menu-title {
    border: none;
    font-size: 14px;
    font-weight: 900;
    background-color: transparent;
    color: #67738e;
  }
  & .menu-icon {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 0.5px solid #67738edd;
    border-radius: 50%;
    & .icon-minus > path {
      stroke: #17755b;
    }
    & .icon-plus > path {
      stroke: #67738e;
    }
  }
  & button.icon-active {
    border: 0.5px solid #17755b;
  }
  & .active {
    color: #17755b;
  }
`;

const ResumeProgress = () => {
  const { userInfoData } = useUserInfoData();
  // const { data: career } = useCareerQuery();
  const { educationInfo } = useEducationInfoQuery();
  const completeRate =
    userInfoData?.name && educationInfo
      ? 100
      : userInfoData?.name || educationInfo
      ? 50
      : 0;
  console.log(userInfoData);
  console.log(educationInfo);
  return (
    <ResumeProgressWrapper progress={completeRate}>
      <div className="title">
        <span>이력서 완성도</span>
        <span>{completeRate}%</span>
      </div>
      <div className="progress-bar" />
      <div className="content">
        {userInfoData?.name && educationInfo?.name ? (
          <span>
            <span>{userInfoData.name}님의</span> 이력서가 완성됐어요!
          </span>
        ) : (
          <>
            <span>
              {!userInfoData?.name && educationInfo?.name && (
                <span>유저 정보</span>
              )}
              {userInfoData?.name && !educationInfo?.name && <span>학력</span>}
              {!userInfoData?.name && !educationInfo?.name && (
                <span>유저 정보, 학력</span>
              )}
              만 입력하면
            </span>
            <span>이력서가 완성돼요!</span>
          </>
        )}
      </div>
    </ResumeProgressWrapper>
  );
};

interface ProgressProps {
  progress: number;
}

const ResumeProgressWrapper = styled.div<ProgressProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 24px;
  margin-bottom: 8px;
  border-bottom: 1px solid #d3d6dc;
  & > .title {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: -2px;
  }
  & > .progress-bar {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background-color: #eaedf4;
    position: relative;
    overflow: hidden;
    &::after {
      z-index: 100;
      content: '';
      position: absolute;
      border-radius: 4px;
      left: 0;
      top: 0;
      /* width: 8px; */
      /* width: 100%; */
      width: calc(${({ progress }) => `${progress}%`});
      transition: width 0.5s ease;
      min-width: 8px;
      height: 100%;
      /* background: linear-gradient(270deg, #5189fa 0%, #bcd1fc 100%); */
      background: linear-gradient(270deg, #367c68 0%, #bce1d7 100%);
    }
  }
  & > .content {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    & > span > span {
      color: #00553d;
      font-weight: bold;
    }
  }
`;
