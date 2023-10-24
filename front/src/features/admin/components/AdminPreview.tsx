import UserInfo from '@/features/user/components/UserInfo';
import React, { useState } from 'react';
import styled from 'styled-components';
import AdminUserInfo from './AdminUserInfo';
import { useQuery } from '@tanstack/react-query';
import { getUserPreview } from '@/api/admin';
import { AdminSkill } from './AdminSkill';
import { AdminEducation } from './AdminEducationList';
import AdminCareer from './AdminCareer';
import { AdminExperience } from './AdminExperience';
import { AdminAward } from '@/pages/AdminAward';
import { AdminCareerContent } from './AdminCareerContent';
import { AdminSelfIntroduction } from './AdminSelfIntroduction';

const AdminPreview = ({ userId }: { userId: number }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(
    sessionStorage.getItem('adminToken') !== null
  );
  const { data } = useQuery({
    queryKey: ['adminPreview', 'user', userId],
    queryFn: () => getUserPreview(userId),
  });

  console.log(data);

  return (
    <>
      {isAdmin ? (
        <Wrapper>
          {data && (
            <>
              <AdminUserInfo userInfoData={data.userInfo} />
              <AdminSkill skills={data.skills} />
              <AdminEducation educationInfo={data.education} />
              <AdminCareer careers={data.career} />
              <AdminExperience experiences={data.experience} />
              <AdminAward awards={data.award} />
              <AdminCareerContent careerContent={data.careerContent} />
              <AdminSelfIntroduction selfIntroduction={data.selfIntroduction} />
            </>
          )}
        </Wrapper>
      ) : (
        <div>권한이 없습니다.</div>
      )}
    </>
  );
};

const Wrapper = styled.div`
  padding: 40px 20px 40px 20px;
  width: 800px;
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

export default AdminPreview;
