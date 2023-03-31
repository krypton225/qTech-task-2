import AOS from "aos";
import "aos/dist/aos.css";

const AnimateOnScroll = (function () {

    function animate() {
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
            offset: 120,
            delay: 0,
            duration: 1200,
            easing: "ease-in-out",
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }

    return {
        on: animate
    };

})();

export default AnimateOnScroll;