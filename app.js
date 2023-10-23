// JavaScript 10
// Activity 01
let heading = document.querySelector("h1");
let btn = document.querySelector("button");
let para = document.querySelector("p");
let div = document.querySelector(".container div");

let randomColor = {
  r: () => Math.floor(Math.random() * 256),
  g: () => Math.floor(Math.random() * 256),
  b: () => Math.floor(Math.random() * 256),
  rgb: function () {
    return `rgb(${this.r()},${this.g()},${this.b()})`;
  },

  // another way to assign rgb color
  // rgb: () => `rgb(${randomColor.r()}, ${randomColor.g()}, ${randomColor.b()})`,
};

function assignColor() {
  const color = randomColor.rgb();
  div.style.backgroundColor = color;
  heading.innerText = `${color}`;
  heading.style.color = color;
}

btn.addEventListener("click", assignColor);
