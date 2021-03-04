// const flipFunction = () => {
//   let flipBack = false;
//   if ((flipBack = true)) {
//     document.querySelector(".demo").onclick = function changeContent() {
//       document.querySelector(".demo").textContent = "Blue now lol";
//       document.querySelector(".demo").style = "Color: blue";
//       flipBack = !flipBack;
//     };
//   } else {
//     document.querySelector(".demo").onclick = function changeContent() {
//       document.querySelector(".demo").textContent = "Click me";
//       document.querySelector(".demo").style = "Color: black";
//     };
//   }
// };

// document.querySelector(".demo").onclick = function changeContent() {
//   document.querySelector(".demo").textContent = "Blue now lol";
//   document.querySelector(".demo").style = "Color: blue";
// };

const flipFunction = () => {
  let flipBack;
  if ((flipBack = 1)) {
    document.querySelector(".demo").textContent = "Blue now lol";
    document.querySelector(".demo").style = "Color: blue";
    flipBack = !flipBack;
  } else {
    document.querySelector(".demo").textContent = "Click me";
    document.querySelector(".demo").style = "Color: black";
  }
};

document.querySelector(".demo").onclick = flipFunction();
