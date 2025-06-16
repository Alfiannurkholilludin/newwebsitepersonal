<script setup>
    import Matter from 'matter-js';
    import { onMounted } from 'vue';

    let engine, render, observer

onMounted(() => {
  const {
    Engine,
    Render,
    World,
    Bodies,
    Mouse,
    MouseConstraint,
    Events
  } = Matter

//   engine = Engine.create()
  const engine = Matter.Engine.create();
  const world = engine.world

  const containerElement = document.querySelector('.tag-canvas')
  const containerWidth = containerElement.clientWidth
  const containerHeight = containerElement.clientHeight

  // Set up renderer
  const render = Matter.Render.create({
    element: containerElement,
    engine: engine,
    options: {
      width: containerWidth,
      height: containerHeight,
      background: 'transparent',
      wireframes: false,
    }
  })

  Matter.Render.run(render);
  const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

  // Boundaries
  const ground = Bodies.rectangle(containerWidth / 2, containerHeight + 50, containerWidth, 100, { isStatic: true })
  const wallLeft = Bodies.rectangle(-70, containerHeight / 2, 100, containerHeight, { isStatic: true })
  const wallRight = Bodies.rectangle(containerWidth + 70, containerHeight / 2, 100, containerHeight, { isStatic: true })
  const roof = Bodies.rectangle(containerWidth / 2, -100, containerWidth, 100, { isStatic: true })
  World.add(world, [ground, wallLeft, wallRight, roof])

  // Tag Elements
  const tags = document.querySelectorAll('.tag')
  const tagBodies = Array.from(tags).map(tag => {
    const width = tag.offsetWidth
    const height = tag.offsetHeight
    const x = Math.random() * (containerWidth - width) + width / 2
    const y = Math.random() * containerHeight

    const body = Bodies.rectangle(x, y, width, height, {
      chamfer: { radius: height / 2 },
      density: 0.01,
      friction: 0.1,
      restitution: 0.8,
      render: { fillStyle: 'transparent' }
    })

    World.add(world, body)
    return { body, element: tag }
  })

  // Sync DOM with physics
  Events.on(engine, 'afterUpdate', () => {
    tagBodies.forEach(({ body, element }) => {
      const { x, y } = body.position
      element.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${body.angle}rad)`
    })
  })

  // Mouse control
  const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: { 
        stiffness: 0.2,
        render: {
            visible: false
        } 
    } 
  });

  // ✅ Sync render with mouse (important)
    render.mouse = mouse;

  World.add(world, mouseConstraint)

  // Resize handler
  const handleResize = () => {
    render.canvas.width = containerElement.clientWidth
    render.canvas.height = containerElement.clientHeight
    render.options.width = containerElement.clientWidth
    render.options.height = containerElement.clientHeight
  }

  window.addEventListener('resize', handleResize)

  // Optional: use IntersectionObserver to pause/start engine
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      engine.enabled = entry.isIntersecting
    })
  })

  observer.observe(containerElement)

  // Cleanup
  onUnmounted(() => {
    Render.stop(render)
    Engine.clear(engine)
    World.clear(world)
    render.canvas.remove()
    window.removeEventListener('resize', handleResize)
    if (observer) observer.disconnect()
  })
})
</script>

<template>
    <main>
        <section class="static">
            <div class="wrapper_title w-full h-auto absolute top-[35%] flex flex-col items-center gap-2">
                <h1 class="text-[62px]">404</h1>
                <p>Page Not Found, Web Underconstruction</p>
            </div>
            <div class="tag-canvas">
                <div class="tag">Frontend Development</div>
                <div class="tag">UI / UX Designer</div>
                <div class="tag">Product Designer</div>
                <div class="tag">Interior Designer Enthusiast</div>
                <div class="tag">Graphic Designer</div>
                <div class="tag">Web Designer</div>
                <div class="tag">3D Modelling</div>
            </div>
        </section>
    </main>
</template>

<style>
    .tag-canvas {
    width: 100%;
    height: 85vh;
    /* border: 1px solid #001d44; */
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    background-color: transparent;
    z-index: -1;
    }

    .title {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 52px;
    font-family: 'PP Neue Corp';
    font-weight: 700;
    color: #f2f2f2;
    text-transform: uppercase;
    margin: 0;
    }

    .tag {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    height: 40px;
    font-size: 14px;
    text-transform: uppercase;
    color: #f2f2f2;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    pointer-events: none;
    }

    /* Custom colors for tags */
    .tag:nth-child(1) {
    background-color: #0a0a0a;
    }

    .tag:nth-child(2) {
    background-color: #0a0a0a;
    }

    .tag:nth-child(3) {
    background-color: #0a0a0a;
    }

    .tag:nth-child(4) {
    background-color: #0a0a0a;
    }

    .tag:nth-child(5) {
    background-color: #0a0a0a;
    }

    .tag:nth-child(6) {
    background-color: #0a0a0a;
    }

    .tag:nth-child(7) {
    background-color: #0a0a0a;
    }

    
</style>

<script>

</script>