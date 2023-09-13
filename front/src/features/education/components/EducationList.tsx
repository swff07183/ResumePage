import React, { useEffect } from 'react';
import { NoListMessage, ResumeList } from '@components';

const EducationList = () => {
  const isList = true; //TODO: dummy;

  const educationInfo = {
    school: '경북대학교',
    major: '개똥학과',
    graduate: '졸업',
    enterDate: '201503',
    graduateDate: '202202',
    universityType: 4,
    universityTime: '주간',
  };

  return isList ? (
    <ResumeList>
      <ResumeList.Row>
        <ResumeList.Title>{`${educationInfo.school}(${educationInfo.universityType}년제)`}</ResumeList.Title>
        <ResumeList.Date>{educationInfo.enterDate}</ResumeList.Date>
      </ResumeList.Row>
      <ResumeList.Row>
        <ResumeList.Content>안뇽하세요 저는 홍송목입니ㅏㄷ.</ResumeList.Content>
      </ResumeList.Row>
      <ResumeList.Row>
        <ResumeList.Detail>담도</ResumeList.Detail>
        <ResumeList.DetailContent>주간</ResumeList.DetailContent>
      </ResumeList.Row>
    </ResumeList>
  ) : (
    <NoListMessage message="학력을 입력해주세요." />
  );
};

export default EducationList;
