// Ant Design 黑白灰主题配置
export const darkTheme = {
  token: {
    // 主色调 - 使用白色作为主色
    colorPrimary: '#ffffff',
    colorPrimaryHover: '#f0f0f0',
    colorPrimaryActive: '#d9d9d9',
    
    // 背景色
    colorBgBase: '#000000',
    colorBgContainer: '#1a1a1a',
    colorBgElevated: '#262626',
    colorBgLayout: '#000000',
    colorBgSpotlight: '#333333',
    
    // 文字颜色
    colorText: '#ffffff',
    colorTextSecondary: '#cccccc',
    colorTextTertiary: '#999999',
    colorTextQuaternary: '#666666',
    
    // 边框颜色
    colorBorder: '#333333',
    colorBorderSecondary: '#262626',
    
    // 填充色
    colorFill: '#333333',
    colorFillSecondary: '#262626',
    colorFillTertiary: '#1a1a1a',
    colorFillQuaternary: '#141414',
    
    // 禁用状态
    colorTextDisabled: '#666666',
    colorBgContainerDisabled: '#1a1a1a',
    
    // 成功、警告、错误色 - 使用灰度
    colorSuccess: '#ffffff',
    colorWarning: '#cccccc',
    colorError: '#999999',
    colorInfo: '#ffffff',
    
    // 链接色
    colorLink: '#ffffff',
    colorLinkHover: '#f0f0f0',
    colorLinkActive: '#d9d9d9',
    
    // 阴影
    boxShadow: '0 2px 8px rgba(255, 255, 255, 0.1)',
    boxShadowSecondary: '0 4px 16px rgba(255, 255, 255, 0.05)',
    
    // 圆角
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 4,
    
    // 字体
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: 14,
    fontSizeLG: 16,
    fontSizeXL: 20,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
    
    // 间距
    padding: 16,
    paddingLG: 24,
    paddingXL: 32,
    margin: 16,
    marginLG: 24,
    marginXL: 32,
    
    // 高度
    controlHeight: 40,
    controlHeightLG: 48,
    controlHeightSM: 32,
    
    // 线条宽度
    lineWidth: 1,
    lineWidthBold: 2,
    
    // 动画
    motionDurationSlow: '0.3s',
    motionDurationMid: '0.2s',
    motionDurationFast: '0.1s',
  },
  components: {
    // 按钮组件
    Button: {
      colorPrimary: '#ffffff',
      colorPrimaryHover: '#f0f0f0',
      colorPrimaryActive: '#d9d9d9',
      colorText: '#000000',
      colorBgContainer: 'rgba(255, 255, 255, 0.1)',
      colorBorder: 'rgba(255, 255, 255, 0.3)',
      borderColorDisabled: '#333333',
      colorTextDisabled: '#666666',
      defaultBg: 'rgba(255, 255, 255, 0.1)',
      defaultBorderColor: 'rgba(255, 255, 255, 0.3)',
      defaultColor: '#ffffff',
      defaultHoverBg: 'rgba(255, 255, 255, 0.2)',
      defaultHoverBorderColor: 'rgba(255, 255, 255, 0.4)',
      defaultHoverColor: '#ffffff',
    },
    
    // 菜单组件
    Menu: {
      colorBgContainer: 'transparent',
      colorItemBg: 'transparent',
      colorItemBgHover: 'rgba(255, 255, 255, 0.1)',
      colorItemBgSelected: 'rgba(255, 255, 255, 0.15)',
      colorItemText: '#ffffff',
      colorItemTextHover: '#ffffff',
      colorItemTextSelected: '#ffffff',
    },
    
    // 卡片组件
    Card: {
      colorBgContainer: 'rgba(40, 40, 40, 0.9)',
      colorBorderSecondary: 'rgba(255, 255, 255, 0.2)',
      colorBorder: 'rgba(255, 255, 255, 0.15)',
    },
    
    // 步骤条组件
    Steps: {
      colorPrimary: '#ffffff',
      colorText: '#ffffff',
      colorTextDescription: '#cccccc',
      colorBgContainer: 'rgba(255, 255, 255, 0.1)',
      colorBorder: 'rgba(255, 255, 255, 0.2)',
      colorSplit: '#333333',
    },
    
    // 输入框组件
    Input: {
      colorBgContainer: '#1a1a1a',
      colorBorder: '#333333',
      colorText: '#ffffff',
      colorTextPlaceholder: '#666666',
    },
    
    // 布局组件
    Layout: {
      colorBgHeader: 'rgba(0, 0, 0, 0.8)',
      colorBgBody: '#000000',
      colorBgTrigger: '#1a1a1a',
    },
    
    // 分割线
    Divider: {
      colorSplit: '#333333',
    },
    
    // 标签页
    Tabs: {
      colorBgContainer: 'transparent',
      colorText: '#ffffff',
      colorPrimary: '#ffffff',
    },
    
    // 工具提示
    Tooltip: {
      colorBgSpotlight: '#333333',
      colorTextLightSolid: '#ffffff',
    },
    
    // 警告提示组件
    Alert: {
      colorInfoBg: 'rgba(40, 40, 40, 0.9)',
      colorInfoBorder: 'rgba(255, 255, 255, 0.2)',
      colorWarningBg: 'rgba(60, 60, 40, 0.9)',
      colorWarningBorder: 'rgba(255, 255, 255, 0.2)',
      colorSuccessBg: 'rgba(40, 60, 40, 0.9)',
      colorSuccessBorder: 'rgba(255, 255, 255, 0.2)',
      colorErrorBg: 'rgba(60, 40, 40, 0.9)',
      colorErrorBorder: 'rgba(255, 255, 255, 0.2)',
      colorText: '#ffffff',
      colorTextHeading: '#ffffff',
    },
  },
};