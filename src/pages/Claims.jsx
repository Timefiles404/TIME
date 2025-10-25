import React from 'react';
import { Typography, Card, Button, Space, Divider, Tag } from 'antd';

const { Title, Paragraph, Text } = Typography;

const Claims = () => {
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
          圈地系统使用指南
        </Title>
        <Paragraph
          style={{
            fontSize: '1.2rem',
            color: '#cccccc',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}
        >
          本页面介绍 SimpleClaimSystem 插件的玩家指令与使用方法，帮助你快速建立、管理和保护你的领地。
        </Paragraph>
        <div style={{ marginTop: '20px' }}>
          <Space>
            <Button
              type="primary"
              href="https://xyness.gitbook.io/simpleclaimsystem/commands/player-commands"
              target="_blank"
              rel="noopener noreferrer"
            >
              打开官方玩家指令文档
            </Button>
            <Button
              href="https://xyness.gitbook.io/simpleclaimsystem/permissions/commands"
              target="_blank"
              rel="noopener noreferrer"
            >
              查看权限说明
            </Button>
          </Space>
        </div>
      </div>

      {/* 内容区 */}
      <div style={{ padding: '60px 50px 100px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* 快速上手 */}
          <Card className="modern-card" style={{ marginBottom: '30px', background: 'rgba(40, 40, 40, 0.9)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: '12px' }}>快速上手</Title>
            <Paragraph style={{ color: '#cccccc' }}>
              SimpleClaimSystem 基于区块（chunk）进行圈地。站在想要圈的中心区块，使用下方指令即可创建领地：
            </Paragraph>
            <ul style={{ color: '#cccccc', lineHeight: '1.8' }}>
              <li>
                <code style={{ color: '#fff' }}>/claim [半径]</code>：在当前位置创建领地。可选 <Tag color="default">半径</Tag>，例如 <code style={{ color: '#fff' }}>/claim 2</code> 会以你为中心额外圈下周围 2 格半径的区块。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/unclaim [领地名|*]</code>：删除指定领地，或者使用 <code style={{ color: '#fff' }}>*</code> 取消所有个人领地。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim list</code> 或 <code style={{ color: '#fff' }}>/claims</code>：打开你的领地列表或服务器所有领地 GUI。
              </li>
            </ul>
            <Divider style={{ borderColor: '#333' }} />
            <Paragraph style={{ color: '#999' }}>
              说明：指令的可用性取决于服务器为你分配的权限与限制（例如最大领地数量、最大半径、费用等）。
              详细权限参见官方文档。
            </Paragraph>
          </Card>

          {/* 领地导航与地图 */}
          <Card className="modern-card" style={{ marginBottom: '30px', background: 'rgba(40, 40, 40, 0.9)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: '12px' }}>地图与可视化</Title>
            <ul style={{ color: '#cccccc', lineHeight: '1.8' }}>
              <li>
                <code style={{ color: '#fff' }}>/claim see [玩家]</code>：显示当前位置区块边界。白色：空闲；红色：已被占用；绿色：你自己的领地。指定 <Tag color="default">玩家</Tag> 将以紫色显示该玩家的领地。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim map</code>：在聊天中查看附近的领地地图。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim automap</code>：切换自动显示地图（每次跨区块更新）。
              </li>
            </ul>
          </Card>

          {/* 传送与出生点 */}
          <Card className="modern-card" style={{ marginBottom: '30px', background: 'rgba(40, 40, 40, 0.9)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: '12px' }}>传送与出生点</Title>
            <ul style={{ color: '#cccccc', lineHeight: '1.8' }}>
              <li>
                <code style={{ color: '#fff' }}>/claim tp &lt;领地名&gt;</code>：传送到你的某个领地。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim setspawn</code>：设置领地的内部出生点位置。
              </li>
            </ul>
          </Card>

          {/* 成员管理与黑名单 */}
          <Card className="modern-card" style={{ marginBottom: '30px', background: 'rgba(40, 40, 40, 0.9)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: '12px' }}>成员管理与黑名单</Title>
            <ul style={{ color: '#cccccc', lineHeight: '1.8' }}>
              <li>
                <code style={{ color: '#fff' }}>/claim add [*|领地名] &lt;玩家&gt;</code>：将玩家加入到你的领地。使用 <code style={{ color: '#fff' }}>*</code> 代表所有领地，不填领地名表示你所站的这个领地。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim remove [*|领地名] &lt;玩家&gt;</code>：从领地移除成员。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim ban [*|领地名] &lt;玩家&gt;</code> / <code style={{ color: '#fff' }}>/claim unban [*|领地名] &lt;玩家&gt;</code>：将玩家加入/移出领地黑名单。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim bans [领地名]</code>：打开黑名单 GUI。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim kick [*|领地名] &lt;玩家&gt;</code>：将玩家从你的领地物理驱离。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim owner [*|领地名] &lt;玩家&gt;</code>：转移领地主人到其他玩家。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim chat</code>：切换聊天模式（公共聊天或领地聊天）。
              </li>
            </ul>
          </Card>

          {/* 领地设置与 GUI */}
          <Card className="modern-card" style={{ marginBottom: '30px', background: 'rgba(40, 40, 40, 0.9)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: '12px' }}>领地设置与图形界面</Title>
            <ul style={{ color: '#cccccc', lineHeight: '1.8' }}>
              <li>
                <code style={{ color: '#fff' }}>/claim main &lt;领地名&gt;</code> / <code style={{ color: '#fff' }}>/claim settings [领地名]</code> / <code style={{ color: '#fff' }}>/claim members [领地名]</code> / <code style={{ color: '#fff' }}>/claim chunks [领地名]</code>：打开领地的主界面 / 设置 / 成员 / 区块管理。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim setname &lt;旧名&gt; &lt;新名&gt;</code>：更改领地名称。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim setdesc [领地名] &lt;新描述&gt;</code>：更改领地描述。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim merge &lt;领地A&gt; &lt;领地B&gt;</code>：将两个领地合并为一个。
              </li>
            </ul>
            <Paragraph style={{ color: '#999' }}>
              更多可调设置（如 <Tag color="default">建造</Tag>、<Tag color="default">破坏</Tag>、<Tag color="default">红石</Tag>、<Tag color="default">传送</Tag>、<Tag color="default">PVP</Tag> 等），详见官方「Claim settings」说明。
            </Paragraph>
          </Card>

          {/* 自动圈地与飞行 */}
          <Card className="modern-card" style={{ marginBottom: '30px', background: 'rgba(40, 40, 40, 0.9)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: '12px' }}>自动圈地与飞行</Title>
            <ul style={{ color: '#cccccc', lineHeight: '1.8' }}>
              <li>
                <code style={{ color: '#fff' }}>/claim autoclaim</code>：跨区块时自动圈地当前区块。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim autounclaim</code>：跨区块时自动取消圈地。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim fly</code> / <code style={{ color: '#fff' }}>/claim autofly</code>：开启/关闭领地飞行，或自动切换飞行。
              </li>
            </ul>
          </Card>

          {/* 区块管理 */}
          <Card className="modern-card" style={{ marginBottom: '30px', background: 'rgba(40, 40, 40, 0.9)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: '12px' }}>区块添加与删除</Title>
            <ul style={{ color: '#cccccc', lineHeight: '1.8' }}>
              <li>
                <code style={{ color: '#fff' }}>/claim addchunk &lt;领地名&gt;</code>：将你当前所站的区块加入到某个领地。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim delchunk &lt;领地名&gt; &lt;world;x;z&gt;</code>：从领地移除指定坐标的区块（使用 <code style={{ color: '#fff' }}>'世界名;X;Z'</code> 格式）。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim autoaddchunk &lt;领地名&gt;</code> / <code style={{ color: '#fff' }}>/claim autodelchunk &lt;领地名&gt;</code>：自动添加/移除跨区块时的区块。
              </li>
            </ul>
          </Card>

          {/* 交易与邀请 */}
          <Card className="modern-card" style={{ marginBottom: '30px', background: 'rgba(40, 40, 40, 0.9)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: '12px' }}>交易与邀请</Title>
            <ul style={{ color: '#cccccc', lineHeight: '1.8' }}>
              <li>
                <code style={{ color: '#fff' }}>/claim sell &lt;领地名&gt; &lt;价格&gt;</code>：将某个领地挂售。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim cancel &lt;领地名&gt; &lt;价格&gt;</code>：取消领地售卖。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim buy</code>：购买你所站的、正在出售的领地。
              </li>
              <li>
                <code style={{ color: '#fff' }}>/claim accept &lt;玩家&gt;</code> / <code style={{ color: '#fff' }}>/claim deny &lt;玩家&gt;</code> / <code style={{ color: '#fff' }}>/claim cancelinv &lt;玩家&gt;</code>：接受/拒绝/取消对方的领地邀请。
              </li>
            </ul>
          </Card>

          {/* 注意事项与参考 */}
          <Card className="modern-card" style={{ background: 'rgba(40, 40, 40, 0.9)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <Title level={2} style={{ color: '#ffffff', marginBottom: '12px' }}>注意事项</Title>
            <ul style={{ color: '#cccccc', lineHeight: '1.8' }}>
              <li>不同玩家或世界可能有不同的权限与限制（最大领地数量、最大半径、飞行、传送延迟等）。</li>
              <li>某些设置由服务器管理员统一调整（例如是否允许 PVP、爆炸、红石影响等）。</li>
              <li>若领地指令显示“没有权限”，请联系管理员或在主页查看相关说明。</li>
            </ul>
            <Divider style={{ borderColor: '#333' }} />
            <Paragraph style={{ color: '#999' }}>
              参考文档：
              <a href="https://xyness.gitbook.io/simpleclaimsystem/commands/player-commands" target="_blank" rel="noopener noreferrer" style={{ color: '#9ad' }}>Player commands</a>
              ，
              <a href="https://xyness.gitbook.io/simpleclaimsystem/permissions/commands" target="_blank" rel="noopener noreferrer" style={{ color: '#9ad' }}>Permissions</a>
              ，
              <a href="https://xyness.gitbook.io/simpleclaimsystem/configuration/claim-settings" target="_blank" rel="noopener noreferrer" style={{ color: '#9ad' }}>Claim settings</a>
              。
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Claims;