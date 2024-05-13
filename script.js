let tl = gsap.timeline();

tl.from(".logo",{
    opacity:0,
    y:-25,
    duration:1
})


tl.from("h4",{
    opacity:0,
    y:-25,
    duration:1,
    stagger:0.2
})

tl.to("h1",{
    scale:1.5
})
