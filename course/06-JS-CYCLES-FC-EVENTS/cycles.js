// const numberArray = [
//   3.1245124, 3.14, 5.31523, 324.546456, 0.3245234534, 6.23425, 10000.3242526,
//   9.999999, 10,
// ];

// const fixedNumberArray = [];

// fixedNumberArray[0] = numberArray[0].toFixed(2);
// fixedNumberArray[1] = numberArray[1].toFixed(2);
// fixedNumberArray[2] = numberArray[2].toFixed(2);
// fixedNumberArray[3] = numberArray[3].toFixed(2);

// for (let numberIndex = 0; numberIndex < numberArray.length; numberIndex++) {
//   //   console.log(`current index: ${numberIndex}  -  current item: ${numberArray[numberIndex]}`);

//   if (numberArray[numberIndex] >= 10) {
//     continue;
//   }

//   fixedNumberArray.push(numberArray[numberIndex].toFixed(2));
//   lots of code
// }

// numberArray.forEach((item) => {
//   if (item < 10) {
//     fixedNumberArray.push(item.toFixed(2));
//   }
//   // lots of code
// });

// console.log(fixedNumberArray);

const emails = [
  "  test@Email.com ",
  "new_email@Gmail.com  ",
  "TesT@email.com  ",
  "  hello@world.com  ",
  "  hello1@woRld.com  ",
  "  hello2@woRld.com  ",
  "  hello3@woRld.com  ",
  "  hello4@woRld.com  ",
];

// For cycle example
let formattedEmails = [];

for (let i = 0; i < emails.length; i++) {
  formattedEmails.push(emails[i].trim().toLocaleLowerCase());
}

console.log(formattedEmails);

// Foreach cycle example
formattedEmails = [];

emails.forEach((email) => {
  formattedEmails.push(email.trim().toLocaleLowerCase());
});

console.log(formattedEmails);

// Map cycle example
const returnValue = emails.map((email) => email.toLocaleLowerCase().trim());

console.log(returnValue);
