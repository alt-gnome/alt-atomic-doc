import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'

export const nav = (): DefaultTheme.NavItem[] => [{ text: 'Главная', link: '/' }]

export const ru = defineConfigWithTheme<DefaultTheme.Config>({
  lang: 'ru-RU',
  description: 'Атомарный облачный дистрибутив на базе новейших технологий',
  themeConfig: {
    nav: nav()
  }
})
