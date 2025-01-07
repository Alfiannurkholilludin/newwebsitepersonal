import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


createApp(App).mount('#app')

const lenis = new Lenis()

        lenis.on('scroll', (e) => {
        })

        function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

const myText = new SplitType('#myText');
const myTextp = new SplitType('#myTextp');
const myTextp2 = new SplitType('#myTextp2')

        gsap.to('.char', {
            y: 0,
            stagger: 0.01,
            delay: 0.8,
            duration: .1
        });

        AOS.init();

        document.addEventListener('DOMContentLoaded', function() {
                const wordList = document.querySelector('[data-looping-words-list]');
                const words = Array.from(wordList.children);
                const totalWords = words.length;
                const wordHeight = 100 / totalWords; // Offset as a percentage
                const edgeElement = document.querySelector('[data-looping-words-selector]');
                let currentIndex = 0;
                function updateEdgeWidth() {
                  const centerIndex = (currentIndex + 1) % totalWords;
                  const centerWord = words[centerIndex];
                  const centerWordWidth = centerWord.getBoundingClientRect().width;
                  const listWidth = wordList.getBoundingClientRect().width;
                  const percentageWidth = (centerWordWidth / listWidth) * 100;
                  gsap.to(edgeElement, {
                    width: `${percentageWidth}%`,
                    duration: 0.5,
                    ease: 'Expo.easeOut',
                  });
                }
                function moveWords() {
                  currentIndex++;
                  gsap.to(wordList, {
                    yPercent: -wordHeight * currentIndex,
                    duration: 1.2,
                    ease: 'elastic.out(1, 0.85)',
                    onStart: updateEdgeWidth,
                    onComplete: function() {
                      if (currentIndex >= totalWords - 3) {
                        wordList.appendChild(wordList.children[0]);
                        currentIndex--;
                        gsap.set(wordList, { yPercent: -wordHeight * currentIndex });
                        words.push(words.shift());
                      }
                    }
                  });
                }
                updateEdgeWidth();
                gsap.timeline({ repeat: -1, delay: 1 })
                  .call(moveWords)
                  .to({}, { duration: 2 })
                  .repeat(-1);
              });

// Matter js
function initSimulation() {
  const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Events = Matter.Events;

  const engine = Engine.create(),
    world = engine.world;

  const containerElement = document.querySelector(".tag-canvas");
  const containerWidth = containerElement.clientWidth;
  const containerHeight = containerElement.clientHeight;

  // Set up Matter.js renderer
  const render = Render.create({
    element: containerElement,
    engine: engine,
    options: {
      width: containerWidth,
      height: containerHeight,
      background: "transparent", // No default background
      wireframes: false
    }
  });

  Render.run(render);
  Engine.run(engine);

  // Create boundaries
  const ground = Bodies.rectangle(
    containerWidth / 2,
    containerHeight + 50,
    containerWidth,
    100,
    { isStatic: true }
  );
  const wallLeft = Bodies.rectangle(
    -70,
    containerHeight / 2,
    100,
    containerHeight,
    {
      isStatic: true
    }
  );
  const wallRight = Bodies.rectangle(
    containerWidth + 70,
    containerHeight / 2,
    100,
    containerHeight,
    { isStatic: true }
  );
  const roof = Bodies.rectangle(containerWidth / 2, -100, containerWidth, 100, {
    isStatic: true
  });

  World.add(world, [ground, wallLeft, wallRight, roof]);

  // Sync Matter.js bodies with HTML elements
  const tags = document.querySelectorAll(".tag");
  const tagBodies = Array.from(tags).map((tag) => {
    const width = tag.offsetWidth;
    const height = tag.offsetHeight;

    const x = Math.random() * (containerWidth - width) + width / 2;
    const y = Math.random() * containerHeight;

    const body = Bodies.rectangle(x, y, width, height, {
      chamfer: { radius: height / 2 }, // Rounded corners
      density: 0.01,
      friction: 0.1,
      restitution: 0.8, // Bouncy effect
      render: {
        fillStyle: "transparent" // Disable Matter.js background rendering
      }
    });

    World.add(world, body);
    return { body, element: tag };
  });

  // Sync positions and rotation with Matter.js
  Events.on(engine, "afterUpdate", () => {
    tagBodies.forEach(({ body, element }) => {
      const { x, y } = body.position;

      element.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${body.angle}rad)`;
    });
  });

  // Add mouse interactivity
  const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2
    }
  });

  World.add(world, mouseConstraint);

  // Adjust rendering and bounds on resize
  window.addEventListener("resize", () => {
    render.canvas.width = containerElement.clientWidth;
    render.canvas.height = containerElement.clientHeight;
    render.options.width = containerElement.clientWidth;
    render.options.height = containerElement.clientHeight;
  });
}

const containerElement = document.querySelector(".tag-canvas");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      initSimulation();
    }
  });
});

observer.observe(containerElement);

// const myTextp = new SplitType('#myTextp', { types: 'words' });

//         gsap.to('.word', {
//             yPercent: 30,
//             delay: 0.5,
//             duration: .1,
//             stagger: { amount: 0.5}
//         });

