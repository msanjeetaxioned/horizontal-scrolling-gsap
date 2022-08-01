const mainContainer = document.querySelector(".main-container");
const extraLongContainer = mainContainer.querySelector(".extra-long-container");
const horizontalCoordinate = mainContainer.querySelector(".horizontal-coordinate");

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

gsap.registerPlugin(ScrollTrigger);
const t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".box1",
        start: "left 70%",
        end: "left 20%",
        horizontal: true,
        scrub: true,
        // markers: true
    },
});

t1.to(".box1", {
    scale: 2,
    rotation: 360,
    duration: 3
});