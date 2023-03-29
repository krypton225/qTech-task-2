import HeaderSwiper from "./HeaderSwiper.js";
import SecondSwiper from "./SecondSwiper.js";
import Toggler from "./Toggler.js";
import Scroll from "./Scroll.js";

HeaderSwiper.on();
SecondSwiper.on();

Toggler.click("navbar-toggler", "#navbar-toggler span");

Scroll.setNavToZero();