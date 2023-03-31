import HeaderSwiper from "./HeaderSwiper.js";
import SecondSwiper from "./SecondSwiper.js";
import ThirdSwiper from "./ThirdSwiper.js";
import FourthSwiper from "./FourthSwiper.js";
import Toggler from "./Toggler.js";
import Scroll from "./Scroll.js";

import AnimateOnScroll from "./AnimateOnScroll.js";

HeaderSwiper.on();
SecondSwiper.on();
ThirdSwiper.on();
FourthSwiper.on();

Toggler.click("navbar-toggler", "#navbar-toggler span");

Scroll.setNavToZero();

AnimateOnScroll.on();