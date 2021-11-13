const circles = document.querySelectorAll('.main-circle');

const setCircleInitXPosition = (circle) => {
    const START_WIDTH = 24;
    const windowWidth = window.innerWidth;
    const circleLeftPosition = Math.random() * windowWidth - START_WIDTH;
    circle.style.left = `${circleLeftPosition}px`;
};

circles.forEach(setCircleInitXPosition);