// docs/.vitepress/config.js
import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'My VitePress Site',
  description: 'A site created with VitePress for documenting hobbies',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Gaming', link: '/gaming/' },
      { text: 'Football', link: '/football/' },
      { text: 'Photography', link: '/photography/' },
    ],
    sidebar: {
      '/gaming/': [
        {
          text: 'Gaming',
          items: [
            { text: 'Introduction', link: '/gaming/' },
            { text: 'My Favorite Games', link: '/gaming/favorite-games' },
          ]
        }
      ],
      '/football/': [
        {
          text: 'Football',
          items: [
            { text: 'Overview', link: '/football/' },
            { text: 'Teams and Players', link: '/football/teams' },
          ]
        }
      ],
      '/photography/': [
        {
          text: 'Photography',
          items: [
            { text: 'Gallery', link: '/photography/' },
            { text: 'Tips and Tricks', link: '/photography/tips' },
          ]
        }
      ],
    },
  }
});
