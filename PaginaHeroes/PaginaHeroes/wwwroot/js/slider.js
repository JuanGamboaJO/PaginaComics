window.onload=function () {
    const slider = document.querySelector("#slider");
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];

    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    function rigth() {
        let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
        setTimeout(function () {
            slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        }, 500);
    }

    setInterval(function () {
        rigth();
    }, 4000);

}