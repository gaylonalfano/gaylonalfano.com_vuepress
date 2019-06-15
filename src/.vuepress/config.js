module.exports = {
  title: 'Gaylon Alfano',
  description: 'My name is Gaylon Alfano.',
  themeConfig: {
    domain: 'https://www.gaylonalfano.com',
    // logo: '/public/logo.png',
    lastUpdated: true,
    docsDir: 'src',
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
        text: 'Learning',
        items: [{
            text: '中文',
            link: '/learning/chinese/'
          },
          {
            text: 'Programming',
            link: '/learning/programming/'
          }
        ]
      },
      {
        text: 'Learning',
        items: [{
          text: 'Programming',
          items: [{
            text: 'Python',
            link: '/learning/programming/python'
          }]
        }]
      }
    ],
    sidebar: {
      '/learning/programming/': [
        '',
        'python',
        'django-rest-framework'
      ],

      '/nested2/': [
        '',
        'three',
        'four'
      ],

      // fallback
      '/': [
        '',
        'guide',
        'sidebar'
      ]
    },
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