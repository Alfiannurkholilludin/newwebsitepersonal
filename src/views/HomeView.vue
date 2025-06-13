<script setup>
  import Project from '@/components/Project.vue';
  import Services from '@/components/Services.vue';
</script>

<template>
  <main class="">
    <section class="hero">
      <div class="wrapper_hero">
        <div class="wrapper_header_h">
          <h1>Creating Visual Journey for Digital Products</h1>
          <p>Hi There ! I'm Alfian Nur, who passionate UI and Product Designer dedicated to crafting exceptional digital products with 3+ years experience.</p>
        </div>
        <div class="wrapper_cta_h">
          <a href="#" class="cta_email">My Resume</a>
        </div>
      </div>
    </section>
    <project/>
    <services/>
  </main>
  <!-- Back to Top Button -->
  <button id="backToTop" class="back-to-top">Back to Top</button>
</template>

<style scoped>

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

  .hero {
    width: 100%;
    height: 70vh;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .wrapper_header_h {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

  .wrapper_header_h h1 {
    font-family: 'SFPRODISPLAYBOLD', sans-serif;
    font-size: 56px;
    text-align: center;
    line-height: 1.4em;
  }

  .wrapper_header_h p {
    font-family: 'SFPRODISPLAYREGULER', sans-serif;
    text-align: center;
    width: 70%;
    font-size: 18px;
  }

  .wrapper_cta_h {
    display: flex;
    justify-content: center;
  }

  .cta_email {
    font-family: 'SFPRODISPLAYBOLD', sans serif;
    padding: 4px 16px;
    border: 1px solid #0a0a0a;
    border-radius: 8px;
    margin-top: 16px
  }

  @media (max-width: 768px) {
    .wrapper_header_h {
      justify-content: start;
    }

    .wrapper_header_h h1 {
      font-size: 48px;
      text-align: start;
    }

    .wrapper_header_h p {
      text-align: start;
      width: 100%;
    }

    .wrapper_cta_h {
      justify-content: start;
    }
  }
</style>


<script>
  document.addEventListener("DOMContentLoaded", function () {
    // GSAP Scroll Animation
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".wrapper_hero, .text_h, .animate-pop, .container_project").forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          // toggleActions: "play none none reverse"
        }
      });
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

    let coloredSections = gsap.utils.toArray("[data-color]");
        coloredSections.forEach((section, i) => {
        // grab the colors from the attribute
        let [bgColor, color] = section.getAttribute("data-color").split(" ");
        ScrollTrigger.create({
            trigger: section,
            start: "50 bottom",
            end: "+=400%",
            markers: false,
            onToggle: self => {
            // whenever we enter a section from either direction (scrolling up or down), animate to its color
            if (self.isActive) {
                gsap.to("body", {
                backgroundColor: bgColor,
                color: color,
                overwrite: "auto",
                });
            // when we LEAVE the very first section scrolling in reverse -OR- when we scroll past the very last section (forward), return to the "normal" colors
            } else if ((i === 0 && self.direction < 0) || (i === coloredSections.length - 1 && self.direction > 0)) {
                gsap.to("body", {
                backgroundColor: "#f2f2f2",
                color: "#181818",
                overwrite: "auto"
                });
            }
          }
        });
      });

  });
</script>