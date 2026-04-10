---
title: 域名免费托管到 Cloudflare
date: 2026-04-11 01:05:56
tags: 网站
---

把你的**域名免费托管到 Cloudflare**，主要指的是将域名的 **DNS 解析（Nameservers）切换到 Cloudflare**，这样你就能免费使用 Cloudflare 的全球 CDN、免费 SSL 证书（Universal SSL）、DDoS 防护、DNS 管理等功能。Cloudflare 的 **Free 计划** 完全支持这些，且可以托管无限个域名。

**注意**：这不是把域名“转移注册商”（transfer），而是只更改 DNS 托管（Name Servers）。你的域名续费仍在原注册商（如 Namesilo、Namecheap、GoDaddy 等）处理。除非你想把域名完全转到 Cloudflare Registrar（也支持低价/免费某些功能，但不是必须）。

### 完整步骤（2026 年最新流程，基本不变）

1. **注册/登录 Cloudflare 账号**  
   打开 [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)（或直接登录）。  
   用邮箱注册即可（推荐验证邮箱）。支持 Google/Apple 快捷登录。  
   注册后进入仪表盘（Dashboard）。

2. **添加你的域名到 Cloudflare**  
   - 在仪表盘首页，点击 **“添加站点”**（Add a site / Add domain）或左侧菜单 **Domains > Add a domain**。  
   - 输入你的**根域名**（例如：example.com，不要加 www 或 http://）。  
   - 点击 **Continue**（继续）。  
   - Cloudflare 会自动扫描你当前的 DNS 记录（可能需要几秒到几十秒）。你可以审查记录，如果有问题可以稍后手动调整。  
   - **选择计划**：直接选最下面的 **Free（免费）** 计划，点击继续。  
   - Cloudflare 会给你分配 **两个专属的 Nameservers**（名称服务器），类似这样：  
     - `ns1.cloudflare.com`  
     - `ns2.cloudflare.com`  
     （每个域名分配的可能不同，会显示具体两个地址，比如 `abby.ns.cloudflare.com` 和 `luke.ns.cloudflare.com`）。  
     复制这两个 Nameservers。

3. **在你的域名注册商处修改 Nameservers**  
   登录你购买域名的注册商后台（例如 Namecheap、Namesilo、阿里云、GoDaddy 等）。  
   - 找到域名管理 → **Nameservers**（或 DNS 设置、自定义名称服务器）。  
   - 选择 **Custom Nameservers**（自定义名称服务器）。  
   - 删除原来的 Nameservers，添加 Cloudflare 提供的两个。  
   - 保存更改。  

   **提示**：不同注册商界面略有差异，搜索“[你的注册商] 修改 nameserver”即可找到具体教程。大多数支持立即保存。

4. **等待激活与验证**  
   - 返回 Cloudflare 仪表盘，点击 **“我已更新名称服务器”** 或 **Check**（检查）。  
   - Nameserver 更改在全球传播需要时间，通常 **5 分钟到 48 小时**（最常见 1-24 小时）。  
   - Cloudflare 会显示状态，从 “Pending” 变成 **Active**（激活）并出现绿色对勾。  
   - 激活后，你就可以在 Cloudflare 的 **DNS** 标签页管理所有解析记录了（A 记录、CNAME、TXT 等）。

5. **开启推荐功能（免费）**  
   - **SSL/TLS**：默认开启 **Full** 或 **Flexible**，推荐设为 **Full (strict)** 以获得免费的边缘 SSL 证书。  
   - **Always Use HTTPS**：在 SSL/TLS → Edge Certificates 中开启，强制 HTTPS。  
   - **Proxy（橙色云朵）**：对 A/CNAME 记录开启 Proxy（橙云），即可使用 Cloudflare CDN 加速和隐藏真实 IP。  
   - **自动 HTTPS 重写** 等保持默认即可。

### 常见注意事项
- **传播时间**：改 Nameservers 后，旧 DNS 缓存可能导致部分地区暂时无法访问，耐心等待或用 `dig` / `nslookup` 检查。
- **原有 DNS 记录**：添加时 Cloudflare 会尽量导入，但建议检查并补充（如 MX 邮箱记录、TXT 验证等）。
- **如果你的域名是免费域名**（如 .us.kg、.cloudns.be 等）：流程完全一样，很多免费域名项目都专门支持 Cloudflare 托管。
- **Cloudflare Pages / Workers 自定义域名**：如果你用 Cloudflare Pages 托管静态网站，在 Pages 项目 → Custom domains 添加你的域名即可（域名必须已托管在 Cloudflare DNS）。
- **不想要转移域名**：只需改 Nameservers 即可。想完全转移到 Cloudflare Registrar 可在仪表盘 **Transfer Domains** 操作，但不是免费托管的必须步骤。

### 优势（免费计划）
- 全球任意播 CDN 加速
- 免费无限 SSL 证书（15 年有效期自动续）
- DDoS 防护
- 免费 DNS 管理（超快）
- Email 路由/转发（部分可用）

如果在操作中卡住（例如具体注册商界面不同、Nameservers 不生效），可以直接去 Cloudflare 官方文档搜索 “Add a site” 也有中文版。
