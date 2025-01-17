import axios from "axios";
import HobbyTemplate from './src/templates/HobbyTemplate'; // Import the new template

export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    
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
        path: '/photography',
        component: 'src/containers/Hobby1',
        template: HobbyTemplate, // Use the new template
      },
      {
        path: '/gaming',
        component: 'src/containers/Hobby2',
        template: HobbyTemplate, // Use the new template
      },
      {
        path: '/football',
        component: 'src/containers/Hobby3',
        template: HobbyTemplate, // Use the new template
      },
      {
        path: "/blog",
        component: "src/containers/Blog",
        getData: () => ({ posts }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: "src/containers/Post",
          getData: () => ({ post })
        }))
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  }
};
