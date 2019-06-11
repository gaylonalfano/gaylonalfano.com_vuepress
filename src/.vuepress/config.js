module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    // logo: '/public/logo.png',
    sidebar: [
      '/',
      '/guide/',
      ['/test/', 'Explicit link text']
    ],
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'External',
        link: 'https://google.com'
      },
      {
        text: 'Languages',
        items: [{
          text: 'Chinese',
          link: '/language/chinese'
        }]
      },
      {
        text: 'Test',
        link: '/test/'
      },
      {
        text: 'Sub Groups',
        items: [{
          text: 'Group1',
          items: [{
            text: 'subitem1',
            link: '/subgroup/group1/subitem1'
          }]
        }]
      }
    ]
  },
  footer: {
    contact: [{
        type: 'github',
        link: 'https://github.com/gaylonalfano',
      },
      {
        type: 'twitter',
        link: 'https://twitter.com/gaylonalfano',
      },
    ],
  },
}