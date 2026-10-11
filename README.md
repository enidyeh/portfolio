# aboutenid — 个人网站

ENID 的个人网站，定位 **AI Product Strategy × Global Growth**。
一个主站、两条职业路径（商业化与全球增长 / 产品策略与 AI）、一个创业项目入口。

与暗盒 UNSEEN、域见 REALMVIEW 是**互相独立的项目**：独立代码、独立设计系统、独立端口。

## 技术栈与命令

Vite + React 19 + TypeScript，路由用 react-router。

```bash
npm install
npm run dev      # http://localhost:5373（固定端口，避免与 5173 / 5273 冲突）
npm run build    # tsc -b && vite build → dist/
npm run lint     # eslint .
npm run preview  # 预览生产构建，端口 5374
```

构建产物是纯静态文件，可部署到任意静态托管（Vercel / Cloudflare Pages / Netlify）。
因为是 SPA，托管侧需要配置「找不到时回退到 `index.html`」（SPA fallback），刷新子路由才不会 404。

## 部署

线上地址：**https://enidyeh.github.io/portfolio/**（仓库 `enidyeh/portfolio`）

推送到 `main` 即自动发布：`.github/workflows/deploy.yml` 跑 `npm ci` → `npm run lint`
→ `npm run build`，把 `dist/` 交给 GitHub Pages。

### 三处要跟着走的地方

站点**不在域名根目录**，而是挂在 `/portfolio/` 子路径下，所以：

1. `vite.config.ts` 的 `base`：build / preview 时是 `/portfolio/`，dev 时是 `/`。
   换到根域名的托管（Vercel / Netlify / 自定义域名）时用 `VITE_BASE=/ npm run build`。
2. `src/lib/base.ts` 的 `asset()`：**代码里所有指向 `public/` 的路径都要包一层**，
   不要写死 `'/hero-bg.webp'`。CSS 里写不了 `BASE_URL`，所以首屏背景图是在
   `HeroBlock.tsx` 里拼好路径、写到 `--hero-image` 上的。
3. `src/lib/base.ts` 的 `routerBasename`：交给 `BrowserRouter`，让站内链接自动带前缀。

### 深链接

GitHub Pages 没有 SPA 重写，靠 `npm run build` 末尾的 `postbuild` 把 `index.html`
复制成 `404.html`：任何找不到的路径都会拿到这个壳，再由 react-router 按网址渲染。
所以 `https://enidyeh.github.io/portfolio/work/soho-t` 可以直接打开、可以直接刷新。

### 本地验证生产构建

```bash
npm run build     # 产物在 dist/，路径都带 /portfolio/
npm run preview   # http://localhost:5374/portfolio/
```

> 首次部署需要在仓库 **Settings → Pages → Build and deployment → Source** 选择
> **GitHub Actions**（只需设置一次）。

## 信息架构

| 路径 | 内容 |
| --- | --- |
| `/` | 首页（自上而下）：① HERO（英文主标题 / 中文定位句 / 对话框 + **常见问题** + 人物视频；手机端视频在最上方，播完收起） ② 精选项目（大展示 PHYGITAL BASE + 四张案例卡片） ③ 正在创造（四个项目竖排，方形配图） ④ **我工作过的公司**（logo 墙，logo 由本人提供，未提供时是虚线占位格） ⑤ 经历与背景（经历 + 教育时间线） |
| `/work` | 精选项目，按 `01 Product & AI`（只有 PHYGITAL BASE，整行 1×1 大卡）、`02 Commercial Growth`（其余四个，2×2）两条路径分组 |
| `/work/:slug` | 案例：问题 / 我的职责 / 关键决策与过程 / 结果 / 复盘 |
| `/venture` | 正在创造：REVERIE 异想集 / 暗盒 UNSEEN / 异想商店 / 域见 REALMVIEW（四个项目 2×2） |
| `/venture/:slug` | 项目：六个问题（Problem / Opportunity / Solution / Business Model / Validation / Next Milestone）+ 合作需求 |
| `/about` | 个人介绍：简介、简历（两套）、能力、经历、教育、联系 |
| `/about#resume` | 简历区块锚点（首页「下载简历」按钮指向这里） |
| `*` | 404 |

