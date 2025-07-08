import React from 'react';
import ReactDOM from 'react-dom/client'; // 또는 ReactDOM.render 사용
import './index.css'; // 전역 스타일
import App from './App'; // 최상위 컴포넌트

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div id='root'></div>
  </React.StrictMode>
);