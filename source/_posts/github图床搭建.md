---
title: GitHub 作为个人免费图床
date: 2026-04-11 01:11:56
tags: 网站
---

以下是使用 **GitHub 作为个人免费图床** 的完整保姆级教程（2026年最新可用方案）。这种方式完全免费、稳定（图片归你自己仓库所有）、支持版本管理，但**中国大陆访问原生 raw.githubusercontent.com 速度较慢**，必须搭配 **jsDelivr CDN 加速** 使用。

### 优点
- 免费、无限存储（实际受仓库大小限制，个人够用）
- 图片在你自己的 GitHub 仓库里，可随时管理、删除、版本回滚
- 支持 PicGo 一键上传，适合 Markdown、博客、Typora、VS Code 等
- 通过 jsDelivr 加速后，国内访问速度明显提升

### 缺点
- GitHub 严格来说不鼓励纯当图床，大量上传可能有风险（但个人小量使用基本没事）
- 原生链接在国内偶尔抽风，必须用 CDN 加速
- 图片链接较长

### 第一步：创建 GitHub 仓库（存储图片的地方）
1. 登录你的 GitHub 账号（ https://github.com ）。
2. 点击右上角 **+** → **New repository**。
3. 填写信息：
   - Repository name：随便起一个，例如 `img`、`images`、`blog-images`（建议简短）。
   - Description：可选，填“个人图床”即可。
   - Public（必须公开，否则 jsDelivr 无法访问）。
   - 勾选 **Add a README file**（可选）。
4. 点击 **Create repository** 创建完成。

建议在仓库根目录或新建一个文件夹（如 `img/`）来存放图片，便于管理。

### 第二步：生成 GitHub Personal Access Token（访问权限）
1. 点击右上角头像 → **Settings**（设置）。
2. 左侧菜单找到 **Developer settings** → **Personal access tokens** → **Tokens (classic)**。
3. 点击 **Generate new token (classic)**。
4. 配置：
   - Note：随便填（如 “picgo-image-bed”）。
   - Expiration：选 **No expiration**（永不过期，方便）。
   - Scopes：只勾选 **repo**（Full control of private repositories）。
5. 点击 **Generate token**，**立即复制** 生成的 token（只显示一次，务必保存好！）。

### 第三步：安装并配置 PicGo（推荐的一键上传工具）
PicGo 是最方便的桌面工具，支持 Windows / macOS / Linux。

1. 下载 PicGo（官网或 GitHub Releases）：https://github.com/Molunerfinn/PicGo/releases  
   下载最新版安装（推荐 Windows 用户下载 .exe）。

2. 打开 PicGo → 左侧 **图床设置** → 找到 **GitHub** 并点击。

3. 填写以下配置（关键参数）：
   - **图床配置名**：随便填（如 “MyGitHub”）
   - **设定仓库名**：格式为 `你的用户名/仓库名`，例如 `name/img`
   - **设定分支名**：`main`（新仓库通常是 main，老仓库可能是 master）
   - **设定 Token**：粘贴第二步生成的 token
   - **设定存储路径**：可选，建议填 `img/`（图片会存到 img 文件夹下）或留空（根目录）
   - **设定自定义域名**（最重要，加速用）：  
     推荐使用以下加速域名（国内友好度较高，按优先级排序）：
     - `https://cdn.jsdmirror.com/gh/你的用户名/仓库名` （公益加速，常用于国内）
     - `https://cdn.jsdelivr.net/gh/你的用户名/仓库名`
     - `https://fastly.jsdelivr.net/gh/你的用户名/仓库名`
     - 其他备选：`https://testingcf.jsdelivr.net/gh/...` 或 `https://gcore.jsdelivr.net/gh/...`

4. 点击 **保存**，然后切换到 **PicGo 设置** → 把 GitHub 图床设为**默认图床**。

5. 测试上传：
   - 在 PicGo 主界面拖拽一张图片，或点击上传区选择文件。
   - 上传成功后，底部会显示 Markdown 格式的图片链接（例如 `![image](https://jsd.cdn.zzko.cn/gh/用户名/仓库名/img/xxx.jpg)`）。
   - 复制链接，在浏览器打开测试是否能正常显示（国内访问应较快）。

### 第四步：日常使用方式
- **Typora / Obsidian / VS Code**：在设置中把图片上传服务指向 PicGo（端口通常是 36677），粘贴图片时自动上传到 GitHub 并替换为链接。
- **手动上传**：直接在 GitHub 仓库网页上拖拽图片上传，然后手动构造链接（不推荐，麻烦）。
- **链接格式示例**（使用 jsDelivr）：
  
  ```
  https://cdn.jsdmirror.com/gh/用户名/仓库名/图片路径/图片名.jpg
  ```
  或 Markdown：
  ```
  ![描述](https://cdn.jsdmirror.com/gh/用户名/仓库名/img/test.jpg)
  ```

### 中国大陆访问优化建议
- 优先用 `cdn.jsdmirror.com` 这个公益加速域名，国内速度较好。
- 如果某个加速域名偶尔失效，可切换其他 jsDelivr 子域名（fastly / testingcf / gcore 等）。
- 极端情况下，可配合浏览器插件或修改 hosts 文件进一步加速 GitHub 本身（但 jsDelivr 已能解决大部分图片加载问题）。
- 图片大小建议控制在合理范围内（单张几 MB 即可），避免仓库膨胀。

### 注意事项
- GitHub 仓库大小有软限制（单个仓库推荐别超过几 GB），图片过多时可新建多个仓库。
- 重要图片建议本地也备份一份（PicGo 支持同时备份到本地）。
- 如果 jsDelivr 被污染或不稳定，可考虑切换到其他方案（如腾讯云 COS / 阿里云 OSS 有免费额度，国内速度更快）。
- PicGo 还有插件系统，可扩展更多功能（如自动压缩、水印等）。

这样配置完成后，你就拥有了一个属于自己的免费 GitHub 图床，配合 PicGo 使用非常丝滑，适合写博客、发帖、记笔记等场景。
