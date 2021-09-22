const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://vuepress.vuejs.org/guide/deploy.html#github-pages
   */
  base: '/vuepress/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vue + Firestore',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Documenta rápido',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      { text: 'Vue.js', link: '/vue/' },
      { text: 'CRUD', link: '/crud/' },
      { text: 'Vuex', link: '/vuex/' },
      { text: 'Storage', link: '/storage/' },
      { text: 'Auth', link: '/auth/' },
      { text: 'Canal Youtube', link: 'https://youtu.be/dZ59MDPcrqo'}
    ],
    sidebar: 'auto'
  },
 
}
