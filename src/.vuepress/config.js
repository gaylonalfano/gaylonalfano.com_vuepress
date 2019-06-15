module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    // logo: '/public/logo.png',
    // lastUpdated: true,
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Nested1',
        link: '/nested1/'
      },
      {
        text: 'Nested2',
        link: '/nested2/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Sidebar',
        link: '/sidebar/'
      },
      {
        text: 'Languages',
        items: [{
          text: '中文',
          link: '/language/chinese'
        }]
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
    ],
    // sidebar: {
    //   '/nested1/': [
    //     '',
    //     'one',
    //     'two'
    //   ],

    //   '/nested2/': [
    //     '',
    //     'three',
    //     'four'
    //   ],

    //   // fallback
    //   '/': [
    //     '',
    //     'guide',
    //     'sidebar'
    //   ]
    // },
    sidebar: [{
        title: 'Sidebar Group1',
        children: [
          '/',
          '/guide/',
          '/sidebar/',
        ]
      },
      '/',
      '/guide/',
      ['/sidebar/', 'Explicit link text']
    ],
    sidebarDepth: 2,
    displayAllHeaders: true,
    // activeHeaderLinks: false // Default: true
  },
  footer: {
    contact: [{
        type: 'github',
        link: 'https://github.com/gaylonalfano',
      },
      {
        type: 'twitter',
        link: 'https://twitter.com/gaylonalfano',
      }
    ],
  },
}