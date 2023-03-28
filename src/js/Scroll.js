const Scroll = (function () {
    function setNavbarTopWithZero() {
        const navbar = document.getElementById("navbar");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                navbar.classList.add("active");
            } else if (window.scrollY <= 80) {
                navbar.classList.remove("active");
            }
        });
    }

    return {
        setNavToZero: setNavbarTopWithZero
    };
})();

export default Scroll;