import React from 'react';
import { NoListMessage, ResumeList } from '@components';
import { useCareerQuery } from '../hooks';
import { useCareerForm, useSelectedCareer } from '../stores/hooks';
import { formatDate } from '@/utils';
import { IReadonly } from '@/types';

const CareerList = ({ readonly }: IReadonly) => {
  const { data, updateMutation, deleteMutation } = useCareerQuery();
  const { setSelectedCareer } = useSelectedCareer();
  const { openCareerForm } = useCareerForm();

  return data && data?.length > 0 ? (
    <ResumeList>
      {readonly && <div className="preview-title">경력</div>}
      <ResumeList.Col>
        {data.map((career, idx) => (
          <ResumeList.Item style={{ minHeight: '80px' }} key={career.id}>
            <ResumeList.Col>
              {/*  */}
              <ResumeList.Row>
                <ResumeList.Title>{career.name}</ResumeList.Title>
                <ResumeList.Date>
                  {formatDate(career.enterDate)}~{formatDate(career.exitDate)}
                </ResumeList.Date>
              </ResumeList.Row>
              {/*  */}
              {(career.part || career.position) && (
                <ResumeList.Row>
                  {career.part} {career.position}
                </ResumeList.Row>
              )}
              {career.detail && (
                <ResumeList.Row>
                  <ResumeList.TextArea content={career.detail} />
                </ResumeList.Row>
              )}
              {/*  */}
              {(career.money || career.region) && (
                <ResumeList.DetailDiv>
                  {career.money && (
                    <ResumeList.Row>
                      <ResumeList.Detail>연봉</ResumeList.Detail>
                      <ResumeList.DetailContent>
                        {`${career.money}${career.moneyUnit}`}
                      </ResumeList.DetailContent>
                    </ResumeList.Row>
                  )}
                  {career.region && (
                    <ResumeList.Row>
                      <ResumeList.Detail>근무지역</ResumeList.Detail>
                      <ResumeList.DetailContent>
                        {career.region}
                      </ResumeList.DetailContent>
                    </ResumeList.Row>
                  )}
                </ResumeList.DetailDiv>
              )}
            </ResumeList.Col>
            {!readonly && (
              <div>
                <ResumeList.Button
                  type="edit"
                  onClick={() => {
                    setSelectedCareer(career);
                    openCareerForm();
                  }}
                />
                <ResumeList.Button
                  type="delete"
                  onClick={() => {
                    if (window.confirm('해당 항목을 삭제하시겠습니까?'))
                      deleteMutation.mutate(career.id!);
                  }}
                />
              </div>
            )}
          </ResumeList.Item>
        ))}
      </ResumeList.Col>
    </ResumeList>
  ) : !readonly ? (
    <NoListMessage
      message="경력사항 또는 인턴, 현장실습 등 급여를 받은 업무경험이 있다면 자유롭게 작성해보세요!
  "
    />
  ) : (
    <></>
  );
};

export default CareerList;
