let testimonials = document.getElementById("testimonials");
let control1 = document.getElementById("control1");
let control2 = document.getElementById("control2");
let control3 = document.getElementById("control3");
let control4 = document.getElementById("control4");

control1.addEventListener("click", function () {
    testimonials.style.transform = "translateX(950px)";
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control4.classList.remove("active");
})

control2.addEventListener("click", function () {
    testimonials.style.transform = "translateX(0px)";
    control1.classList.remove("active");
    control2.classList.add("active");
    control3.classList.remove("active");
    control4.classList.remove("active");
})

control3.addEventListener("click", function () {
    testimonials.style.transform = "translateX(-940px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
    control4.classList.remove("active");
})

control4.addEventListener("click", function () {
    testimonials.style.transform = "translate(-1880px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control4.classList.add("active");
})