// docs/.vitepress/config.js
import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'My VitePress Site',
  description: 'A site created with VitePress',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' }
    ],
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' }
          ]
        }
      ]
    }
  }
});
