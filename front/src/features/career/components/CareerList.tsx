import React from 'react';
import { NoListMessage, ResumeList } from '@components';
import { useCareerQuery } from '../hooks';

const CareerList = () => {
  const { data } = useCareerQuery();

  return data ? (
    <ResumeList>
      <ResumeList.Col>
        {data.map((item) => (
          <ResumeList.Item>
            <ResumeList.Col>
              {/*  */}
              <ResumeList.Row>
                <ResumeList.Title>티맥스티베로</ResumeList.Title>
                <ResumeList.Date>2023.07~2023.09</ResumeList.Date>
              </ResumeList.Row>
              {/*  */}
              <ResumeList.Row>DB3-2팀 연구원/팀원</ResumeList.Row>
              <ResumeList.Row>
                <ResumeList.TextArea
                  content={`데이터베이스 GUI 툴 개발\n\n프론트엔드 개발`}
                />
              </ResumeList.Row>
              {/*  */}
              <ResumeList.DetailDiv>
                <ResumeList.Row>
                  <ResumeList.Detail>연봉</ResumeList.Detail>
                  <ResumeList.DetailContent>5000만원</ResumeList.DetailContent>
                </ResumeList.Row>
                <ResumeList.Row>
                  <ResumeList.Detail>근무지역</ResumeList.Detail>
                  <ResumeList.DetailContent>경기</ResumeList.DetailContent>
                </ResumeList.Row>
              </ResumeList.DetailDiv>
            </ResumeList.Col>
            <div>
              <ResumeList.Button type="edit" onClick={() => {}} />
              <ResumeList.Button type="delete" onClick={() => {}} />
            </div>
          </ResumeList.Item>
        ))}
      </ResumeList.Col>
    </ResumeList>
  ) : (
    <NoListMessage
      message="경력사항 또는 인턴, 현장실습 등 급여를 받은 업무경험이 있다면 자유롭게 작성해보세요!
  "
    />
  );
};

export default CareerList;
