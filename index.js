const getY = (element) => {
  const height = element.clientHeight;
  const maxScrollSpeed = -300;
  const minScrollSpeed = -10;
  const referenceHeight = 500;
  return (
    maxScrollSpeed +
    (height / referenceHeight) * (minScrollSpeed - maxScrollSpeed)
  );
};

document.querySelectorAll(".waterfall_image").forEach((image) => {
  gsap.to(image, {
    y: getY(image),
    ease: "none",
    scrollTrigger: {
      trigger: image,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
});
