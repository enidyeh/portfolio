/**
 * 首屏人物材质：**HEVC with alpha 的 .mov**（`public/hero-figure.mov`，506×900 / 20fps / 4.05s / 1.14 MB）。
 *
 * ⚠️ 这份素材是**去白边重制过的**，不要直接用 `10月9日.mov` 重新导。
 *
 * 原始 AI 素材沿轮廓带一圈白色轮廓光：alpha 渐变带里的 RGB 一律是 245–251，
 * 不管下面是头发还是黑裤子（实测全片平均「轮廓边缘近白率」23.6%，边缘亮度比内部高 15–51）。
 * 浏览器合成出来就是一圈跟着人物一起动的白色剪影，也就是「像被剪影切割」的那个现象。
 *
 * 修法是**只重写 alpha 渐变带（a < 250）的 RGB**：从「距轮廓 >20px 的深处」取色向外铺。
 * 一定要限制在渐变带 —— 早期版本把内层也一起重写，人物内部被刷成大片平色，
 * 编码器一压就是马赛克，比白边还难看。
 *
 * 重制流程（工具在 /tmp，重启会没，需要时重建）：
 *   1) swift /tmp/vidtool/prores-alpha.swift "10月9日.mov" figure-prores.mov 900
 *      —— ffmpeg 看不到 Apple HEVC 的 alpha 层（只报 yuv420p），必须先过一道 ProRes 4444
 *   2) ffmpeg -i figure-prores.mov -vf "fps=20" -pix_fmt rgba /tmp/frames/f%03d.png
 *   3) node /tmp/imgen/defringe.js        —— 去白边，输出 /tmp/frames-clean
 *   4) ffmpeg -framerate 20 -i /tmp/frames-clean/f%03d.png \
 *        -c:v prores_ks -profile:v 4444 -pix_fmt yuva444p10le -an clean-prores.mov
 *   5) swift /tmp/vidtool/encode-alpha.swift clean-prores.mov hero-figure.mov 2600000
 *      —— 转 HEVC with alpha，关闭 B 帧、关键帧间隔 30
 *
 * ⚠️ 动画 WebP 试过，不划算：单层 RGBA 确实没有图层同步问题，但保留内部细节后
 * 20fps 要 2.8 MB（视频只要 1.14 MB），而且 libwebp 的逐帧矩形会带来块状观感。
 */
import { asset } from '../lib/base'

export const useTransparentFigure = true

/**
 * 透明底素材。浏览器按顺序取第一个「类型支持且能加载成功」的。
 *
 * ⚠️ type 必须写 `video/mp4`：Chrome 的 `canPlayType('video/mp4; codecs="hvc1"')` 返回 ""（拒绝），
 * 连带 `source` 都不会去加载。
 * ⚠️ 没有的文件不要写进来 —— Chrome 会因为 type 字符串就认下来，文件 404 也不会回退到下一个。
 */
export const transparentFigureSources = [
  { src: asset('hero-figure.mov'), type: 'video/mp4' },
  // 拿不到透明底素材时的兜底：旧的白底视频 + multiply，效果差但人物还在，不会是一块空白。
  { src: asset('avatar.mp4'), type: 'video/mp4' },
] as const
