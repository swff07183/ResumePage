import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { getSubmit, getUserPreview } from '@/api/admin';
import { adminClient } from '@/api/client';

// 이름, 성별, 생년월일, 국적, 학력, 학교이름, 전공

interface ICol {
  id: number;
  name: string;
  gender: string;
  birth: string;
  country: string;
  educationName: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'user' },
  { field: 'name', headerName: '이름', width: 130 },
  { field: 'gender', headerName: '성별', width: 130 },
  {
    field: 'birth',
    headerName: '생년월일',
    width: 130,
  },
  {
    field: 'country',
    headerName: '국적',
    width: 130,
  },
  {
    field: 'educationName',
    headerName: '학교',
    width: 130,
  },
];

const AdminUserList = () => {
  const [rows, setRows] = useState<ICol[]>([]);
  const handleRowClick = ({ row }: any) => {
    console.log(row);
    window.open(
      `/admin/preview/${row.user}`,
      '_blank',
      'width=840, height=1000'
    );
  };

  const { data } = useQuery({
    queryKey: ['admin', 'userList'],
    queryFn: getSubmit,
  });

  useEffect(() => {
    console.log(data);
    if (data)
      setRows(
        data.map((info: any) => ({
          id: info.id,
          user: info.user,
          name: info.userInfo.name,
          gender: info.userInfo.gender,
          birth: info.userInfo.birth,
          country: info.userInfo.country,
          educationName: info.education.name,
        }))
      );
  }, [data]);

  return (
    <Wrapper>
      <div style={{ height: 400 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
            columns: {
              columnVisibilityModel: {
                user: false,
              },
            },
          }}
          pageSizeOptions={[5, 10]}
          // checkboxSelection
          onRowClick={handleRowClick}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-sizing: border-box;
  padding: 40px 20px;
`;

export default AdminUserList;
