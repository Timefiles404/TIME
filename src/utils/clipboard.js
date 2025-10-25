// 复制文本到剪贴板的工具函数
export const copyToClipboard = async (text) => {
  try {
    // 优先使用现代的 Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // 降级方案：使用传统的 execCommand
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      
      return successful;
    }
  } catch (error) {
    console.error('复制失败:', error);
    return false;
  }
};

// 格式化服务器状态
export const formatServerStatus = (isOnline, playerCount = 0, maxPlayers = 100) => {
  return {
    status: isOnline ? '在线' : '离线',
    statusColor: isOnline ? '#ffffff' : '#666666',
    playerInfo: `${playerCount}/${maxPlayers}`,
  };
};

// 验证URL格式
export const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
};

// 安全的外部链接打开
export const openExternalLink = (url) => {
  if (isValidUrl(url)) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    console.error('无效的URL:', url);
  }
};