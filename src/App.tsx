import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import IndexPage from './pages/IndexPage';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <Wrapper>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/test" element={<div>test</div>} />
        </Routes>
      </RecoilRoot>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
`;

export default App;
