const heading = document.querySelector("#loop-heading");
// console.log(heading);

let text = "Web Developer";
let lastText = 1;
let isFroward = true;
const id = setInterval(() => {
  heading.textContent = text.substring(0, lastText);
  if (isFroward) {
    lastText++;
  } else {
    lastText--;
  }
  //   console.log(lastText);
  if (lastText > text.length + 5) {
    isFroward = false;
  }
  if (lastText < 0) {
    isFroward = text;
  }
}, 100);
