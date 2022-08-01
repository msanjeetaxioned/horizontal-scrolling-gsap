gsap.registerPlugin(ScrollTrigger);

const body = document.querySelector("body");
const mainContainer = body.querySelector(".main-container");
const extraLongContainer = mainContainer.querySelector(".extra-long-container");

let scrollTween = gsap.to(".extra-long-container", {
    xPercent: -100,
    x: () => window.innerWidth,
    ease: "none",
    scrollTrigger: {
        trigger: ".extra-long-container",
        start: "top top",
        end: () => "+=" + extraLongContainer.offsetWidth + "px",
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1
    }
});

const t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".square1",
        start: "left 70%",
        end: "left 20%",
        scrub: 1,
        containerAnimation: scrollTween,
        markers: true
    },
});

t1.to(".square1", {
    scale: 2,
    rotation: 360,
    duration: 3
});