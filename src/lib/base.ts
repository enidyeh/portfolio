// 部署前缀（Vite 的 BASE_URL）。
//
// 本地 dev 是 `/`，GitHub Pages 项目页是 `/portfolio/`（见 vite.config.ts 的 base）。
// public/ 里的资源在代码里不能写死成 `'/hero-bg.webp'` —— 打包后站点挂在
// `https://enidyeh.github.io/portfolio/` 下，写死的绝对路径会 404。
// 所有指向 public/ 的路径都要过一遍 `asset()`。

/** Vite 注入的部署前缀，一定以 `/` 结尾（本地是 `/`，Pages 是 `/portfolio/`）。 */
const base = import.meta.env.BASE_URL

/** 拼 public/ 资源的真实地址：`asset('hero-bg.webp')`。 */
export function asset(path: string): string {
  return `${base}${path.replace(/^\/+/, '')}`
}

/** react-router 的 basename：`/portfolio/` → `/portfolio`；本地 `/` → `''`。 */
export const routerBasename = base.replace(/\/+$/, '')
