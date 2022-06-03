const darbaDiena = "Otrdiena";

// if (darbaDiena === "Pirmdiena") {
//   console.log("1");
// } else if (darbaDiena === "Otrdiena") {
//   console.log("2");
// } else if (darbaDiena === "Trešdiena") {
//   console.log("3");
// } else if (darbaDiena === "Ceturtdiena") {
//   console.log("4");
// } else if (darbaDiena === "Piektdiena") {
//   console.log("5");
// } else if (darbaDiena === "Sestdiena") {
//   console.log("6");
// } else if (darbaDiena === "Svētdiena") {
//   console.log("7");
// } else {
//   console.log("Error");
// }

switch (darbaDiena) {
  case "Pirmdiena":
    console.log("1");
    return;
  case "Otrdiena":
    console.log("2");
    return;
  case "Trešdiena":
    console.log("3");
    return;
  case "Ceturtdiena":
    console.log("4");
    return;
  case "Piektdiena":
    console.log("5");
    return;
  case "Sestdiena":
    console.log("6");
    return;
  case "Svētdiena":
    console.log("7");
    return;
  default:
    return;
}
