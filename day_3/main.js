(function() {
    "use strict";

    var colorPeaker;
    var blurSlider;
    var spacingSlider;

    function computeDefaultColor() {
        let style = getComputedStyle(document.body);
        return style.getPropertyValue("--base_color");
    }

    function computeDefaultBlur() {
        let style = getComputedStyle(document.body);
        return style.getPropertyValue("--blur-value");
    }

    function computeDefaultSpace() {
        let style = getComputedStyle(document.body);
        return style.getPropertyValue("--spacing-value");
    }

    function handleUpdate() {
        console.log(this.value);
    }

    function init_controls() {
        colorPeaker = document.querySelector("#peaker");
        colorPeaker.value = computeDefaultColor();
        colorPeaker.addEventListener("change", handleUpdate);

        blurSlider = document.querySelector("#blur_slider");
        blurSlider.value = computeDefaultBlur();
        blurSlider.addEventListener("change", handleUpdate);

        spacingSlider = document.querySelector("#spacing_slider");
        spacingSlider.value = computeDefaultSpace();
        spacingSlider.addEventListener("change", handleUpdate);
    }


    window.addEventListener("load", init_controls);
})();