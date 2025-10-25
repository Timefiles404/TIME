import React from 'react';
import { Button, Row, Col, Card, Typography, Space, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  PlayCircleOutlined, 
  BookOutlined, 
  DatabaseOutlined, 
  TeamOutlined, 
  ClockCircleOutlined,
  SettingOutlined,
  UserOutlined,
  SafetyOutlined,
  TrophyOutlined 
} from '@ant-design/icons';
import SplitText from '../components/SplitText';
import BlurText from '../components/BlurText';
import ScrollVelocityBackground from '../components/ScrollVelocityBackground';
import MagicBentoGrid from '../components/MagicBento';
import Threads from '../components/Threads';

const { Title, Paragraph, Text } = Typography;

const Home = () => {
  const navigate = useNavigate();

  const serverStats = [
    { label: '服务器版本', value: 'Minecraft 1.21.4', icon: <DatabaseOutlined /> },
    { label: '在线玩家', value: '24/100', icon: <TeamOutlined /> },
    { label: '运行时间', value: '365天', icon: <ClockCircleOutlined /> },
    { label: '服务器状态', value: '在线', icon: <SettingOutlined /> },
  ];

  const features = [
    {
      title: '生存模式',
      description: '纯净的生存体验，与朋友一起建造属于你们的世界',
    },
    {
      title: '经济系统',
      description: '完善的经济体系，通过工作和交易获得财富',
    },
    {
      title: '保护系统',
      description: '领地保护系统，确保你的建筑和物品安全',
    },
    {
      title: '社区活动',
      description: '定期举办建筑比赛和社区活动，丰富游戏体验',
    },
  ];

  // Magic Bento 数据
  const overviewTiles = [
    {
      title: '简介',
      value:
        '欢迎来到 TIME 生存服务器！这里轻松友好，适合养老也适合冒险：\n随机传送开局，地形自然好看，界面信息简洁不打扰。你可以做职业赚金币、在拍卖行交易、接任务探险、挑战副本与世界首领，也可以与伙伴一起建造家园、参加社区活动拿奖励。\n服务器长期稳定、延迟低、支持多版本加入。现在就开始你的生存之旅吧！',
      colSpan: 3,
      rowSpan: 3,
      valueStyle: { fontSize: '18px' },
    },
    {
      title: '服务器状态',
      value: '在线',
      description: '当前 TPS 稳定，延迟低',
      colSpan: 2,
      rowSpan: 1,
      titleStyle: { fontSize: '13px' },
      descriptionStyle: { fontSize: '13px' },
    },
    {
      title: '在线玩家',
      value: '? / 100',
      description: '高峰时段 ?+ 玩家',
      colSpan: 2,
      rowSpan: 1,
      titleStyle: { fontSize: '13px' },
    },
    {
      title: '服务器版本',
      value: 'Purpur\n1.21.4',
      description: '支持跨版本到\n1.21\n1.21.1\n1.21.2\n1.21.3',
      colSpan: 1,
      rowSpan: 2,
      valueStyle: { fontSize: '16px' },
      titleStyle: { fontSize: '13px' },
    },
    {
      title: '服务器地址',
      value: 'fun.mminecraft.cn:1040',
      description: '使用LittleSkin登录以防止越权问题',
      colSpan: 3,
      rowSpan: 1,
      valueStyle: { fontSize: '20px' },
      titleStyle: { fontSize: '13px' },
    },
    // 特色合并到概况网格
    {
      title: '生存模式',
      value: '原版生存体验，随机传送 BetterRTP，地形生成 Terra，HUD 信息 MythicHUD/RPGhuds，轻量不打扰。',
      colSpan: 2,
      rowSpan: 2,
      valueStyle: { fontSize: '16px' },
    },
    {
      title: '经济系统',
      value: 'Jobs 职业、AuctionHouse 拍卖、Essentials 商店与基础经济，鼓励玩家自由交易发展。',
      colSpan: 2,
      rowSpan: 2,
      valueStyle: { fontSize: '16px' },
    },
    {
      title: '保护系统',
      value: 'WorldGuard 领地与区域保护，LuckPerms 精细权限控制，支持社区治理与安全巡查。',
      colSpan: 2,
      rowSpan: 2,
      valueStyle: { fontSize: '16px' },
    },
    {
       title: '社区活动',
       value: '定期 Boss/副本（EliteMobs）、任务线（Quests）与主题活动，丰厚奖励与限时外观。',
       colSpan: 6,
       rowSpan: 2,
       valueStyle: { fontSize: '16px' },
     },
     // 配置项合并至概况
     { title: '服务器地址', value: 'fun.mminecraft.cn:1040', colSpan: 3, rowSpan: 1 },
     { title: '游戏版本', value: 'Minecraft 1.21.4', colSpan: 1, rowSpan: 1 },
     { title: '认证方式', value: 'LittleSkin 外置登录', colSpan: 1, rowSpan: 1 },
     { title: '启动器', value: 'PCL2 启动器', colSpan: 1, rowSpan: 1 },
     { title: 'Java 版本', value: 'Java 21', colSpan: 1, rowSpan: 1 },
     { title: '内存分配', value: '4-6GB', colSpan: 1, rowSpan: 1 },
     { title: '整合包', value: '群文件整合包，PCL2 自动配置 LittleSkin', colSpan: 4, rowSpan: 1 },
   ];



  return (
    <div style={{ paddingTop: '70px', minHeight: '100vh' }}>
      {/* 英雄区域 */}
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
        {/* 滚动文字背景 */}
        <ScrollVelocityBackground
          text="TIMEFILES   时光档案   SURVIVAL   生存 PEACEFUL 养老  SOCIAL 社交"
          baseVelocity={20.67}
          numLines={20}
          style={{ opacity: 0.5 }}
        />
        {/* 背景装饰 */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
            borderRadius: '50%',
            zIndex: 1,
          }}
        />

        <div style={{ textAlign: 'center', zIndex: 2, maxWidth: '800px', padding: '0 20px' }}>
          {/* 主标题 */}
          <Title
            level={1}
            className="fade-in"
            style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
              // 强化文字渲染优化
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              fontSmooth: 'always',
              WebkitTextStroke: '0.01em transparent',
              // 防止模糊的额外属性
              transform: 'translateZ(0)',
              willChange: 'auto',
              backfaceVisibility: 'hidden',
              perspective: '1000px'
            }}
          >
            <SplitText
              delay={0.5}
              duration={0.8}
              stagger={0.08}
              ease="power2.out"
            >
              TIME 生存服务器
            </SplitText>
          </Title>

          {/* 副标题 */}
          <Paragraph
            className="slide-up"
            style={{
              fontSize: '1.5rem',
              color: '#cccccc',
              marginBottom: '40px',
              lineHeight: '1.6',
            }}
          >
            探索无限可能的 Minecraft 世界
            <br />
            与朋友一起创造属于你们的传奇
          </Paragraph>

          {/* 主要按钮 */}
          <Space size="large" className="scale-in">
            <Button
              type="primary"
              size="large"
              icon={<PlayCircleOutlined />}
              className="modern-button hover-lift"
              style={{
                height: '60px',
                padding: '0 40px',
                fontSize: '18px',
                fontWeight: 'bold',
                borderRadius: '30px',
              }}
              onClick={() => {
                // 滚动到服务器信息区域
                document.getElementById('server-info').scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            >
              加入服务器
            </Button>

            <Button
              size="large"
              icon={<BookOutlined />}
              className="modern-button hover-lift"
              style={{
                height: '60px',
                padding: '0 40px',
                fontSize: '18px',
                fontWeight: 'bold',
                borderRadius: '30px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
              }}
              onClick={() => navigate('/tutorial')}
            >
              查看加入教程
            </Button>
          </Space>
        </div>
      </div>

      {/* 服务器概况 */}
      <div
        id="server-info"
        style={{
          padding: '100px 50px',
          background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* 去掉大标题，使用 Magic Bento 网格 */}
          <MagicBentoGrid items={overviewTiles} columns={6} rowHeight={100} />
        </div>
      </div>
      {/* 服务器特色区块已移除，内容已合并至概况 */}

      {/* 服务器配置信息 */}
      <div style={{ padding: '100px 50px', background: '#1a1a1a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* 配置项已合并到概况，此网格已移除 */}

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Button
              type="primary"
              size="large"
              icon={<BookOutlined />}
              onClick={() => navigate('/tutorial')}
              style={{
                height: '50px',
                padding: '0 30px',
                fontSize: '16px',
                borderRadius: '25px',
              }}
            >
              查看详细教程
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;