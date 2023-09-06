import React from 'react';
import styled from 'styled-components';
import EducationForm from '../edu/EducationForm';
import EducationList from '../edu/EducationList';
import CareerList from '../career/CareerList';
import CareerForm from '../career/CareerForm';
import { useEduForm } from '../../recoil/edu/hooks';
import { useCareerForm } from '../../recoil/career/hooks';
import UserInfo from '../user/UserInfo';
import { useUserForm } from '../../recoil/user/hooks';
import UserForm from '../user/UserForm';

const Resume = () => {
  const { isEduFormOpen, openEduForm } = useEduForm();
  const { isCareerFormOpen, openCareerForm } = useCareerForm();
  const { isUserFormOpen } = useUserForm();

  return (
    <Wrapper>
      {/* 사용자 정보 */}
      {isUserFormOpen ? <UserForm /> : <UserInfo />}
      {/* 학력 */}
      <div className="resume-title-div">
        <div className="resume-title">
          <h2>학력</h2>
          <span>필수</span>
        </div>
        {!isEduFormOpen && (
          <button className="resume-create-button" onClick={openEduForm}>
            + 추가
          </button>
        )}
      </div>
      <div className="resume-content-div">
        {isEduFormOpen ? <EducationForm /> : <EducationList />}
      </div>
      {/*  */}
      {/* 경력 */}
      <div className="resume-title-div">
        <div className="resume-title">
          <h2>경력</h2>
        </div>
        {!isCareerFormOpen && (
          <button className="resume-create-button" onClick={openCareerForm}>
            + 추가
          </button>
        )}
      </div>
      <div className="resume-content-div">
        {isCareerFormOpen ? <CareerForm /> : <CareerList />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 930px;
  & .resume-title-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .resume-title {
    padding: 0 16px;
    display: flex;
    align-items: center;
    & > span {
      color: red;
      font-weight: bold;
      font-size: 12px;
      margin-left: 10px;
    }
  }
  & .resume-create-button {
    height: 40px;
    padding: 12px;
    border-radius: 4px;
    background-color: transparent;
    border: none;
    &:hover {
      background-color: #e8e8e8;
      cursor: pointer;
    }
  }
  & .resume-content-div {
  }
`;

export default Resume;
