import React from 'react';
import { Typography, Card, Row, Col, Empty } from 'antd';
import { PictureOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Gallery = () => {
  return (
    <div style={{ paddingTop: '70px', minHeight: '100vh', background: '#000000' }}>
      {/* 页面标题 */}
      <div
        style={{
          padding: '80px 50px 60px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        }}
      >
        <Title
          level={1}
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            margin: '0 0 20px 0',
            background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          服务器画廊
        </Title>
        <Paragraph
          style={{
            fontSize: '1.2rem',
            color: '#cccccc',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}
        >
          展示服务器中玩家们的精彩建筑作品和美丽风景
        </Paragraph>
      </div>

      {/* 画廊内容区域 */}
      <div style={{ padding: '60px 50px 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* 分类标签区域 */}
          <Row gutter={[24, 24]} style={{ marginBottom: '40px' }}>
            <Col xs={24} sm={8} md={6}>
              <Card
                className="modern-card hover-lift"
                style={{ textAlign: 'center', cursor: 'pointer' }}
                bodyStyle={{ padding: '20px' }}
              >
                <PictureOutlined style={{ fontSize: '24px', color: '#ffffff', marginBottom: '10px' }} />
                <div style={{ color: '#ffffff', fontWeight: 'bold' }}>建筑作品</div>
                <div style={{ color: '#cccccc', fontSize: '12px' }}>即将上线</div>
              </Card>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <Card
                className="modern-card hover-lift"
                style={{ textAlign: 'center', cursor: 'pointer' }}
                bodyStyle={{ padding: '20px' }}
              >
                <PictureOutlined style={{ fontSize: '24px', color: '#ffffff', marginBottom: '10px' }} />
                <div style={{ color: '#ffffff', fontWeight: 'bold' }}>风景截图</div>
                <div style={{ color: '#cccccc', fontSize: '12px' }}>即将上线</div>
              </Card>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <Card
                className="modern-card hover-lift"
                style={{ textAlign: 'center', cursor: 'pointer' }}
                bodyStyle={{ padding: '20px' }}
              >
                <PictureOutlined style={{ fontSize: '24px', color: '#ffffff', marginBottom: '10px' }} />
                <div style={{ color: '#ffffff', fontWeight: 'bold' }}>活动照片</div>
                <div style={{ color: '#cccccc', fontSize: '12px' }}>即将上线</div>
              </Card>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <Card
                className="modern-card hover-lift"
                style={{ textAlign: 'center', cursor: 'pointer' }}
                bodyStyle={{ padding: '20px' }}
              >
                <PictureOutlined style={{ fontSize: '24px', color: '#ffffff', marginBottom: '10px' }} />
                <div style={{ color: '#ffffff', fontWeight: 'bold' }}>玩家作品</div>
                <div style={{ color: '#cccccc', fontSize: '12px' }}>即将上线</div>
              </Card>
            </Col>
          </Row>

          {/* 暂时的空状态 */}
          <Card
            className="modern-card"
            style={{ textAlign: 'center', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Empty
              image={<PictureOutlined style={{ fontSize: '64px', color: '#666666' }} />}
              description={
                <div>
                  <div style={{ color: '#ffffff', fontSize: '18px', marginBottom: '10px' }}>
                    画廊功能正在开发中
                  </div>
                  <div style={{ color: '#cccccc', fontSize: '14px' }}>
                    我们正在收集服务器中的精彩截图和建筑作品
                    <br />
                    敬请期待更多精彩内容！
                  </div>
                </div>
              }
            />
          </Card>

          {/* 预览网格布局 */}
          <div style={{ marginTop: '60px' }}>
            <Title level={3} style={{ color: '#ffffff', marginBottom: '30px', textAlign: 'center' }}>
              预览布局
            </Title>
            <Row gutter={[16, 16]}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Col xs={24} sm={12} md={8} lg={6} key={item}>
                  <Card
                    className="modern-card hover-lift"
                    style={{ 
                      height: '200px',
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    bodyStyle={{ padding: '0', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      <PictureOutlined style={{ fontSize: '32px', color: '#666666', marginBottom: '10px' }} />
                      <div style={{ color: '#999999', fontSize: '12px' }}>
                        图片占位符 {item}
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;