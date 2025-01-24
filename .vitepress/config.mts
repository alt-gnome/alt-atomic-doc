import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'

export const nav = (): DefaultTheme.NavItem[] => []

export default defineConfigWithTheme<DefaultTheme.Config>({
  title: 'ALT Atomic',
  description: 'Test',
  base: '/',
  themeConfig: {
    nav: [{ text: 'Главная', link: '/' }],
    socialLinks: [{ icon: 'github', link: 'https://github.com/alt-gnome/alt-atomic-doc' }]
  }
})
