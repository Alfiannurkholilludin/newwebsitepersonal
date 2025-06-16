<script setup>
    import HeroAbout from '@/components/HeroAbout.vue';
    import IntroAbout from '@/components/IntroAbout.vue';
    import ExperienceAbout from '@/components/ExperienceAbout.vue';
</script>

<template>
    <HeroAbout/>
    <IntroAbout/>
    <ExperienceAbout/>
    <!-- Back to Top Button -->
    <button id="backToTop" class="back-to-top">Back to Top</button>
</template>

<style>
   .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: auto;
    padding: 8px 16px;
    height: auto;
    background: #333;
    color: #f5f5f5;
    border: none;
    border-radius: 15%;
    font-size: 14px;
    cursor: pointer;
    display: none;
    transition: opacity 0.3s;
  }

  .back-to-top:hover {
    background: #555;
  }
</style>

<script>
    export default {
        mounted() {
             // GSAP Scroll Animation
                let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".about-section",
                    start: "top 80%"
                }
                });

                tl.from(".text_introabout", { opacity: 0, y: 50, duration: 1 })
                .from(".text_pintroabout", { opacity: 0, y: 50, duration: 1 }, "-=0.5") // "-=0.5" berarti overlap 0.5 detik
                .from(".img_introabout1", { opacity: 0, y: 50, duration: 1 }, "-=0.3")
                .from(".img_introabout2", { opacity: 0, y: 50, duration: 1 }, "-=0.2");

                gsap.from(".text_titleintro, .text_subintro, .text_subintro2, .text_subintro3", {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.4, // delay antar elemen
                scrollTrigger: {
                    trigger: ".text_titleintro", // atur trigger induk
                    start: "top 20%",
                }
                });
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
        }
    }
</script>
