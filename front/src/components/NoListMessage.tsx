import React from 'react';
import styled from 'styled-components';

interface NoListMessageProps {
  message: string;
}

export const NoListMessage = (props: NoListMessageProps) => {
  const { message } = props;
  return <Wrapper>{message}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #d7dce5;
  color: #67738e;
  height: 140px;
`;