页头右上角的 **资料下载** 是一个浮窗（`components/DownloadMenu.tsx`），
把简历与项目资料收在一起，内容来自 `data/profile.ts` 的 `downloads`；
点击外部 / 按 Esc / 切换路由时自动关闭。
每一行右侧是一个图标按钮：有直链的用下载图标（带 `download` 属性，点击直接下载），
文件尚未上传的图标置灰并标「待上传」，没有直链的（如融资资料）用箭头引导到联系方式。

**数字分身**有两处入口，都复用 `components/AvatarConsole.tsx`，**各自独立保存会话**：

- 首页 HERO 内的输入框（`variant="inline"`：不自动聚焦）
  —— 2026-10-11 起**只留在首页**，子页面（/work、/venture、/about）不再放提问框；
  原来的三个跳转按钮（精选项目 / 正在创造 / 下载简历）也换成了一排
  **常见问题**（`ui.heroFaq`）：点一下等于问数字分身，不跳页，
  回答里带一个去精选项目 / 正在创造的入口
- 页头「资料下载」旁边的圆形按钮 `components/ChatDock.tsx`（`variant="dock"`：全站可用、带建议问题）

问答历史是**一叠可以左右翻的卡片**：一次只显示一组（问题 + 回答），最多留 5 组，
满了以后新的一组把最旧的一组顶掉（`MAX_PAIRS`）。

两者都是本地演示：输入问题（或点建议问题）后用关键词匹配 `data/avatar.ts` 里的预设回答，
并给出对应页面入口。**不调用任何模型、不发网络请求、不保存输入**，界面上标有「演示」。

首页 HERO 右侧是**人物视频**（`components/AvatarFigure.tsx`）：`public/avatar.mp4`
（已裁到人物、去掉水印，416×800，无音轨，静音循环自动播放）+ 封面帧 `avatar-poster.webp`。
它用 `filter: brightness(1.02)` + `mix-blend-mode: multiply` 把近白的视频背景混进页面底色，
使白底与页面同色、不出现矩形块；高度自动对齐左侧文字块的首行与末行。换素材只需替换这两个文件。

**手机端开屏**（`components/IntroSplash.tsx`）：≤ 760px 打开首页时，先全屏播放人物视频，
播完（或最多 5 秒兜底）渐隐 0.7s，随后正文淡入 0.8s。开屏期间锁定页面滚动。
桌面端**不渲染**开屏，保留原本的左右排版。

三类访问者各取所需：HR / 招聘经理看 **经历 + 简历**；产品负责人看 **案例的过程与决策**；
投资人 / 商业伙伴看 **正在创造** 里的六问与验证进度。

## 目录

```
src/
  App.tsx             路由与整体布局
  main.tsx            入口（挂 BrowserRouter）
  components/         SiteHeader / SiteFooter / DownloadMenu / ChatDock / AvatarConsole / AvatarFigure / WorkCard / VentureCard / Pending
  data/               全部文案与数据，改内容只改这里
    profile.ts        定位、简介、支点、社交、`downloads`（资料下载共用）
    works.ts          精选项目（3 个案例 + 两条路径）
    ventures.ts       正在创造（3 个项目 + 六个问题 + 融资入口）
    about.ts          能力方法论、经历、教育
    avatar.ts         数字分身的预设问答（关键词匹配，非真实 AI）
  pages/              各路由页面
  styles/
    tokens.css        设计令牌（颜色 / 字体 / 字号 / 间距 / 布局）
    site.css          布局与组件样式
```

## 设计系统（独立）

方向：档案 / 索引式排版。冷调纸底、墨色字、细线网格，祖母绿作为唯一信号色。

- 底色 `--paper`（冷调纸白），文字 `--ink`，细线 `--line` / `--rule`。
- 唯一信号色祖母绿 `--accent`，用于强调与主按钮；不复用暗盒的霓虹、域见的朱砂 / 靛蓝。
- 字体两族：等宽（英文标签与数字）、黑体（正文与标题）。刻意不使用宋体标题。
- 字号只允许五级：`--f-display / --f-title / --f-sub / --f-body / --f-meta`，窄屏在 `tokens.css` 统一降级。
- 移动优先，320 – 1440 无横向溢出；`prefers-reduced-motion` 已处理。

## ⚠️ 待填清单（上线前必须补齐）

站点里所有显示为「待填」的内容都是占位，**不要带着占位上线**。不编造公司与数据。

