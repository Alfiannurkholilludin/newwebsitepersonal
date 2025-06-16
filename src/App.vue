<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import { useRouter, useRoute } from "vue-router"

    // const router = useRouter();
    // const route = useRoute();

    // const handleHomeClick = (event) => {
    //   if (route.path === "/") {
    //     event.preventDefault(); // Prevent Vue Router from handling the navigation
    //     window.location.replace('/'); // Force reload
    //   }
    // };

    function reloadPage() {
      window.location.replace('/');
    }

    function reloadAbout() {
      window.location.replace('/about')
    }
</script>

<template>
  <div>

    <!-- Header and Navbar -->
    <!-- <header>
      <div class="wrapper">
        <div class="logo">
          <a href="#"><img src="./assets/logo/logodark.png" alt=""></a>
        </div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/blog">Blog</RouterLink>
        </nav>
        <div class="cta_resume">
          <a href="#">Get In Touch</a>
        </div>
      </div>
    </header> -->

    <!-- Responsive Navbar -->
    <header>
      <div class="wrapper mx-auto flex items-center justify-between p-6">
        <!-- Logo -->
        <div class="logo">
          <a href="#"><img src="./assets/logo/logodark.png" alt="Logo" class="h-8"></a>
        </div>
        
        <!-- Navbar for larger screens -->
        <nav class="hidden md:flex space-x-6 gap-6">
          <RouterLink :to="{ name: 'home' }" @click="reloadPage" class="hover:text-gray-500">Home</RouterLink>
          <RouterLink :to="{ name: 'about' }" @click="reloadAbout" class="hover:text-gray-500">About</RouterLink>
          <RouterLink to="/blog" class="hover:text-gray-500">Blog</RouterLink>
        </nav>
        
        <!-- CTA Button -->
        <div class="hidden md:block">
          <a href="#" class="shadow-md bg-[#333] hover:shadow-none text-white px-4 py-2 rounded-lg">Get In Touch</a>
        </div>
        
        <!-- Mobile Menu Toggle -->
        <button id="menu-toggle" class="md:hidden focus:outline-none transition-transform duration-300 ease-in-out transform">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden fixed z-[99] md:hidden flex flex-col justify-evenly items-center bg-[#f8f8f8] h-full w-screen transition-all duration-300 ease-in-out transform translate-y-[-10px] opacity-0">
        <RouterLink :to="{ name: 'home' }" @click="reloadPage" class="hover:text-gray-500 text-2xl">Home</RouterLink>
        <RouterLink :to="{ name: 'about' }" @click="reloadAbout" class="hover:text-gray-500 text-2xl">About</RouterLink>
        <RouterLink to="/blog" class="hover:text-gray-500 text-2xl">Blog</RouterLink>
        <a href="#" class=" bg-[#0a0a0a] text-white px-4 py-2 rounded-lg text-2xl">Get In Touch</a>
      </div>
    </header>

    <RouterView :key="$route.fullPath"/>
  </div>
  <footer>
    <section class="flex p-12 bg-[#f2f2f2] w-full h-[10px] items-center">
      <div class="wrapper_foot">
        <h5 class="text-[#333]">@ 2025 Designed & Developed By Alfian Nur Kholilludin</h5>
      </div>
    </section>
  </footer>
</template>

<style scoped>

  #mobile-menu {
    overflow: hidden;
  }

  nav a {
    font-family: 'SFPRODISPLAYREGULER', sans-serif;
  }

  .router-link-active {
    font-family: 'SFPRODISPLAYREGULER', sans-serif;
    color: #a0a0a0;
  }

@media (max-width: 768px) {
  
}

@media (min-width: 1024px) {
  
}
</style>

<script>
   document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");
    
    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("translate-y-0");
      mobileMenu.classList.toggle("opacity-100");
      
      // Animate menu icon
      if (mobileMenu.classList.contains("hidden")) {
        menuToggle.classList.remove("rotate-90");
      } else {
        menuToggle.classList.add("rotate-90");
      }
    });
  });
</script>
