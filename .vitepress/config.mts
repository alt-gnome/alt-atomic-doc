import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Alt Atomic",
  description: "Test",
  base: '/atomic-doc/',

  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SkyWar-design/alt-atomic' }
    ]
  }
})
