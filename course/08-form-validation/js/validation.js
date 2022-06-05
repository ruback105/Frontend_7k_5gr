const submitBtn = document.getElementById("submit-button");
const inputFields = document.querySelectorAll("form input");

// object, that contains validation rules for all input fields
const inputValidation = {
  // username validation
  username: (inputField) => {
    const isValid =
      inputField.value.length >= 5 && inputField.value.length <= 20; // is valid condition

    let errorMsg = "";

    // error message
    if (!inputField.value) {
      // required validation
      errorMsg = "Input field is required";
    } else if (inputField.value.length < 5) {
      // min length validation
      errorMsg = "Min input length is 5";
    } else if (inputField.value.length > 20) {
      // max length validation
      errorMsg = "Max input length is 20";
    }

    return { isValid, errorMsg }; // return multiple variables as object
  },
  // email validation
  email: (inputField) => {
    const regEx =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/; // regex expression for email test

    const isValid = regEx.test(inputField.value); // is valid condition

    return { isValid, errorMsg: !isValid ? "Doesn't match email pattern" : "" }; // return multiple variables as object
  },
  // age validation
  age: (inputField) => {
    const isValid =
      Number(inputField.value) >= 16 && Number(inputField.value) <= 99; // is valid condition

    let errorMsg = "";

    // error message
    if (!inputField.value) {
      // required validation
      errorMsg = "Input field is required";
    } else if (Number(inputField.value) < 16) {
      // min validation
      errorMsg = "Min age is 16";
    } else if (Number(inputField.value) > 99) {
      // max validation
      errorMsg = "Max age is 99";
    }

    return { isValid, errorMsg }; // return multiple variables as object
  },
};

// function that sets input field styles and inserts error message
const setValidity = (inputField, errorMsg, isValid) => {
  const parentDiv = inputField.parentElement; // get input wrapper element

  const errorElement = document.createElement("p"); // create paragraph for error message
  errorElement.classList.add("error", inputField.name); // add classes to paragraph
  errorElement.innerText = errorMsg; // insert error message inside the paragraph

  // if valid
  if (isValid) {
    inputField.classList.remove("invalid"); // remove invalid class name
    inputField.classList.add("valid"); // add valid class name
  }
  // if not valid
  else {
    inputField.classList.remove("valid"); // remove valid class name
    inputField.classList.add("invalid"); // add invalid class name

    // if error message doesnt exist
    if (!parentDiv.innerHTML.includes("error")) {
      parentDiv.append(errorElement); // append error in input wrapper
    }
  }
};

// on submit handler
const onSubmit = (e) => {
  e.preventDefault(); // prevent default form submission

  // for each input field
  inputFields.forEach((inputField) => {
    const { isValid, errorMsg } = inputValidation[inputField.name](inputField); // get validation and message for current input in for each iteration

    setValidity(inputField, errorMsg, isValid); // set validity based on validation result
  });
};

// call onSubmit function on button click
submitBtn.addEventListener("click", onSubmit);

// for each input field we need to remove validation states, because input changes values and it doesn't make sense to show error/sucessful states
inputFields.forEach((inputField) => {
  // add input event listener (triggers on input change for each input field)
  inputField.addEventListener("input", () => {
    // cleanup
    const errorElement = document.querySelector(`.error.${inputField.name}`);
    errorElement.remove(); // remove error message

    inputField.classList.remove("invalid"); // remove invalid class
    inputField.classList.remove("valid"); // remove valid class
  });
});
