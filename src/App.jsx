import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Tutorial from './pages/Tutorial';
import Claims from './pages/Claims';

const { Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#000000' }}>
      <Header />
      <Content style={{ background: '#000000' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/claims" element={<Claims />} />
        </Routes>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;