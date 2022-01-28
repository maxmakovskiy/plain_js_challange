(function() {
    "use strict";

    var colorPeaker;
    var blurSlider;
    var spacingSlider;

    function computeDefaultColor() {
        let style = getComputedStyle(document.body);
        return style.getPropertyValue("--basecolor");
    }

    function computeDefaultBlur() {
        let style = getComputedStyle(document.body);
        return style.getPropertyValue("--blur");
    }

    function computeDefaultSpace() {
        let style = getComputedStyle(document.body);
        return style.getPropertyValue("--spacing");
    }

    function handleUpdate() {
        // Normalize this.value for bluring to 1..10px

        let normalizedValue = this.value;
        if (this.name === "blur") {
            normalizedValue = this.value / 10;
        }

        // For slider this value will be 'px'
        // but for color peaker this doesn't have desired option
        const units = this.dataset.sizingUnit || "";
        document.documentElement.style.setProperty(`--${this.name}`, normalizedValue + units);
    }

    function init_controls() {
        colorPeaker = document.querySelector("#peaker");
        colorPeaker.value = computeDefaultColor();
        colorPeaker.addEventListener("change", handleUpdate);

        blurSlider = document.querySelector("#blur_slider");
        blurSlider.value = computeDefaultBlur();
        blurSlider.addEventListener("change", handleUpdate);
        blurSlider.addEventListener("mousemove", handleUpdate)

        spacingSlider = document.querySelector("#spacing_slider");
        spacingSlider.value = computeDefaultSpace();
        spacingSlider.addEventListener("change", handleUpdate);
        spacingSlider.addEventListener("mousemove", handleUpdate)
    }


    window.addEventListener("load", init_controls);
})();