const Counter = (function () {
    function fire(sectionID, allItems = []) {
        if (sectionID === undefined || sectionID === null || sectionID === "") {
            throw new Error("You must pass the section ID.");
        }

        if (allItems === undefined) {
            throw new Error("You must pass the items.");
        }

        allItems.forEach((item) => {
            const countNumber = parseInt(+item.dataset.count);

            const intervalValue = setInterval(() => {
                if (window.scrollY >= document.getElementById("achievements").offsetTop - 250) {
                    item.textContent++;

                    if (parseInt(item.textContent) === countNumber) {
                        clearInterval(intervalValue);
                        item.textContent += `+`;
                    }
                }
            }, 5);
        });
    }

    return {
        on: fire
    };
})();

export default Counter;