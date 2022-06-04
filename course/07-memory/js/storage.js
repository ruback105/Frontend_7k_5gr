// let myUsername = localStorage.getItem("username");
// let myEmail = localStorage.getItem("email");
// let myPassword = localStorage.getItem("password");
// let myHobby = localStorage.getItem("hobby");

// const usernameElement = document.querySelector("#username > span");
// const emailElement = document.querySelector("#email > span");
// const passwordElement = document.querySelector("#password > span");
// const hobbyElement = document.querySelector("#hobby > span");

// if (!myUsername) {
//   myUsername = "arturs";
//   localStorage.setItem("username", myUsername);
// }

// if (!myEmail) {
//   myEmail = "arturs.pusko@gmail.com";
//   localStorage.setItem("email", myEmail);
// }

// if (!myPassword) {
//   myPassword = "Super secure password";
//   localStorage.setItem("password", myPassword);
// }

// if (!myHobby) {
//   myHobby = "sports";
//   localStorage.setItem("hobby", myHobby);
// }

// usernameElement.innerText = myUsername;
// emailElement.innerText = myEmail;
// passwordElement.innerText = myPassword;
// hobbyElement.innerText = myHobby;

// Initial persion object
const elements = {
  username: "arturs",
  email: "arturs.pusko@gmail.com",
  password: "Super secure password",
  hobby: "sports",
  age: "23",
};

// Get local storage value by key "person" and parse it
let localStorageValue = JSON.parse(localStorage.getItem("person"));

// if local storage was empty
if (!localStorageValue) {
  localStorageValue = elements; // set local storage value fallback
  localStorage.setItem("person", JSON.stringify(elements)); // set stringified values to local storage
}

// go over each object key
Object.keys(localStorageValue).forEach((element) => {
  const htmlElement = document.querySelector(`#${element} > span`); // get each html element by key
  htmlElement.innerText = localStorageValue[element]; // set local storage value to the frontend
});
