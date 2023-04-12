import HeaderSwiper from "./HeaderSwiper.js";
import SecondSwiper from "./SecondSwiper.js";
import ThirdSwiper from "./ThirdSwiper.js";
import FourthSwiper from "./FourthSwiper.js";
import Toggler from "./Toggler.js";
import Scroll from "./Scroll.js";
import Counter from "./Counter.js";

import AnimateOnScroll from "./AnimateOnScroll.js";

HeaderSwiper.on();
SecondSwiper.on();
ThirdSwiper.on();
FourthSwiper.on();

Toggler.click("navbar-toggler", "#navbar-toggler span");

Scroll.setNavToZero();

AnimateOnScroll.on();

// window.addEventListener("scroll", () => {
//     if (window.scrollY >= document.getElementById("achievements").offsetTop - 100) {
//         Counter.on(
//             document.getElementById("achievements"),
//             document.querySelectorAll(".achievement-counter")
//         );
//     }
// });