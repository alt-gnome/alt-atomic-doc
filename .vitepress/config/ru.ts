import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'
import { packages } from '../../package-lock.json'

export const nav = (): DefaultTheme.NavItem[] => [{ text: 'Главная', link: '/' }]

export const ru = defineConfigWithTheme<DefaultTheme.Config>({
  lang: 'ru-RU',
  description: 'Атомарный облачный дистрибутив на базе новейших технологий',
  themeConfig: {
    nav: nav(),
    footer: {
      message: 'Содержание доступно <a href="/licence.html">по лицензии MIT</a>',
      copyright: `
                  ${new Date().getFullYear()} ALT Atomic Wiki,
                  разработано на платформе <a href="//vitepress.dev/">VitePress ${packages['node_modules/vitepress'].version}</a>
                `
    }
  }
})
