const input = document.getElementById("input");
// console.log(input);

const output = document.getElementsByClassName("output");
// console.log(output);

// input.addEventListener("input", (evt) => {
// output[0].innerText = evt.target.value;
// });

input.addEventListener("input", (evt) => {
  Array.from(output).forEach((singleElem) => {
    singleElem.innerText = evt.target.value;
  });
});

const tags = document.getElementsByTagName("p");
// console.log(tags);

const firstDivP = document.querySelector("div > p");
// console.log(firstDivP);

const allDivP = document.querySelectorAll("div > p");
// console.log(allDivP);

const button = document.getElementById("submit-button");

// setTimeout(() => {
//   button.click();
// }, 1000);

button.addEventListener("click", () => {
  console.log("test");
});
