const circles = document.querySelectorAll('.main-circle');

const setCircleInitXPosition = (circle) => {
    const START_WIDTH = 24;
    const windowWidth = window.innerWidth;
    const circleLeftPosition = Math.random() * windowWidth - START_WIDTH;
    circle.style.left = `${circleLeftPosition}px`;
};

circles.forEach(setCircleInitXPosition);

/*const setCircleMoveSpeed = (circle) => {
    const circleMoveSpeed = -1 - Math.random();
    circle.dataset.speed = circleMoveSpeed;
};

circles.forEach(setCircleMoveSpeed);

window.addEventListener('scroll', () => {
    const scrollPositionY = window.pageYOffset;
    const parallaxScrollingElements = [circles];

    parallaxScrollingElements.forEach((element) => {
        const elementMoveSpeed = Number(element.dataset.speed);
        element.style.transform = `
        translateY(${scrollPositionY * elementMoveSpeed}px)
      `;
    });
});*/

var controller = new ScrollMagic.Controller();

// build tween
var tween = TweenMax.to("#animate", 0.5, { scale: 1.3, repeat: 5, yoyo: true });

// build scene and set duration to window height
var scene = new ScrollMagic.Scene({ triggerElement: "#trigger", duration: "100%" })
    .setTween(tween)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);