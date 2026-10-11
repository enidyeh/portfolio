import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// aboutenid — 个人网站。独立站点：固定端口，避免与暗盒(5173)/域见(5273)冲突。
//
// 部署：GitHub Pages 项目页 → https://enidyeh.github.io/portfolio/
//   · 站点不在域名根目录，构建产物必须挂在 /portfolio/ 下，所以 build 时 base = '/portfolio/'。
//   · dev 仍然是 '/'，本地地址不变（localhost:5373）。
//   · preview 跟着 build 走（也是 /portfolio/），预览地址 http://localhost:5374/portfolio/。
//   · 换托管商（Vercel / Netlify 等挂在根域名下）时用环境变量覆盖：
//       VITE_BASE=/ npm run build
//   · 代码里指向 public/ 的路径一律用 `src/lib/base.ts` 的 asset() 拼，不要写死 '/xxx.webp'。
const base = process.env.VITE_BASE ?? '/portfolio/'

export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? base : '/',
  plugins: [react()],
  server: { port: 5373 },
  preview: { port: 5374 },
}))
