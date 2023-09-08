import React from 'react';
import styled from 'styled-components';
import { useExtraState } from '../features/extra/stores/hooks';
import { ReactComponent as Plus } from '../assets/svg/plus.svg';
import { ReactComponent as Minus } from '../assets/svg/minus.svg';
import { ExtraMenuType } from '../features/extra/types/ExtraMenuType';

interface IMenu {
  name: string;
  key?: ExtraMenuType;
  required?: boolean;
}

const ResumeSideBar = () => {
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
    {
      name: '포트폴리오',
      key: 'portfolio',
    },
    {
      name: '경력기술서',
      key: 'careerContent',
    },
    {
      name: '자기소개서',
      key: 'selfIntroduction',
    },
    {
      name: '우대사항',
      key: 'preferential',
    },
  ];

  return (
    <Wrapper>
      {menuList.map((menu: IMenu) => (
        <SideMenuItem>
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
      stroke: #2d65f2;
    }
    & .icon-plus > path {
      stroke: #67738e;
    }
  }
  & button.icon-active {
    border: 0.5px solid #2d64f2;
  }
  & .active {
    color: #2d64f2;
  }
`;

export default ResumeSideBar;
