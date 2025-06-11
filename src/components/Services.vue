<template>
    <main>
        <section class="project p-12 max-[768px]:p-6">
            <div class="wrapper_project">
                <div class="wrapper_header_p">
                    <p>My Career</p>
                    <h1>Career Path</h1>
                    <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laborum, esse aliquam alias doloremque ad cumque fugit quis, ex repudiandae, impedit exercitationem. Pariatur, illum? Dicta cupiditate dignissimos quisquam deleniti numquam maiores neque maxime distinctio quam ad? Harum beatae, animi aliquam facilis perferendis doloremque. Dolorum molestiae cumque a temporibus praesentium aut dolore delectus nulla magni, labore, culpa non quis porro quod rerum. Neque, ullam! Vero inventore explicabo suscipit doloribus provident ipsum tempora fugiat perspiciatis excepturi, odio sint tempore pariatur amet quod dolore voluptatum temporibus sit accusantium, iure, neque libero minima expedita? Voluptates inventore magni facere veniam, omnis recusandae? Aspernatur, voluptas excepturi.</p> -->
                </div>
                <div class="tt-col-xl-7">

                    <!-- Begin accordion 
                    ===================== 
                    * Use class "tt-ac-sm", "tt-ac-lg", "tt-ac-xlg" or "tt-ac-xxlg" to set accordion size.
                    * Use class "tt-ac-borders" to enable borders.
                    * Note: Add class "is-open" to the "tt-accordion-content" to make this content open by default.
                    -->
                    <div class="tt-accordion tt-ac-borders">
                        <div class="tt-accordion-item anim-fadeinup">
                            <div class="tt-accordion-heading">
                                <div class="tt-ac-head cursor-alter">
                                    <h3 class="tt-ac-head-title">Frontend Developer UI UX</h3>
                                    <!-- <div class="tt-accordion-subtext">Mauris mauris ante</div> -->
                                </div>

                                <div class="tt-accordion-caret-wrap">
                                    <div class="tt-accordion-caret-inner magnetic-item">
                                        <div class="tt-accordion-caret"></div>
                                    </div>
                                </div> <!-- /.tt-accordion-caret-wrap -->
                            </div> <!-- /.tt-accordion-heading -->
                            <div class="tt-accordion-content max-width-800">
                                <p>PT Bali Towerindo Sentra Tbk, September 2023 - Present<br>
                                    Main Responsibilities:<br>
                                    - Designed more product / solutions for client<br>
                                    - Handled UX Process and UI design for desktop/mobile responsive version and mobile apps<br>
                                    - Translated concepts into user flows, wireframes, mockups, and prototyping<br>
                                    - Analyzed user problems, business goals, and user goals in the early phase product/feature development<br>
                                    - Defined innovative solutions for the product direction, visuals, and experience.</p>
                            </div> <!-- /.tt-accordion-content -->
                        </div> <!-- /.tt-accordion-item -->

                        <div class="tt-accordion-item anim-fadeinup">
                            <div class="tt-accordion-heading">
                                <div class="tt-ac-head cursor-alter">
                                    <h3 class="tt-ac-head-title">UI UX Designer</h3>
                                    <!-- <div class="tt-accordion-subtext">Vivamus nisi</div> -->
                                </div>

                                <div class="tt-accordion-caret-wrap">
                                    <div class="tt-accordion-caret-inner magnetic-item">
                                        <div class="tt-accordion-caret"></div>
                                    </div>
                                </div> <!-- /.tt-accordion-caret-wrap -->
                            </div> <!-- /.tt-accordion-heading -->
                            <div class="tt-accordion-content max-width-800">
                                <p>Yubi Technology, January 2023 - September 2023.<br>
                                    Main Responsibilities:<br>
                                    - Create Design System<br>
                                    - Create User Interface Application POS (Point Of Sales)<br>
                                    - Create User Interface Website and Application Manufacturing Management (PT Anugerah Cipta Moulding Indonesia).</p>
                            </div> <!-- /.tt-accordion-content -->
                        </div> <!-- /.tt-accordion-item -->

                        <div class="tt-accordion-item anim-fadeinup">
                            <div class="tt-accordion-heading">
                                <div class="tt-ac-head cursor-alter">
                                    <h3 class="tt-ac-head-title">Web Designer (Freelance Project)</h3>
                                    <!-- <div class="tt-accordion-subtext">Nam min proin eget</div> -->
                                </div>

                                <div class="tt-accordion-caret-wrap">
                                    <div class="tt-accordion-caret-inner magnetic-item">
                                        <div class="tt-accordion-caret"></div>
                                    </div>
                                </div> <!-- /.tt-accordion-caret-wrap -->
                            </div> <!-- /.tt-accordion-heading -->
                            <div class="tt-accordion-content max-width-800">
                                <p>PT Motekar Digital Kreasi, January 2023 - July 2023.<br>
                                    Main Responsibilities:<br>
                                    - Redesign Website Landing Page<br>
                                    - Create Ui responsive for mobile and desktop view</p>
                            </div> <!-- /.tt-accordion-content -->
                        </div> <!-- /.tt-accordion-item -->

                        <div class="tt-accordion-item anim-fadeinup">
                            <div class="tt-accordion-heading">
                                <div class="tt-ac-head cursor-alter">
                                    <h3 class="tt-ac-head-title">UI Designer (Freelance Project)</h3>
                                    <!-- <div class="tt-accordion-subtext">Condimentum sit amet</div> -->
                                </div>

                                <div class="tt-accordion-caret-wrap">
                                    <div class="tt-accordion-caret-inner magnetic-item">
                                        <div class="tt-accordion-caret"></div>
                                    </div>
                                </div> <!-- /.tt-accordion-caret-wrap -->
                            </div> <!-- /.tt-accordion-heading -->
                            <div class="tt-accordion-content max-width-800">
                                <p>PT International Test Center, March 2022 - April 2022.<br>
                                    Main Responsibilities:<br>
                                    - Redesign Website Landing Page<br>
                                    - Create Ui responsive for mobile and desktop view</p>
                            </div> <!-- /.tt-accordion-content -->
                        </div> <!-- /.tt-accordion-item -->

                    </div>
                    <!-- End accordion -->

                </div> <!-- /.tt-col -->
            </div>
        </section>
    </main>
