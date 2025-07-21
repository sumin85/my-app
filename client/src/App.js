import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Dashboard from './pages/Home/Dashboard';
import Mypage from './pages/Mypage';
import LoginPage from './pages/LoginPage';
import Notifications from './pages/Notifications';
import RegisterPage from './pages/sign/register';
import './App.css';
import NaverCallback from './pages/NaverCallback';
  

function App() {
  return (
    <>
    <ErrorBoundary>
    <Header />
    </ErrorBoundary>
    <ErrorBoundary>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/callback/naver" element={<NaverCallback />} />
    </Routes>
    </ErrorBoundary>
    </>
  );
}

export default App;