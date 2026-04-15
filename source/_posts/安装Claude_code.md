---
title: 快速安装并上手Claude code CLI
date: 2026-04-15 22:36:56
tags: Vibe Coding
---

### 前置要求

#### 安装 Node.js

CC Switch 管理的 CLI 工具（Claude Code、Codex、Gemini CLI）需要 Node.js 环境。

**推荐版本**：Node.js 18 LTS 或更高版本

#### Windows

1. 访问 [Node.js 官网](https://nodejs.org/)

2. 下载 LTS 版本安装包（不清楚的上B站搜，找播放量高的就行，建议不要太低版本）

3. 运行安装程序，按提示完成安装

4. 验证安装：

 ```bash
 node --version
 npm --version
 ```

### 安装 Claude code CLI

1. 点击 `win`，输入 `cmd`，使用管理员权限打开终端

<img src="https://cdn.jsdmirror.com/gh/yanhuidong/my_images/img/2026-04-15_22-01-08.jpg"/>

在终端输入以下命令（选一条）下载Claude code CLI，没有报错说明下载成功

```bash
# 官方网站下载（需要梯子）
npm install -g @anthropic-ai/claude-code

# 国内用户如下载慢，使用镜像源
npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com
```

下载完成后输入 `claude` ，如果出现类似内容，说明下载已成功（不完全一样也没有关系，因为还没有配置功能）

![](https://cdn.jsdmirror.com/gh/yanhuidong/my_images/img/2026-04-15_22-07-16.jpg)

### 安装cc-switch

1. 访问 [Releases 页面](https://github.com/farion1231/cc-switch/releases)
2. 下载 `CC-Switch-v{版本号}-Windows.msi`
3. 双击运行安装程序
4. 按提示完成安装

#### 验证安装

安装完成后，启动 CC Switch：

1. 应用窗口正常显示
2. 系统托盘出现 CC Switch 图标

### 快速上手

首次使用 `cc-switch`（以下简写为 ccs），如果在此之前已有codex或者cc的配置，那么则点击导入配置。没有的话则点击添加供应商，可选官方或自定义三方（cc也预埋了部分三方中转），官方则是直接通过网页登录自动跳转，而第三方就是输入 `api url + api key` 保存即可，而且支持配置多个保存，后续使用时一键切换。

1. 顶部选择 `Claude`，并点击界面中间的**添加供应商**或者右上角加号

![](https://cdn.jsdmirror.com/gh/yanhuidong/my_images/img/2026-04-15_22-16-43.jpg)

2. 选择对应的API供应商，我这里使用 `Minimax` 为例

![](https://cdn.jsdmirror.com/gh/yanhuidong/my_images/img/2026-04-15_22-20-52.jpg)

3. 在API Key 这行输入自己的官方API Key

![](https://cdn.jsdmirror.com/gh/yanhuidong/my_images/img/2026-04-15_22-22-53.jpg)

4. 将模型名称全部改为 `Minimax-M2.7` 而不是 `Minimax-M2.5`

![](https://cdn.jsdmirror.com/gh/yanhuidong/my_images/img/2026-04-15_22-24-11.jpg)

5. 点击添加按钮，此时开始界面就出现了刚才添加的供应商，点击启用

![](https://cdn.jsdmirror.com/gh/yanhuidong/my_images/img/2026-04-15_22-27-50.jpg)

此时所有的基本配置都已经完成了，现在可以在终端输入 `claude` 打开编程工具，此时界面属于初始化界面，会需要你选择主题和确认信任的文件夹（英文看不懂可以复制给AI翻译），使用 `↑` `↓`按键移动选项， `Enter` 确认，全部配置完成之后就会进入我一开始给出的那张图片的内容，然后就可以通过输入文字开始AI编程了