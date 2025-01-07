<script setup>
import { ref, computed } from 'vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Blog from './components/Blog.vue'
import { createMemoryHistory, createRouter } from 'vue-router';

// const router = useRouter();

// const refreshPage = () => {
//   router.go(); // Reloads the current route
// };

const refreshPageHome = () => {
  window.location.replace('/'); // Reloads the current page
};

const routes = {
  '/': Home,
  '/about': About,
  '/blog' : Blog
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>

<template>
  <nav data-aos="fade-down" data-aos-duration="1000">
    <div class="wrapper-logo">
      <a href="#"><img src="../src/assets/img/logodark.png" alt=""></a>
    </div>
    <ul>
      <li><a href="#/" @click="refreshPageHome">Project</a></li>
      <li><a href="#/about">About</a></li>
      <li><a href="#/blog">Blog</a></li>
    </ul>
    <div class="cta-nav">
      <a href="#">Download Resume</a>
    </div>
  </nav>
  <div>
    <component :is="currentView" />
  </div>
</template>

<style scoped>

nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 82px;
  background-color: transparent;
  padding-right: 32px;
}

nav ul {
  width: 24%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 32px;
}

nav ul li {
  list-style: none;
}

nav ul li a {
  color: #0a0a0a;
  position: relative;
}

nav ul li a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #0a0a0a;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}

nav ul li a:hover::after {
  width: 100%;
}

.wrapper-logo {
    display: flex;
    width: 198px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
}

.wrapper-logo img { 
    width: 42px;
    height: auto;
}


.cta-nav a { 
  color: #0a0a0a;
  padding: 16px 24px;
  border: 1px solid #0a0a0a;
  border-radius: 50px;
  cursor: pointer;
}

.cta-nav a:hover {
  color: #f5f5f5;
  background-color: #0a0a0a;
  transition: 0.5s all ease-in;
}

@media (min-width: 1024px) {
  
}
</style>
