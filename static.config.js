import axios from "axios";
import Template from '../src/templates/Template';

export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        template: Template
      },
      {
        path: '/about',
        component: 'src/containers/About',
        template: Template
      },
      {
        path: '/photography',
        component: 'src/containers/Hobby1',
        template: Template
      },
      {
        path: '/gaming',
        component: 'src/containers/Hobby2',
        template: Template
      },
      {
        path: '/football',
        component: 'src/containers/Hobby3',
        template: Template
      },
      
      {
        path: "/blog",
        component: "src/containers/Blog",
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: "src/containers/Post",
          getData: () => ({
            post
          })
        }))
      },
      {
        is404: true,
        component: "src/containers/404"
      }
    ];
  }
};
