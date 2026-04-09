---
title: Hello World 以及无文章时页面BUG
date: 2026-04-10 01:05:56
tags:
---

也是无敌了，我把这个AI生成后的项目自带的初始文章删了之后居然直接给我博客首页挂了，也是无敌了，用 CC里的`gpt-5.4`查了一下（有一说一，真牛逼），以下是原因

> 把所有文章删掉后，Hexo 根本没有生成首页 public/index.html，所以 hexo s 访问 / 时就返回 Cannot GET /。
>
> 你的站点里现在确实没有文章
> db.json:1 里能看到：
>
>  -Post: []
>
>  -Page: []
>
> 生成结果里也没有首页文件，我检查了 public/index.*，结果是 不存在。
>
> hexo generate 实际只生成了 3 个静态文件：
>
> css/style.css
>
> js/main.js
>
> image/avatar.jpg
>
> 根因在 Hexo 的首页生成逻辑
> node_modules/hexo-generator-index/lib/generator.js:14 调用了分页生成。
> 而 node_modules/hexo-pagination/lib/pagination.js:20 里：
> const total = perPage ? Math.ceil(length / perPage) : 1;
>
> 你的文章数 length = 0，所以 total = 0。
> 接着 pagination.js:59-66 的循环根本不会执行，因此不会生成根路径首页。
>
> 为什么删“原始文章”会触发这个问题
> 因为你的首页配置是文章列表首页：
>
> _config.yml:62
>
> yaml
> index_generator:
>   path: ''
>   per_page: 10
>   order_by: -date
> 这表示首页 / 依赖 “文章列表” 生成。
> 当文章一篇都没有时，这个版本的 Hexo / 分页插件 不会生成空首页。

以后更新内容的时候要记得用 `hexo clean` 清理一下缓存，然后用 `hexo s`  测试一下有没有问题，再上传，搞得今天熬了点小夜

顺带一提，以下是 `gpt-5.4` 在这次纠错中使用的方法，可以拿来学习借鉴

> 具体步骤                                                                                                                 
>   1. 先看站点配置                                                                                                            读了 _config.yml:62，确认你的首页是靠
>     index_generator 生成的，也就是根路径 /
>     默认显示文章列表。
>   2. 再看当前内容源
>     我检查了 source 目录，发现几乎只剩
>     source/image/avatar.jpg，没有文章和页面源文件。
>   3. 再看 Hexo 的数据库结果
>     读了 db.json:1，确认 Hexo 当前识别到：
>
>     - Post: []
>     - Page: []
>
>   这一步很关键，因为它说明不是“没渲染出来”，而是
>   Hexo 根本没有可用文章/页面数据。
>   4. 直接跑生成命令验证
>     我执行了：
>     npx hexo generate --debug
>   4. 结果只生成了 3 个文件：
>
>     - js/main.js
>     - css/style.css
>     - image/avatar.jpg
>
>   没有生成 public/index.html。
>   5. 检查生成目录
>     我专门查了 public/index.*，确认确实不存在。
>   6. 本地请求根路径复现
>     我启动了本地服务后请求：
>     curl -I http://127.0.0.1:4000/
>   6. 返回的是 404 Not Found，这就和浏览器里的
>     Cannot GET / 对上了。
>   7. 最后看 Hexo 插件源码找根因
>     我继续读了两个源码文件：
>
>     - node_modules/hexo-generator-index/lib/generator.js:14
>     - node_modules/hexo-pagination/lib/pagination.js:20
>
>   发现首页生成依赖分页逻辑，而分页总页数是这样算的：
>   const total = perPage ? Math.ceil(length / perPage) : 1;
>   当文章数 length = 0 时，total = 0，后面的生成循环
>   根本不会跑，于是首页 / 就不会被生成。
>
> ---
>   我这次定位问题的核心方法其实就是 4 步：
>
>   1. 看配置：首页靠什么生成
>   2. 看数据：Hexo 实际识别到了什么内容
>   3. 看产物：有没有生成 public/index.*
>   4. 看源码：为什么在“0 篇文章”时不生成首页
>