</template>

<script>
    document.addEventListener("DOMContentLoaded", function (){
        // ================================================================
        // Accordion
        // ================================================================

        $(".tt-accordion").each(function() {

        // If accordion content has class "is-open"
        $(this).find(".tt-accordion-item").each(function() {
            var $this = $(this);

            if ($this.find(".tt-accordion-content").hasClass("is-open")) {
                $this.addClass("active");
            }
        });

        // Accordion item on click
        $(this).find(".tt-accordion-heading").on("click", function() {
            var $this = $(this);

            if ($this.parents(".tt-accordion-item").hasClass("active")) {
                $this.parents(".tt-accordion-item").removeClass("active");
                $this.next(".tt-accordion-content").slideUp(350);
            } else {
                $this.parent().parent().find(".tt-accordion-item").removeClass("active");
                $this.parent().parent().find(".tt-accordion-content").slideUp(350);
                $this.parents(".tt-accordion-item").toggleClass("active");
                $this.next(".tt-accordion-content").slideToggle(350);
            }
            return true;
            });
        });

        // fade in-up
        $(".anim-fadeinup").each(function() {
            let tl_FadeInUp = gsap.timeline({
                scrollTrigger: {
                    trigger: this,
                    start: "top bottom",
                    markers: false
                }
            });

            tl_FadeInUp.from(this, { duration: 2.5, autoAlpha: 0, y: 100, ease: Expo.easeOut, clearProps:"all" }, "+=0.3");
        });
    });
</script>

