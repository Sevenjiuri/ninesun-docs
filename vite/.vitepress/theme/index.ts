// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import { inBrowser } from 'vitepress'
// 导入hooks
import useVisitData from '../../hooks/useVisitData'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    if (inBrowser) {
      // 路由加载完成，在加载页面组件后（在更新页面组件之前）调用。
      router.onAfterPageLoad = (to: string) => {
        // 调用统计访问接口hooks
        useVisitData()
      }
    }
  }
} satisfies Theme
