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
// const t1 = gsap.timeline({
    
//     paused: true
// });

gsap.to(".flower1", {
    scrollTrigger: {
        trigger: ".flower1",
        start: "left center",
        scrub: true,
        // toggleActions: "play pause reverse pause",
        markers: true
    },
    scale: 2,
    rotation: 360,
    duration: 3,
    paused: true
});