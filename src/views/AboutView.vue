<script setup>
    import HeroAbout from '@/components/HeroAbout.vue';
</script>

<template>
    <HeroAbout/>
    <!-- Back to Top Button -->
    <button id="backToTop" class="back-to-top">Back to Top</button>
</template>

<style>
    .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: auto;
    padding: 16px 24px;
    height: auto;
    background: #333;
    color: #f5f5f5;
    border: none;
    border-radius: 15%;
    font-size: 16px;
    cursor: pointer;
    display: none;
    transition: opacity 0.3s;
  }

  .back-to-top:hover {
    background: #555;
  }
</style>

<script>
    document.addEventListener("DOMContentLoaded", function(){
        // JavaScript untuk menangani tombol Back to Top
        const backToTopButton = document.getElementById("backToTop");

            window.onscroll = function () {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
            };

            backToTopButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    });
</script>
