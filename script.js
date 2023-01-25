const sides = document.querySelectorAll(".input-btn");
const areaBtn = document.querySelector("#area-btn");
const outputE1 = document.querySelector("#output");

function calculateArea() {
  const area = 0.5 * (Number(sides[0].value) * Number(sides[1].value));
  outputE1.innerText = "Area of Triangle is " + area;
}
areaBtn.addEventListener("click", calculateArea);

// function calculateArea() {
//   const area = 0.5 * 2 * 2;
//   console.log(area);
// }
