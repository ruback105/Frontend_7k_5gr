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