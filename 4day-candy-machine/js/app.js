function sceneOne() {
  const tl = new TimelineMax({ repeat: -1 });

  tl.add("begin");
  tl.to(".bigLight", 2, {
    yoyo: true,
    fill: "yellow"
  }, "begin");

  tl.to(".smallLightOne", 1, {
    fill: "#9DC02E"
  }, "begin");

  tl.to(".smallLightTwo", 1, {
    fill: "yellow"
  });

  tl.to(".smallLightThree", 1, {
    fill: "#3393F6"
  });

  return tl;
}

function sceneTwo() {
  const tl = new TimelineMax({ repeat: -1, repeatDelay: 4 });
  tl.add("begin");

  tl.fromTo(".handLeft", 5, {
    rotation: -5,
    ease: Circ.easeOut
  }, {
    rotation: 0,
  }, "begin");

  tl.fromTo(".backCircleBack", 5, {
    transformOrigin:"50% 0",
    y: 40,
    opacity: 0,
    ease:Elastic.easeOut
  }, {
    opacity: 0.3,
    y: -5
  }, "begin");

  tl.fromTo(".backCircleFront", 5, {
    transformOrigin:"50% 0",
    y: 40,
    opacity: 0,
    ease:Elastic.easeOut
  }, {
    opacity: 0.6,
    y: -5
  }, "begin");

  tl.fromTo(".handRight", 5, {
    rotation: -7,
    ease: Circ.easeOut
  }, {
    rotation: 0,
  }, "begin");

  tl.fromTo(".back", 5, {
    scale: 0.3,
    y: -15,
    x: 20,
    transformOrigin:"50% 0",
    opacity: 0,
    ease: Circ.easeOut
  }, {
    y: 0,
    x: 0,
    opacity: 0.5,
    scale: 1,
  }, "begin");

  tl.fromTo(".candyTwo", 3, {
    scale: 0.7,
    transformOrigin:"50% 50%",
    opacity: 0,
    y: 5,
    ease: Circ.easeOut
  }, {
    scale: 1,
    y: -10,
    opacity: 1,
  }, "begin+=1");

  tl.fromTo(".candy", 1, {
    scale: 0.5,
    transformOrigin:"50% 50%",
    opacity: 0,
    rotation: -160,
    ease: Circ.easeOut
  }, {
    scale: 1,
    opacity: 1,
    rotation: 5,
  }, "begin+=4");

  return tl;
}

const master = new TimelineMax();
master.add(sceneOne(), "scene1")
      .add(sceneTwo(), "scene2");
