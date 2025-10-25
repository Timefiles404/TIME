import React, { useState } from 'react';
import { Typography, Steps, Card, Button, Space, Divider, Alert, Tag, message } from 'antd';
import { 
  DownloadOutlined, 
  SettingOutlined, 
  UserOutlined, 
  LoginOutlined,
  DatabaseOutlined,
  CopyOutlined,
  LinkOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import { copyToClipboard, openExternalLink } from '../utils/clipboard';

const { Title, Paragraph, Text } = Typography;

const Tutorial = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleCopy = async (text, description) => {
    const success = await copyToClipboard(text);
    if (success) {
      message.success(`已复制${description}到剪贴板`);
    } else {
      message.error('复制失败，请手动复制');
    }
  };

  const handleExternalLink = (url, description) => {
    openExternalLink(url);
    message.info(`正在打开${description}...`);
  };

  const steps = [
    {
      title: '下载 PCL2 启动器',
      icon: <DownloadOutlined />,
      content: (
        <Card className="modern-card" style={{ marginTop: '20px' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Alert
              message="推荐使用 PCL2 启动器"
              description="PCL2 是一款功能强大、界面美观的 Minecraft 启动器，支持第三方登录"
              type="info"
              showIcon
            />
            
            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                下载地址
              </Title>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Text style={{ color: '#cccccc' }}>GitHub 官方下载：</Text>
                  <Button
                    type="primary"
                    icon={<LinkOutlined />}
                    onClick={() => handleExternalLink('https://github.com/Hex-Dragon/PCL2/releases', 'PCL2 GitHub 下载页面')}
                  >
                    前往下载
                  </Button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Text style={{ color: '#cccccc' }}>官网下载：</Text>
                  <Button
                    type="primary"
                    icon={<LinkOutlined />}
                    onClick={() => handleExternalLink('https://pan.aoe.top/Tools/PCL2', 'PCL2 官网下载页面')}
                  >
                    前往下载
                  </Button>
                </div>
              </Space>
            </div>

            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                安装说明
              </Title>
              <ul style={{ color: '#cccccc', lineHeight: '1.8' }}>
                <li>下载 PCL2 安装包（推荐下载最新版本）</li>
                <li>运行安装程序，按照提示完成安装</li>
                <li>首次启动时，PCL2 会自动检测并配置基本设置</li>
                <li>建议将 PCL2 安装在非系统盘，避免权限问题</li>
              </ul>
            </div>
          </Space>
        </Card>
      )
    },
    {
      title: '如果你在群里下载了整合包（快速开始）',
      icon: <CheckCircleOutlined />,
      content: (
        <Card className="modern-card" style={{ marginTop: '20px' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Alert
              message="使用群整合包更简便"
              description="将整合包解压后，直接在目录中运行 PCL2 并选择“安装整合包”。整合包内已默认配置 LittleSkin 登录。"
              type="success"
              showIcon
            />
            
            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                快速步骤
              </Title>
              <ol style={{ color: '#cccccc', lineHeight: '1.8' }}>
                <li>把整合包压缩包拖到任意目录</li>
                <li>右键压缩包，选择 <Tag color="default">解压</Tag></li>
                <li>进入解压后的目录，双击 <Tag color="default">PCL2</Tag>（或 <Tag color="default">pcl2</Tag>）</li>
                <li>在弹窗中点击 <Tag color="default">安装整合包</Tag>，等待完成</li>
                <li>整合包中的 PCL2 已默认配置 <Tag color="default">LittleSkin</Tag> 登录，无需手动设置</li>
              </ol>
            </div>

            <div>
              <Space size="middle">
                <Button
                  type="primary"
                  icon={<UserOutlined />}
                  onClick={() => {
                    const idx = steps.findIndex(s => s.title.includes('注册 LittleSkin'));
                    if (idx >= 0) setCurrentStep(idx);
                  }}
                >
                  跳转到注册 LittleSkin
                </Button>
                <Button
                  icon={<SettingOutlined />}
                  onClick={() => {
                    const idx = steps.findIndex(s => s.title.includes('配置 Java'));
                    if (idx >= 0) setCurrentStep(idx);
                  }}
                >
                  查看 Java 环境
                </Button>
              </Space>
            </div>
          </Space>
        </Card>
      )
    },
    {
      title: '配置 Java 环境',
      icon: <SettingOutlined />,
      content: (
        <Card className="modern-card" style={{ marginTop: '20px' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Alert
              message="Minecraft 1.21.4 需要 Java 21"
              description="确保使用正确的 Java 版本以获得最佳游戏体验"
              type="warning"
              showIcon
            />
            
            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                在 PCL2 中安装 Java 21
              </Title>
              <ol style={{ color: '#cccccc', lineHeight: '1.8' }}>
                <li>打开 PCL2 启动器</li>
                <li>点击左侧菜单中的 <Tag color="default">设置</Tag></li>
                <li>选择 <Tag color="default">游戏</Tag> → <Tag color="default">游戏 Java</Tag></li>
                <li>在 Java 版本下拉菜单中选择 <Tag color="default">Java 21</Tag></li>
                <li>如果没有 Java 21，点击 <Tag color="default">下载 Java</Tag> 按钮</li>
                <li>等待下载完成后，重新选择 Java 21</li>
              </ol>
            </div>

            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                验证 Java 配置
              </Title>
              <ul style={{ color: '#cccccc', lineHeight: '1.8' }}>
                <li>确认 Java 路径显示为 Java 21 版本</li>
                <li>内存分配建议设置为 4GB 或更高（根据电脑配置调整）</li>
                <li>如遇到问题，可以尝试重启 PCL2</li>
              </ul>
            </div>
          </Space>
        </Card>
      )
    },
    {
      title: '下载 Minecraft 1.21.4',
      icon: <DownloadOutlined />,
      content: (
        <Card className="modern-card" style={{ marginTop: '20px' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                下载游戏版本
              </Title>
              <ol style={{ color: '#cccccc', lineHeight: '1.8' }}>
                <li>在 PCL2 主界面，点击 <Tag color="default">下载</Tag> 选项卡</li>
                <li>在版本列表中找到 <Tag color="default">1.21.4</Tag> 版本</li>
                <li>点击版本号右侧的下载按钮</li>
                <li>选择下载源（推荐官方源或 BMCLAPI）</li>
                <li>等待下载完成</li>
              </ol>
            </div>

            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                可选：安装光影和模组
              </Title>
              <ul style={{ color: '#cccccc', lineHeight: '1.8' }}>
                <li><strong>光影推荐：</strong>BSL Shaders、Complementary Shaders</li>
                <li><strong>优化模组：</strong>Sodium、Lithium、Phosphor</li>
                <li><strong>功能模组：</strong>JEI、Minimap、Inventory Tweaks</li>
                <li>在 PCL2 的 <Tag color="default">下载</Tag> → <Tag color="default">模组</Tag> 中可以直接搜索安装</li>
              </ul>
            </div>
          </Space>
        </Card>
      )
    },
    {
      title: '注册 LittleSkin 账户',
      icon: <UserOutlined />,
      content: (
        <Card className="modern-card" style={{ marginTop: '20px' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Alert
              message="LittleSkin 是第三方皮肤站"
              description="提供自定义皮肤和外置登录服务，让你的 Minecraft 角色更加个性化"
              type="info"
              showIcon
            />
            
            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                注册账户
              </Title>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Text style={{ color: '#cccccc' }}>LittleSkin 官网：</Text>
                  <Button
                    type="primary"
                    icon={<LinkOutlined />}
                    onClick={() => handleExternalLink('https://littleskin.cn', 'LittleSkin 官网')}
                  >
                    前往注册
                  </Button>
                </div>
                <ol style={{ color: '#cccccc', lineHeight: '1.8', marginTop: '15px' }}>
                  <li>点击上方按钮前往 LittleSkin 官网</li>
                  <li>点击右上角的 <Tag color="default">注册</Tag> 按钮</li>
                  <li>填写邮箱、用户名和密码</li>
                  <li>完成邮箱验证</li>
                  <li>登录账户</li>
                </ol>
              </Space>
            </div>

            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                添加角色（用户名）
              </Title>
              <ol style={{ color: '#cccccc', lineHeight: '1.8' }}>
                <li>登录后，点击 <Tag color="default">用户中心</Tag></li>
                <li>选择 <Tag color="default">角色管理</Tag></li>
                <li>点击 <Tag color="default">添加新角色</Tag></li>
                <li>输入你想要的游戏用户名（3-16个字符，支持字母数字下划线）</li>
                <li>确认添加</li>
              </ol>
            </div>

            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                上传/更换皮肤
              </Title>
              <ol style={{ color: '#cccccc', lineHeight: '1.8' }}>
                <li>在角色管理页面，点击角色右侧的 <Tag color="default">管理</Tag></li>
                <li>选择 <Tag color="default">更换皮肤</Tag></li>
                <li>上传皮肤文件（PNG格式，64x64或64x32像素）</li>
                <li>选择皮肤模型（Steve 或 Alex）</li>
                <li>保存更改</li>
              </ol>
            </div>
          </Space>
        </Card>
      )
    },
    {
      title: '配置 PCL2 第三方登录',
      icon: <LoginOutlined />,
      content: (
        <Card className="modern-card" style={{ marginTop: '20px' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Alert
              message="配置外置登录"
              description="使用 LittleSkin 账户登录 Minecraft，享受自定义皮肤"
              type="success"
              showIcon
            />
            
            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                添加第三方登录
              </Title>
              <ol style={{ color: '#cccccc', lineHeight: '1.8' }}>
                <li>在 PCL2 主界面，点击左下角的 <Tag color="default">登录</Tag> 按钮</li>
                <li>选择 <Tag color="default">第三方登录：Authlib-Injector</Tag></li>
                <li>或者直接选择 <Tag color="default">Little Skin</Tag>（如果有的话）</li>
                <li>在认证服务器地址中输入以下地址：</li>
              </ol>
              
              <div style={{ 
                background: '#1a1a1a', 
                padding: '15px', 
                borderRadius: '8px', 
                border: '1px solid #333',
                marginTop: '15px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text code style={{ color: '#ffffff', fontSize: '14px' }}>
                    https://littleskin.cn/api/yggdrasil
                  </Text>
                  <Button
                    size="small"
                    icon={<CopyOutlined />}
                    onClick={() => handleCopy('https://littleskin.cn/api/yggdrasil', 'Yggdrasil 地址')}
                  >
                    复制
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                登录账户
              </Title>
              <ol style={{ color: '#cccccc', lineHeight: '1.8' }}>
                <li>在用户名框中输入你的 LittleSkin 邮箱</li>
                <li>在密码框中输入你的 LittleSkin 密码</li>
                <li>点击 <Tag color="default">登录</Tag> 按钮</li>
                <li>登录成功后，选择你要使用的角色</li>
                <li>确认登录</li>
              </ol>
            </div>

            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                验证登录状态
              </Title>
              <ul style={{ color: '#cccccc', lineHeight: '1.8' }}>
                <li>PCL2 左下角应显示你的角色名</li>
                <li>角色头像应显示你上传的皮肤</li>
                <li>如果显示异常，尝试重新登录</li>
              </ul>
            </div>
          </Space>
        </Card>
      )
    },
    {
      title: '加入服务器',
      icon: <DatabaseOutlined />,
      content: (
        <Card className="modern-card" style={{ marginTop: '20px' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Alert
              message="准备加入 TIME 生存服务器"
              description="确保已完成前面所有步骤，现在可以加入服务器开始游戏了"
              type="success"
              showIcon
            />
            
            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                启动游戏
              </Title>
              <ol style={{ color: '#cccccc', lineHeight: '1.8' }}>
                <li>确认已选择 Minecraft 1.21.4 版本</li>
                <li>确认已使用 LittleSkin 账户登录</li>
                <li>点击 <Tag color="default">启动游戏</Tag> 按钮</li>
                <li>等待游戏启动完成</li>
              </ol>
            </div>

            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                添加服务器
              </Title>
              <ol style={{ color: '#cccccc', lineHeight: '1.8' }}>
                <li>在 Minecraft 主菜单中，点击 <Tag color="default">多人游戏</Tag></li>
                <li>点击 <Tag color="default">添加服务器</Tag></li>
                <li>填写服务器信息：</li>
              </ol>
              
              <div style={{ marginTop: '15px' }}>
                <div style={{ 
                  background: '#1a1a1a', 
                  padding: '15px', 
                  borderRadius: '8px', 
                  border: '1px solid #333',
                  marginBottom: '10px'
                }}>
                  <div style={{ marginBottom: '10px' }}>
                    <Text style={{ color: '#cccccc' }}>服务器名称：</Text>
                    <Text code style={{ color: '#ffffff', marginLeft: '10px' }}>TIME 生存</Text>
                    <Button
                      size="small"
                      icon={<CopyOutlined />}
                      style={{ marginLeft: '10px' }}
                      onClick={() => handleCopy('TIME 生存', '服务器名称')}
                    >
                      复制
                    </Button>
                  </div>
                  <div>
                    <Text style={{ color: '#cccccc' }}>服务器地址：</Text>
                    <Text code style={{ color: '#ffffff', marginLeft: '10px' }}>fun.mminecraft.cn:1040</Text>
                    <Button
                      size="small"
                      icon={<CopyOutlined />}
                      style={{ marginLeft: '10px' }}
                      onClick={() => handleCopy('fun.mminecraft.cn:1040', '服务器地址')}
                    >
                      复制
                    </Button>
                  </div>
                </div>
              </div>

              <ol start="4" style={{ color: '#cccccc', lineHeight: '1.8' }}>
                <li>点击 <Tag color="default">完成</Tag> 保存服务器</li>
                <li>双击服务器或点击 <Tag color="default">加入服务器</Tag></li>
                <li>等待连接成功，开始游戏！</li>
              </ol>
            </div>

            <div>
              <Title level={4} style={{ color: '#ffffff', marginBottom: '15px' }}>
                <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
                恭喜完成设置！
              </Title>
              <div style={{ 
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)', 
                padding: '20px', 
                borderRadius: '8px', 
                border: '1px solid #333'
              }}>
                <Paragraph style={{ color: '#cccccc', marginBottom: '15px', lineHeight: '1.8' }}>
                  现在你已经成功配置了 PCL2 启动器和 LittleSkin 账户，可以使用自定义皮肤在 TIME 生存服务器中游戏了！
                </Paragraph>
                <ul style={{ color: '#cccccc', lineHeight: '1.8', marginBottom: '0' }}>
                  <li>如遇到连接问题，请检查网络连接和防火墙设置</li>
                  <li>如需更换皮肤，可随时登录 LittleSkin 官网修改</li>
                  <li>服务器有任何问题，欢迎联系管理员</li>
                </ul>
              </div>
            </div>
          </Space>
        </Card>
      )
    }
  ];

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
          加入服务器教程
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
          详细的 PCL2 启动器配置和 LittleSkin 设置指南
        </Paragraph>
      </div>

      {/* 教程内容 */}
      <div style={{ padding: '60px 50px 100px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* 步骤导航 */}
          <Card className="modern-card" style={{ marginBottom: '30px' }}>
            <Steps
              current={currentStep}
              onChange={setCurrentStep}
              direction="horizontal"
              size="small"
              items={steps.map((step, index) => ({
                title: step.title,
                icon: step.icon,
                status: currentStep === index ? 'process' : currentStep > index ? 'finish' : 'wait'
              }))}
              style={{
                background: 'rgba(40, 40, 40, 0.9)',
                padding: '24px',
                borderRadius: '12px',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                '& .ant-steps-item-title': {
                  color: '#ffffff !important'
                },
                '& .ant-steps-item-description': {
                  color: '#cccccc !important'
                }
              }}
            />
          </Card>

          {/* 当前步骤内容 */}
          <div>
            <Title level={2} style={{ color: '#ffffff', marginBottom: '20px' }}>
              {steps[currentStep].icon}
              <span style={{ marginLeft: '10px' }}>{steps[currentStep].title}</span>
            </Title>
            {steps[currentStep].content}
          </div>

          {/* 导航按钮 */}
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <Space size="large">
              <Button
                size="large"
                disabled={currentStep === 0}
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                上一步
              </Button>
              <Button
                type="primary"
                size="large"
                disabled={currentStep === steps.length - 1}
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                下一步
              </Button>
            </Space>
          </div>

          {/* 快速跳转 */}
          <Divider style={{ borderColor: '#333', margin: '60px 0 40px' }} />
          <div style={{ textAlign: 'center' }}>
            <Title level={4} style={{ color: '#ffffff', marginBottom: '20px' }}>
              快速跳转
            </Title>
            <Space wrap>
              {steps.map((step, index) => (
                <Button
                  key={index}
                  type={currentStep === index ? 'primary' : 'default'}
                  size="small"
                  onClick={() => setCurrentStep(index)}
                  icon={step.icon}
                >
                  {step.title}
                </Button>
              ))}
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;