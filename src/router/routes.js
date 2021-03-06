
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        components: {
          header: () => import('src/components/Header.vue'),
          default: () => import('src/pages/home/Index.vue')
        } 
      },
      { 
        path: 'adopter-animaux/:selected?', 
        components: {
          header: () => import('src/components/Header.vue'),
          default: () => import('src/pages/adopt/List.vue')
        }, 
        props: true 
      }
    ]
  },
  {
    path: '/coming-soon',
    component: () => import('pages/ComingSoon.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
