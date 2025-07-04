import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import Project1 from '../views/Project1.vue'
// console.clear();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/smartcart',
      name: 'project1',
      component: Project1,
    },
  ],
})


// <!-- Lenis Scroll -->
    
const lenis = new Lenis()

lenis.on('scroll', (e) => {
// console.log(e)
})

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


export default router
