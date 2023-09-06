import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import { RecoilRoot } from 'recoil';
import Layout from './layout/Layout';

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/test" element={<div>test</div>} />
        </Route>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
