import "../../node_modules/swiper/swiper-bundle.js";

const SecondSwiper = (function () {
    function fire() {
        new Swiper(".custom-swiper", {
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            grabCursor: true,
            loop: true,

            // Enabled autoplay mode
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            },

            // If we need pagination
            pagination: {
                el: ".custom-swiper-pagination",
                dynamicBullets: true,
                clickable: true
            },

            // If we need navigation
            navigation: {
                nextEl: ".swiper-button-next-2",
                prevEl: ".swiper-button-prev-2"
            },

            // Responsive breakpoints
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // 768: {
                //     slidesPerView: 3,
                //     spaceBetween: 40,
                // },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            }
        });
    }

    return {
        on: fire
    };
})();

export default SecondSwiper;