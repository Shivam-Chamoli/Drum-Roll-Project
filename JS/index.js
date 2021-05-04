let controller= new ScrollMagic.Controller();
let timeline= new TimelineMax();

timeline.to(".rock1",5,{y:-300})
.to(".girl1",5,{y:-300},"-=5")
.to(".main-title",5,{opacity:.2},"-=5")
.fromTo(".bg1", {y:-50},{y:0, duration: 5},"-=5")
.to(".content",5,{top:"0%"},"-=5")
.fromTo(".content-img", { opacity: 0.1 }, { opacity: 1, duration: 5 })
.fromTo(".content p", { opacity: 0.1 }, { opacity: 1, duration: 2 });

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "200%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);