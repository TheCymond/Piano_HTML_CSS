const whiteKeys = document.querySelectorAll(".white-key");
const blackKeys = document.querySelectorAll(".black-key");

blackKeys.forEach((black, index) => {
  black.addEventListener("mouseenter", () => {
    let sound = new Audio(`./sounds/black-keys/${index}.mp3`);
    playSound(sound);
  });
});

whiteKeys.forEach((white, index) => {
  white.addEventListener("mouseenter", () => {
    let sound = new Audio(`./sounds/white-keys/${index}.mp3`);
    playSound(sound);
  });
});

function playSound(sound) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}

// Add keys

// Use Keys !

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");
const eleven = document.getElementById("eleven");
const twelve = document.getElementById("twelve");
const thirteen = document.getElementById("thirteen");
const fourteen = document.getElementById("fourteen");
const fifteen = document.getElementById("fifteen");
const sixteen = document.getElementById("sixteen");
const seventeen = document.getElementById("seventeen");
const eighteen = document.getElementById("eighteen");
const nineteen = document.getElementById("nineteen");
const twenty = document.getElementById("twenty");
const twentyone = document.getElementById("twentyone");

addEventListener("keyup", (e) => {
  if (e.key === "a") {
    one.classList.remove("white-active");
  }
  if (e.key === "s") {
    two.classList.remove("white-active");
  }
  if (e.key === "d") {
    three.classList.remove("white-active");
  }
  if (e.key === "f") {
    four.classList.remove("white-active");
  }
  if (e.key === "g") {
    five.classList.remove("white-active");
  }
  if (e.key === "h") {
    six.classList.remove("white-active");
  }
  if (e.key === "j") {
    seven.classList.remove("white-active");
  }
  if (e.key === "k") {
    eight.classList.remove("white-active");
  }
  if (e.key === "l") {
    nine.classList.remove("white-active");
  }
  if (e.key === ";") {
    ten.classList.remove("white-active");
  }
  if (e.key === "'") {
    eleven.classList.remove("white-active");
  }
  if (e.key === "z") {
    twelve.classList.remove("white-active");
  }
  if (e.key === "x") {
    thirteen.classList.remove("white-active");
  }
  if (e.key === "c") {
    fourteen.classList.remove("white-active");
  }
  if (e.key === "v") {
    fifteen.classList.remove("white-active");
  }
  if (e.key === "b") {
    sixteen.classList.remove("white-active");
  }
  if (e.key === "n") {
    seventeen.classList.remove("white-active");
  }
  if (e.key === "m") {
    eighteen.classList.remove("white-active");
  }
  if (e.key === ",") {
    nineteen.classList.remove("white-active");
  }
  if (e.key === ".") {
    twenty.classList.remove("white-active");
  }
  if (e.key === "/") {
    twentyone.classList.remove("white-active");
  }
});

addEventListener("keydown", (e) => {
  if (e.key === "a") {
    one.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/0.mp3"));
  }

  if (e.key === "s") {
    two.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/1.mp3"));
  }
  if (e.key === "d") {
    three.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/2.mp3"));
  }
  if (e.key === "f") {
    four.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/3.mp3"));
  }
  if (e.key === "g") {
    five.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/4.mp3"));
  }
  if (e.key === "h") {
    six.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/5.mp3"));
  }
  if (e.key === "j") {
    seven.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/6.mp3"));
  }
  if (e.key === "k") {
    eight.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/7.mp3"));
  }
  if (e.key === "l") {
    nine.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/8.mp3"));
  }

  if (e.key === ";") {
    ten.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/9.mp3"));
  }
  if (e.key === "'") {
    eleven.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/10.mp3"));
  }
  if (e.key === "z") {
    twelve.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/11.mp3"));
  }
  if (e.key === "x") {
    thirteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/12.mp3"));
  }
  if (e.key === "c") {
    fourteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/13.mp3"));
  }
  if (e.key === "v") {
    fifteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/14.mp3"));
  }
  if (e.key === "b") {
    sixteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/15.mp3"));
  }
  if (e.key === "n") {
    seventeen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/16.mp3"));
  }
  if (e.key === "m") {
    eighteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/17.mp3"));
  }
  if (e.key === ",") {
    nineteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/18.mp3"));
  }
  if (e.key === ".") {
    twenty.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/19.mp3"));
  }
  if (e.key === "/") {
    twentyone.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/20.mp3"));
  }
});
