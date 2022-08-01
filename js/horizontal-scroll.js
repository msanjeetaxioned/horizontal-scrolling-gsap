gsap.registerPlugin(ScrollTrigger);

const body = document.querySelector("body");
const mainContainer = body.querySelector(".main-container");
const extraLongContainer = mainContainer.querySelector(".extra-long-container");
const horizontalCoordinate = body.querySelector(".horizontal-coordinate");

const onScroll = (event) => {
    const delta = Math.sign(event.deltaY);

    if(delta == 1) {
        mainContainer.scrollLeft = mainContainer.scrollLeft + 20;
    } else {
        mainContainer.scrollLeft = mainContainer.scrollLeft - 20;
    }
    horizontalCoordinate.innerText = "x: " + mainContainer.scrollLeft;
}

document.addEventListener("wheel", onScroll);

let scrollTween = gsap.to(".main-container", {
    xPercent: -100,
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".main-container",
      start: "left left",
      end: () => "+=" + extraLongContainer.offsetWidth,
      scrub: 1
    }
});

const t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".box1",
        start: "left 70%",
        end: "left 20%",
        scrub: 1,
        containerAnimation: scrollTween,
        markers: true
    },
});

t1.to(".box1", {
    scale: 2,
    rotation: 360,
    duration: 3
});