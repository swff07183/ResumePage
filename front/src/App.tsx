import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ResumePage } from '@pages/ResumePage';
import { RecoilRoot } from 'recoil';
import Layout from './layout/Layout';
import LoginPage from '@pages/LoginPage';
import SignupPage from '@/pages/SignUpPage';
import LoginRequired from './components/LoginRequired';
import IsLoggedIn from './components/IsLoggedIn';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route element={<LoginRequired />}>
            <Route path="/" element={<ResumePage />} />
          </Route>
          <Route element={<IsLoggedIn />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
        </Route>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
