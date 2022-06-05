
// if (darbaDiena === 'Pirmdiena') {
//    console.log('1');
// } else if (darbaDiena === 'Otrdiena') {
//    console.log('2');
// } else if (darbaDiena === 'Trešdiena') {
//     console.log('3');
// } else if (darbaDiena === 'Ceturtdiena') {
//     console.log('4');
// } else if (darbaDiena === 'Piektdiena') {
//     console.log('5');
// } else if (darbaDiena === 'Sestdiena') {
//     console.log('6');
// } else if (darbaDiena === 'Svētdiena') {
//     console.log('7');
// } else {
//     console.log('Error');
// }

const getDayNumber = (darbaDiena) => {
switch (darbaDiena) {
    case "Pirmdiena":
       return 1;
    case "Otrdiena":
        return 2;
   case "Trešdiena":
        return 3;
    case "Cetutdiena":
        return 4;
    case "Piektdiena":
        return 5;
    case "Sestdiena":
        return 6;
    case "Svētdiena":
        return 7;
    default:        
        return "Error";
    }
};
console.log(getDayNumber("Sestdiena"))