| 位置 | 待补内容 |
| --- | --- |
| `data/profile.ts` | 中文姓名；`headlineEn` / `statement` / `intro` / `pillars` 口径确认 |
| `data/profile.ts` | `downloads` 里各项是否保留、分组是否合适；“待上传”标记在文件放好后要删掉 |
| `public/` | `resume-commercial.pdf`、`resume-product.pdf`、`portfolio-overview.pdf`（即浮窗里标「待上传」的三项） |
| `data/works.ts` | 五个案例（PHYGITAL BASE / COMMON GROUND / SOHO-T / ANNAKIKI / Momo's Workshop）的正文内容：`problem` / `contribution` / `decisions` / `outcome` / `reflection` 全还是「待填」 |
| `data/works.ts` | ANNAKIKI、Momo's Workshop 的 `type` 仍待填（现在显示成「项目类型」） |
| `public/hero-room.jpg` | 已不再引用（首屏背景换成 `hero-bg.webp`），可删 |
| `data/ventures.ts` | REVERIE 异想集、异想商店的六问内容；暗盒的商业模式与下一步 |
| `data/about.ts` | 经历时间线、教育 / 交换经历 |
| `data/companies.ts` | 「我工作过的公司」的公司名 + logo 图片（现在 `companies` 是空数组，首页显示 6 个虚线占位格） |
| `data/avatar.ts` | 预设回答的文案、建议问题与关键词是否准确 |
| `public/avatar.mp4` + `avatar-poster.webp` | 替换成最终版的人物视频与封面帧（换文件即可，无需改代码） |
| `index.html` | `og:*` 与 `description` 换成正式定位；补 `og:image` |

### 关于案例的分类

`data/works.ts` 里各案例的 `track` 按 2026-10-11 用户指定的分组：

- `PHYGITAL BASE` → `01 Product & AI`（产品设计与项目管理）—— 首页「大展示」位（`featured: true`），
  在 `/work` 上也是整行铺开的 1×1 大卡；两个地方都不再出现在普通卡片网格里
- `COMMON GROUND` → `02 Commercial Growth`（AI 产品）
- `SOHO-T` → `02 Commercial Growth`（全球品牌增长）
- `ANNAKIKI` → `02 Commercial Growth`（项目类型待填）
- `Momo's Workshop` → `02 Commercial Growth`（美妆电商拓展海外市场）

这只是当前的分组，改 `track` 字段即可调整；`/work` 上的大卡是按
「该路径只有 1 个案例」自动生效的（`WorkPage` → `.grid--cases--single` + `WorkCard large`）。
若某个案例其实是「独立研究项目」，要在文案里明确标注，不要写成客户业绩。

卡片上的小标题来自案例自带的 `tags`（2026-10-11 由本人逐条指定）；没填 `tags` 的
（目前只有 PHYGITAL BASE）会回退成「类型 / 分类 / 角色」三个标签。

## 对外发布前必须做的事

1. **补齐全表**：把上面的「待填」全部替换为真实内容。
2. **核对定位口径**：`headlineEn` / `statement` / `intro` / `pillars` 是起草稿，需本人确认。
3. **替换演示地址**：`data/ventures.ts` 的 `liveUrl` 目前是本地地址（`localhost:5173`）。
4. **两份简历**：商业化版强调增长与商业结果，产品版强调用户问题与验证；不要只改标题。
   确认 PDF 内不含真实手机号等敏感信息。（现在浮窗与关于页都还在标「待上传」）
5. **不公开敏感信息**：融资与财务细节只在私下沟通，不写入公开页面。
6. **公开前再看一眼联系方式**：页脚与关于页现在直接展示 `enidyeh2002@gmail.com` / 微信 `ENIDYEAH`，
   公开仓库与公开站点都可被爬到；小红书已按本人要求撤下（`profile.social` 为空数组，加回来即可）。

## 演示与隐私边界

- 全站为静态展示，不收集任何用户数据，不发送网络请求，不使用 `localStorage`。
- 数字分身为本地预设问答：会话只存在当前页面内存，刷新即清空，不上传不保存。
- 创业项目的描述部分来自暗盒 / 域见自身的文档与 README（已确认口径）；
  未验证的部分一律标为「待填 / 假设」，不包装成已有业绩。
- 案例与经历数据不编造：未提供的部分一律用「待填」占位。
