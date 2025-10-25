import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import App from './App';
import { darkTheme } from './styles/theme';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ConfigProvider 
      locale={zhCN}
      theme={darkTheme}
    >
      <App />
    </ConfigProvider>
  </BrowserRouter>
);