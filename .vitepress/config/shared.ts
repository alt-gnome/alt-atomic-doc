import { defineConfig } from 'vitepress'

export const shared = defineConfig({
  base: '',
  title: 'ALT Atomic',
  srcDir: './docs',
  themeConfig: {
    socialLinks: [{ icon: 'github', link: 'https://github.com/alt-gnome/alt-atomic-doc' }]
  }
})
