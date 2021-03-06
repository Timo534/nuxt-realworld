export default {
  router: {
    linkExactActiveClass: 'active',
    extendRoutes(routes, resolve) {
      routes.splice(0)
      routes.push({
        path: '',
        component: resolve(__dirname, 'pages/'),
        children: [
          {
            name: 'home',
            path: '',
            component: resolve(__dirname, 'pages/home/')
          },
          {
            name: 'login',
            path: '/login',
            component: resolve(__dirname, 'pages/login/')
          },
          {
            name: 'register',
            path: '/register',
            component: resolve(__dirname, 'pages/login/')
          },
          {
            name: 'profile',
            path: '/profile/:username',
            component: resolve(__dirname, 'pages/profile/')
          },
          {
            name: 'settings',
            path: '/settings',
            component: resolve(__dirname, 'pages/settings/')
          },
          {
            name: 'editor',
            path: '/editor',
            component: resolve(__dirname, 'pages/editor/')
          },
          {
            name: 'article',
            path: '/article',
            component: resolve(__dirname, 'pages/article/')
          }
        ]
      })
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
}

// TOKEN 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