import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ResumePage } from '@pages/ResumePage';
import { RecoilRoot } from 'recoil';
import Layout from './layout/Layout';
import LoginPage from '@pages/LoginPage';
import SignupPage from '@/pages/SignUpPage';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<ResumePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
