import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ResumePage } from '@pages/ResumePage';
import Layout from './layout/Layout';
import LoginPage from '@pages/LoginPage';
import SignupPage from '@/pages/SignUpPage';
import LoginRequired from './components/LoginRequired';
import IsLoggedIn from './components/IsLoggedIn';
import Toast from './components/Toast';
import PreviewPage from './pages/PreviewPage';

function App() {
  return (
    <>
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
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
      <Toast />
    </>
  );
}

export default App;
