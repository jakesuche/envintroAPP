import anime from "animejs";
export function cardAnime(el) {
  console.log(el);

  anime({
    targets: el,
    scale: [0.8, 1],
    opacity: [0.6, 1],
    easing: "easeOutExpo",
    delay: 300,
  });
}

export function imageRotate(el) {
  anime({
    targets: el,
    rotateY: "360",
    easing: "linear",
    loop: true,
    duration: 1000,
    run: (anim) =>
      anim.progress === 100 &&
      newSpeed !== void 0 &&
      ((anime.speed = newSpeed), (newSpeed = void 0)),
  });
}
