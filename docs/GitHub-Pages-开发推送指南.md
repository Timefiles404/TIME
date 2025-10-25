# GitHub Pages 开发与推送指南

适用目录：`server-website`（本站点源码根目录）
目标发布地址：`https://Timefiles404.github.io/TIME/`

## 一、本地开发预览
1. 进入项目目录：
   - `cd "D:\BaiduNetdiskDownload\Hyper 生存1.21.4(6.17)\Hyper 生存\server-website"`
2. 启动开发服务器：
   - `npm start`
3. 编辑源码并在浏览器预览，满意后进行提交与推送。

备注：本地开发不需要设置 `PUBLIC_URL`，仅在生产构建或 GitHub Actions 中使用。

## 二、提交与推送到 GitHub
1. 暂存并提交：
   - `git add -A`
   - `git commit -m "feat: 更新页面内容"`
2. 如需走本地代理（端口要询问）：
   - 设置代理：
     - `git config http.proxy http://127.0.0.1:？`
     - `git config https.proxy http://127.0.0.1:？`
   - 推送：
     - `git push`
   - 推送后可清理本仓库代理（可选）：
     - `git config --unset http.proxy`
     - `git config --unset https.proxy`

推送到 `main` 后，GitHub Actions 会自动构建并发布到 Pages，无需本地手动编译。

## 三、自动部署（GitHub Actions）
- 已配置工作流文件：`/.github/workflows/deploy.yml`
- 行为：
  - 使用 Node.js 20 安装依赖并构建
  - 构建时注入 `PUBLIC_URL=/TIME`
  - 复制 `build/index.html` 为 `build/404.html` 用于 SPA 刷新回退
  - 上传制品并发布到 GitHub Pages
- 验证：
  - 工作流完成后访问 `https://Timefiles404.github.io/TIME/`

## 四、本地生产构建与预览（可选）
用于发布前验证资源前缀与路由行为。
1. 在 PowerShell 会话设置：
   - `$env:PUBLIC_URL="/TIME"`
2. 构建：
   - `npm run build`
3. 预览构建产物：
   - `npx serve -s build -l 5000`
4. 打开：
   - `http://localhost:5000/TIME/`

## 五、常见问题与修复
- 刷新 404 或路径错乱：
  - 已通过复制 `index.html` 为 `404.html` 解决；若仍异常，检查是否正确使用 `PUBLIC_URL=/TIME`。
  - 如果站内导航解析到根（如变成 `https://Timefiles404.github.io/claims`），在根路由使用：
    - `<BrowserRouter basename={process.env.PUBLIC_URL || '/'}>`
- 构建失败：
  - 检查依赖安装是否成功：`npm ci`
  - 查看 Actions 日志，定位失败步骤（Install / Build / Deploy）
- Pages 没有发布权限：
  - 在仓库 `Settings → Pages` 确认 Source 为 "GitHub Actions"
- 缓存导致老版本：
  - 本地浏览器强制刷新或清理缓存；Actions 每次会生成新的发布内容

## 六、快速命令清单
- 开发：`npm start`
- 提交：`git add -A && git commit -m "feat: 更新页面内容"`
- 代理推送：
  - `git config http.proxy http://127.0.0.1:13537`
  - `git config https.proxy http://127.0.0.1:13537`
  - `git push`
- 清理代理：
  - `git config --unset http.proxy`
  - `git config --unset https.proxy`
- 生产构建本地验证：
  - `$env:PUBLIC_URL="/TIME"`
  - `npm run build`
  - `npx serve -s build -l 5000`
  - 打开 `http://localhost:5000/TIME/`

## 七、发布后验证
- 打开：`https://Timefiles404.github.io/TIME/`
- 测试站内导航与页面刷新（包括 `/claims`、`/gallery` 等）
- 若异常，记录浏览器地址栏完整 URL 与控制台报错并回到上面的常见问题处理。