import path from 'path'

export default {
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/services',
        component: 'src/containers/Services',
      },
      {
        path: '/contact',
        component: 'src/containers/Contact',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts: [
            { id: 1, title: 'First Post', body: 'This is the first post' },
            { id: 2, title: 'Second Post', body: 'This is the second post' }
          ]
        }),
        children: [
          {
            path: '/post/:id',
            component: 'src/containers/Post',
          }
        ]
      }
    ]
  },
  plugins: [
    'react-static-plugin-reach-router',
    'react-static-plugin-sitemap',
  ],
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}
