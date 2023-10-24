import AdminLogin from '@/features/admin/components/AdminLogin';
import AdminUserList from '@/features/admin/components/AdminUserList';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

/*
관리자 페이지
테이블로 유저 목록 조회
테이블 컬럼
이름, 성별, 생년월일, 국적, 학력, 학교이름, 전공
*/

const AdminPage = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(
    sessionStorage.getItem('adminToken') !== null
  );

  useEffect(() => {
    function handleChangeStorage() {
      const adminToken = sessionStorage.getItem('adminToken');
      setIsAdmin(adminToken !== null);
    }

    window.addEventListener('storage', handleChangeStorage);
    return () => window.removeEventListener('storage', handleChangeStorage);
  }, []);

  return <Wrapper>{!isAdmin ? <AdminLogin /> : <AdminUserList />}</Wrapper>;
};

const Wrapper = styled.div`
  min-width: 1250px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export default AdminPage;
