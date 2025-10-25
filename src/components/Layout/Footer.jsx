import React from 'react';
import { Layout, Typography, Divider } from 'antd';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  return (
    <AntFooter
      style={{
        background: 'rgba(26, 26, 26, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center',
        padding: '40px 50px',
        marginTop: '50px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '20px' }}>
          <Text style={{ color: '#ffffff', fontSize: '18px', fontWeight: 'bold' }}>
            TIME 生存服务器
          </Text>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <Text style={{ color: '#cccccc', fontSize: '14px' }}>
            服务器地址: fun.mminecraft.cn:1040
          </Text>
        </div>
        
        <Divider style={{ borderColor: '#333333', margin: '20px 0' }} />
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '20px' }}>
          <Text style={{ color: '#999999', fontSize: '14px' }}>
            游戏版本: Minecraft 1.21.4
          </Text>
          <Text style={{ color: '#999999', fontSize: '14px' }}>
            认证方式: LittleSkin
          </Text>
          <Text style={{ color: '#999999', fontSize: '14px' }}>
            启动器: PCL2
          </Text>
        </div>
        
        <Text style={{ color: '#666666', fontSize: '12px' }}>
          © 2024 TIME 生存服务器. 保留所有权利.
        </Text>
      </div>
    </AntFooter>
  );
};

export default Footer;