<style scoped>
    .project {
        width: 100%;
        height: auto;
    }

    .wrapper_project {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .wrapper_header_p p {
        font-family: 'SFPRODISPLAYREGULER', sans-serif;
        font-size: 1rem;
        color: #a0a0a0;
    }

    .wrapper_header_p h1 {
        font-size: 56px;
        font-weight: 600;
        font-family: 'SFPRODISPLAYREGULER', sans-serif;
    }
    
    /* ------------------------------------------------------------- *
    * Accordion
    /* ------------------------------------------------------------- */

    .tt-accordion {
        position: relative;
    }

    .tt-accordion-item {
        position: relative;
    }


    /* Accordion heading 
    ===================== */
    .tt-accordion-heading {
        position: relative;
        cursor: pointer;
    }

    .tt-ac-head {
        padding: 20px 13% 20px 0;
    }
    .tt-accordion-item:first-child .tt-ac-head {
        padding-top: 0;
    }

    .tt-ac-head-title {
        margin: 0;
        padding-right: 13%;
        font-size: 32px;
        font-weight: bold;
        font-weight: 600;
        /* color: #0a0a0a; */
        line-height: 1.2;
        transition: color 0.3s;
    }
    .tt-accordion-item:not(.active) .tt-accordion-heading:hover .tt-ac-head-title,
    .tt-accordion-item.active .tt-ac-head-title {
        /* color: #0a0a0a; */
    }

    /* Accordion heading subtext */
    .tt-accordion-subtext {
        margin-top: 10px;
        font-size: 19px;
        font-weight: normal;
        /* color: #0a0a0a; */
    }

    /* Accordion heading caret */
    .tt-accordion-caret-wrap {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate3d(0, -50%, 0);
    }
    .tt-accordion-caret-inner {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 60px;
        font-size: 18px;
        /* color: #FFF; */
        cursor: pointer;
        outline: none;
    }

    .tt-accordion-caret {
        position: relative;
        display: inline-block;
        width: 35px;
        height: 5px;
        box-shadow: inset 0 0 0 40px;
        margin: 10px;
        /* color: #0a0a0a; */
        transform: rotate(270deg);
        transition: all 0.3s;
    }
    .tt-accordion-caret:before, 
    .tt-accordion-caret:after {
        position: absolute;
        display: block;
        content: "";
        left: 0;
        width: 25px;
        height: 5px;
        box-shadow: inset 0 0 0 40px;
    }
    .tt-accordion-caret:before {
        top: 1px;
        transform: rotate(-45deg);
        transform-origin: bottom left;
    }
    .tt-accordion-caret:after {
        bottom: 1px;
        transform: rotate(45deg);
        transform-origin: top left;
    }

    .tt-accordion-item:not(.active) .tt-accordion-heading:hover .tt-accordion-caret {
        /* color: #a0a0a0; */
    }
    .tt-accordion-item.active .tt-accordion-caret {
        transform: rotate(90deg);
    }
    .tt-accordion-item.active .tt-accordion-heading:hover .tt-accordion-caret {
        /* color: #a0a0a0; */
    }

    /* Accordion content 
    ===================== */
    .tt-accordion-content {
        padding-bottom: 40px;
        color: #a0a0a0;
        width: 90%;
    }
    .tt-accordion-content:not(.is-open) {
        display: none;
    }

    .tt-accordion-content p:last-child {
        margin-bottom: 0;
    }


    /* Accordion styles 
    ==================== */
    /* borders */
    .tt-accordion.tt-ac-borders .tt-accordion-heading {
        border-top: 1px solid #4a4a4a;
    }
    .tt-accordion.tt-ac-borders .tt-ac-head {
        padding-top: 45px;
        padding-bottom: 45px;
    }

    .tt-accordion.tt-ac-borders .tt-accordion-item:last-child {
	    border-bottom: 1px solid #4a4a4a;
    }

    /* Accordion sizes 
    =================== */
    .tt-accordion.tt-ac-sm .tt-ac-head-title {
        font-size: calc(24px + 0.1vw);
    }

@media (max-width: 768px) {
    .wrapper_header_p h1 {
        font-size: 32px;
    }

    .tt-ac-head-title {
		font-size: 28px;
	}

    .tt-accordion-caret {
		width: 25px;
		height: 4px;
	}
	.tt-accordion-caret:before, 
	.tt-accordion-caret:after {
		width: 20px;
		height: 4px;
	}

    .tt-accordion.tt-ac-borders .tt-ac-head {
		padding-top: 30px;
		padding-bottom: 30px;
	}

    .tt-accordion.tt-ac-lg .tt-ac-head-title {
		font-size: calc(24px + 1vw);
	}

	.tt-accordion.tt-ac-xlg .tt-ac-head-title {
		font-size: calc(24px + 1.5vw);
	}

	.tt-accordion.tt-ac-xxlg .tt-ac-head-title {
		font-size: calc(24px + 2vw);
	}
}
</style>