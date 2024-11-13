// .vuepress/config.js
module.exports = {
  title: 'mooc-ui-study',
  base: '/mooc-ui-study/',
  themeConfig: {
    nav: [
      {text: 'Home',link: '/'},
      {text: 'Github',link: 'https://github.com/liu464847593/mooc-ui-study.git'},
      {text: 'Npm',link: 'https://www.npmjs.com/package/mooc-ui-study'},
    ],
    sidebar: [
      '/',
      '/componentDocs/card'
    ]
  }
}
