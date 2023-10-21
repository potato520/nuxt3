// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // 暂时关闭渲染
  ssr: true,
  // 开启调试工具
  devtools: { enabled: true },
  // 安装的模块
  modules:['@vant/nuxt'],

  // 移动端适配
  postcss: {
    plugins: {
      'postcss-px-to-viewport': {
        viewportWidth: 375,
      },
    },
  },
})
