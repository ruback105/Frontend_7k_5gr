// // Function with return:
// const sum = (param1, param2) => {
//   return param1 + param2;
// };

// const result = sum(1, 2);

// console.log(result);

// console.log(sum(-100, 200));

// // Function with external element:
// let result = 0;

// const sum = (param1, param2) => {
//   result = param1 + param2;
// };

// sum(100, -1000); // -900
// sum(14, 123); // 137
// sum(1, -3); // -2

// console.log(result);

// // Function to format email
// const emails = [
//   "  test@Email.com ",
//   "new_email@Gmail.com  ",
//   "TesT@email.com  ",
//   123,
//   "  hello@world.com  ",
//   "  hello1@woRld.com  ",
//   NaN,
//   "  hello2@woRld.com  ",
//   true,
//   "  hello3@woRld.com  ",
//   undefined,
//   "  hello4@woRld.com  ",
// ];

// const formattedEmails = [];

// const formatEmail = (email) => {
//   try {
//     return email.toLocaleLowerCase().trim();
//   } catch (error) {
//     console.warn(error);
//   }

//   return null;
// };

// emails.forEach((email) => {
//   const result = formatEmail(email);
//   if (result) {
//     formattedEmails.push(result);
//   }
// });

// console.log(formattedEmails);

// izveidot reizināšanas funkciju ar return

/*  ---------------  */

// const nameArray = ["Vards", "2 Vards", "Uzvards"];
// let name = "";

// izveidot funkciju, kas apvieno 2 vardus kopā

// iterēties cauri masīvam, lai apvienotu visus vārdus

// console.log(name); // "Vards 2 Vards Uzvards"
