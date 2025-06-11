<template>
    <main>
        <section class="container_project">
            <div class="wrapper_container">
                <!-- <div class="container_card w-full h-[550px] max-[768px]:h-[850px] bg-[#181818] rounded-[50px] flex flex-row-reverse shadow-lg overflow-hidden p-12">
                    <img class="img_card w-[450px] h-[750px] max-[768px]:h-[450px] object-cover rounded-lg" src="../assets/background/Mockup.png" alt="Image">
                    <div class="wrapper_shot flex flex-col w-full gap-[42px]">
                        <h2 class="text-4xl max-[768px]:text-2xl font-[700] text-gray-100">Smartcart by ITC</h2>
                        <p class="text-gray-300 w-[55%] max-[768px]:w-fit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla consequatur alias labore recusandae magni earum unde exercitationem quos suscipit inventore beatae ipsa.</p>
                        <a href="#" class="text-gray-100 p-4 bg-[#333] w-fit rounded-lg">View case study</a>
                    </div>
                </div> -->
                <a href="/" class="card_wrapper w-full h-full rounded-[50px] flex flex-col overflow-hidden p-12 max-[768px]:p-4">
                    <img class="object-cover rounded-lg w-full h-full" src="../assets/background/2.png" alt="project1">
                    <div class="wrapper_shot flex flex-col w-full gap-[8px] pt-4">
                        <h2 class="text-[28px] tracking-tight text-[#333] font-bold">SmartCart By ITC</h2>
                        <p class="text-[18px] text-[#676767]">Product Design / App Design</p>
                    </div>
                </a>
                <a href="/" class="card_wrapper w-full h-full rounded-[50px] flex flex-col overflow-hidden p-12 max-[768px]:p-4">
                    <img class="object-cover rounded-lg w-full h-full" src="../assets/background/1.png" alt="project1">
                    <div class="wrapper_shot flex flex-col w-full gap-[8px] pt-4">
                        <h2 class="text-[28px] tracking-tight text-[#333] font-bold">Balifiber</h2>
                        <p class="text-[18px] text-[#676767]">Product Design / Web Design</p>
                    </div>
                </a>
                <a href="/" class="card_wrapper w-full h-full rounded-[50px] flex flex-col overflow-hidden p-12 max-[768px]:p-4">
                    <img class="object-cover rounded-lg w-full h-full" src="../assets/background/3.png" alt="project1">
                    <div class="wrapper_shot flex flex-col w-full gap-[8px] pt-4">
                        <h2 class="text-[28px] tracking-tight text-[#333] font-bold">Motekar Studio</h2>
                        <p class="text-[18px] text-[#676767]">Product Design / Web Design</p>
                    </div>
                </a>
            </div>
        </section>
    </main>
</template>

<script>

</script>

<style scoped>   

    /* .backgroundImg1 {
        background-image: url(../assets/background/balifiber.png);
    }

    .backgroundImg2 {
        background-image: url(../assets/background/work2.webp);
    }

    .backgroundImg3 {
        background-image: url(../assets/background/work1.webp);
    }

    .backgroundImg4 {
        background-image: url(../assets/background/horeka.png);
    } */

    .container_project {
        width: 100%;
        height: auto;
        font-family: 'SFPRODISPLAYREGULER', sans-serif;
    }

    .wrapper_container {
        display: flex;
        flex-direction: column;
        gap: 24px;
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
        display: flex;
        flex-direction: row-reverse;
        padding: 1rem 2rem;
        width: 100%;
        height: 550px;
        border-radius: 50px;
        background-color: rgb(24, 24, 24);
    }

    .card img {
        width: 40%;
        height: auto;
    }

    @media (max-width: 768px) {
        .wrapper_text_head h1 {
            font-size: 32px;
        }

        .container_card {
            flex-direction: column;
            gap: 16px;
        }

        /* .img_card {
            width: 284px;
            height: 650px;
        } */
    }
</style>