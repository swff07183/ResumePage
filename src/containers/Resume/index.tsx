import React, { useState } from 'react';
import styled from 'styled-components';
import EducationForm from '../Edu/EducationForm';
import EducationList from '../Edu/EducationList';
import { useRecoilState } from 'recoil';
import { eduFormState } from '../../store';

const Resume = () => {
  const [isEduFormOpen, setIsEduFormOpen] = useRecoilState(eduFormState);

  return (
    <Wrapper>
      {/* 학력 */}
      <div className="resume-title-div">
        <div className="resume-title">
          <h2>학력</h2>
          <span>필수</span>
        </div>
        {!isEduFormOpen && (
          <button
            className="resume-create-button"
            onClick={() => setIsEduFormOpen(true)}
          >
            + 추가
          </button>
        )}
      </div>
      <div className="resume-content-div">
        {isEduFormOpen ? <EducationForm /> : <EducationList />}
      </div>
      {/*  */}
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
      font-weight: 700;
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
