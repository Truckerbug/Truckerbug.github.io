let start = new Date().getTime();

const originPosition = { x: 0, y: 0 };

const last = {
  starTimestamp: start,
  starPosition: originPosition,
  mousePosition: originPosition
};

const config = {
  // ... other configuration options (unchanged)
};

let count = 0;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
      selectRandom = items => items[rand(0, items.length - 1)];

const withUnit = (value, unit) => `${value}${unit}`,
      px = value => withUnit(value, "px"),
      ms = value => withUnit(value, "ms");

const calcDistance = (a, b) => {
  const diffX = b.x - a.x,
        diffY = b.y - a.y;

  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

const calcElapsedTime = (start, end) => end - start;

const appendElement = element => document.body.appendChild(element),
      removeElement = (element, delay) => setTimeout(() => document.body.removeChild(element), delay);

const createStar = position => {
  const star = document.createElement("span");

  star.className = "star"; // Remove "fa-solid fa-sparkle" class for emoji
  star.textContent = "⭐"; // Set the content to the star emoji

  star.style.left = px(position.x);
  star.style.top = px(position.y);
  star.style.fontSize = selectRandom(config.sizes);
  star.style.color = `rgb(${selectRandom(config.colors)})`;
  star.style.textShadow = `0px 0px 1.5rem rgb(${selectRandom(config.colors)} / 0.5)`;
  star.style.animationName = config.animations[count++ % 3];
  star.style.animationDuration = ms(config.starAnimationDuration);

  appendElement(star);

  removeElement(star, config.starAnimationDuration);
};

const handleOnMove = e => {
  const mousePosition = { x: e.clientX, y: e.clientY };

  // ... existing code for trail creation (unchanged)

  if (calcElapsedTime(last.starTimestamp, new Date().getTime()) > config.minimumTimeBetweenStars) {
    createStar(mousePosition);
    last.starTimestamp = new Date().getTime();
  }

  last.mousePosition = mousePosition;
};

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

document.body.onmouseleave = () => last.mousePosition = originPosition;
