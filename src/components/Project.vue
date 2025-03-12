<template>
    <main>
        <section class="container_project p-6">
            <div class="wrapper_container">
                <div class="wrapper_text_head">
                    <p>My Work</p>
                    <h1>Featured Project</h1>
                </div>
                <div class="mt-4">
                    <a href="/" class="block overflow-hidden transform transition duration-300">
                    <div class="bg-cover bg-center h-[300px] sm:h-[900px]" style="background-image: url('/vue-porto/src/assets/background/balifiber.png');"></div>
                        <div class="p-2 sm:p-12">
                            <div class="flex justify-between">
                                <h1 class="text-[24px] sm:text-[32px] font-[700]">Balifiber - Responsive internet provider website design</h1>
                                <p class="text-[16px] sm:text-[24px] font-bold">2024</p>
                            </div>
                            <p class="mt-4 text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia recusandae consequuntur deleniti sequi ut nobis. Voluptate eos officia natus consectetur autem ad sequi fuga aspernatur totam nisi culpa sint soluta minus ut maiores eum, atque repudiandae. Quae excepturi nisi eius totam nemo, voluptas minima eum dolores ab iure nostrum vero!</p>
                        </div>
                    </a>
                </div>
                <div class="mt-4">
                    <a href="/" class="block overflow-hidden transform transition duration-300">
                        <div class="bg-cover bg-center h-[300px] sm:h-[900px]" style="background-image: url('../assets/background/work2.webp');"></div>
                        <div class="p-2 sm:p-12">
                            <div class="flex justify-between">
                                <h1 class="text-[24px] sm:text-[32px] font-[700]">PT PIM - Responsive Company Profile Website</h1>
                                <p class="text-[16px] sm:text-[24px] font-bold">2024</p>
                            </div>
                            <p class="mt-4 text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia recusandae consequuntur deleniti sequi ut nobis. Voluptate eos officia natus consectetur autem ad sequi fuga aspernatur totam nisi culpa sint soluta minus ut maiores eum, atque repudiandae. Quae excepturi nisi eius totam nemo, voluptas minima eum dolores ab iure nostrum vero!</p>
                        </div>
                    </a>
                </div>
                <div class="mt-4">
                    <a href="/" class="block overflow-hidden transform transition duration-300">
                        <div class="bg-cover bg-center h-[300px] sm:h-[900px]" style="background-image: url('../assets/background/work1.webp');"></div>
                        <div class="p-2 sm:p-12">
                            <div class="flex justify-between">
                                <h1 class="text-[24px] sm:text-[32px] font-[700]">Balifiber Instant WiFi - Responsive Company Profile Website</h1>
                                <p class="text-[16px] sm:text-[24px] font-bold">2024</p>
                            </div>
                            <p class="mt-4 text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia recusandae consequuntur deleniti sequi ut nobis. Voluptate eos officia natus consectetur autem ad sequi fuga aspernatur totam nisi culpa sint soluta minus ut maiores eum, atque repudiandae. Quae excepturi nisi eius totam nemo, voluptas minima eum dolores ab iure nostrum vero!</p>
                        </div>
                    </a>
                </div>
                <div class="mt-4">
                    <a href="/" class="block overflow-hidden transform transition duration-300">
                        <div class="bg-cover bg-center h-[300px] sm:h-[900px]" style="background-image: url('../assets/background/horeka.png');"></div>
                        <div class="p-2 sm:p-12">
                            <div class="flex justify-between">
                                <h1 class="text-[24px] sm:text-[32px] font-[700]">Horeka - Responsive Company Profile Website</h1>
                                <p class="text-[16px] sm:text-[24px] font-bold">2024</p>
                            </div>
                            <p class="mt-4 text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia recusandae consequuntur deleniti sequi ut nobis. Voluptate eos officia natus consectetur autem ad sequi fuga aspernatur totam nisi culpa sint soluta minus ut maiores eum, atque repudiandae. Quae excepturi nisi eius totam nemo, voluptas minima eum dolores ab iure nostrum vero!</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </main>
</template>

<script>


</script>

<style scoped>   

    .container_project {
        width: 100%;
        height: auto;
        font-family: 'SFPRODISPLAYREGULER', sans-serif;
    }

    .wrapper_container {
        display: flex;
        flex-direction: column;
        gap: 82px;
    }

    .wrapper_text_head p {
        font-family: 'SFPRODISPLAYREGULER', sans-serif;
        font-size: 1rem;
        color: #a0a0a0;
    }

    .wrapper_text_head h1 {
        font-size: 56px;
        font-weight: 600;
        font-family: 'SFPRODISPLAYREGULER', sans-serif;
    }

    .card {
        width: 100%;
        height: 400px;
        background-color: antiquewhite;
    }

    .card .wrapper_img img {
        width: 100%;
        height: auto;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-clip: content-box;
    }

    @media (max-width: 768px) {
        .wrapper_text_head h1 {
            font-size: 32px;
        }

    }
</style>