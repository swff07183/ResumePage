import { getUserPreview } from '@/api/admin';
import AdminPreview from '@/features/admin/components/AdminPreview';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const AdminPreviewPage = () => {
  const { userId } = useParams();

  return (
    <>
      <Wrapper>
        <AdminPreview userId={Number(userId ?? 0)} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  /* width: 970px; */
  min-width: 840px;
  display: flex;
  justify-content: center;
  /* padding: 0 20px; */
  /* padding-top: 40px; */
`;

export default AdminPreviewPage;
