import "../../node_modules/swiper/swiper-bundle.js";

const HeaderSwiper = (function () {
    function fire() {
        new Swiper(".headerSwiper", {
            pagination: {
                el: ".swiper-pagination",
                type: "fraction",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 5000,
            },
        });
    }

    return {
        on: fire
    };
})();

export default HeaderSwiper;