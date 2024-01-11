gsap.to("#page2 h1",{
    transform: "translateX(-166%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0",
        end: "end -100%",
        pin: "#page2",
        scrub: 2
    }
})