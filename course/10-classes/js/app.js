// const person1 = {
//   name: "Arturs",
//   age: 23,
//   email: "arturs@gmail.com",
//   getInfo: function () {
//     return `Hey, my name is ${this.name} I'm ${this.age} old. Contact me via ${this.email}`;
//   },
// };

// const person2 = {
//   name: "Janis",
//   age: 30,
//   email: "janis@gmail.com",
//   getInfo: function () {
//     return `Hey, my name is ${this.name} I'm ${this.age} old. Contact me via ${this.email}`;
//   },
// };

// const person3 = {
//   name: "Tatjana",
//   age: 35,
//   email: "tatjana@gmail.com",
//   getInfo: function () {
//     return `Hey, my name is ${this.name} I'm ${this.age} old. Contact me via ${this.email}`;
//   },
// };

// person1.getInfo();
// person2.getInfo();
// person3.getInfo();

// class Person {
//   constructor(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;

//     this.info = this.getInfo();
//   }

//   getInfo() {
//     return `Hey, my name is ${this.name} I'm ${this.age} old. Contact me via ${this.email}`;
//   }
// }

// const person1 = new Person("Arturs", 23, "arturs@gmail.com");
// const person2 = new Person("Janis", 30, "janis@gmail.com");
// const person3 = new Person("Tatjana", 35, "tatjana@gmail.com");

// console.log(person1.info);
// console.log(person2.info);
// console.log(person3.info);

// class Car {
//   constructor(name, model, fuelType) {
//     this.name = name;
//     this.model = model;
//     this.fuelType = fuelType;
//   }

//   getInfo() {
//     return `My car is ${this.name} ${this.model} - ${this.fuelType}`;
//   }
// }

// class Audi {
//   constructor(model, fuelType) {
//     this.name = "Audi";
//     this.model = model;
//     this.fuelType = fuelType;
//   }

//   getInfo() {
//     return `My car is ${this.name} ${this.model} - ${this.fuelType}`;
//   }
// }

// class Tesla {
//     constructor(model, fuelType) {
//       this.name = "Tesla";
//       this.model = model;
//       this.fuelType = fuelType;
//     }

//     getInfo() {
//       return `My car is ${this.name} ${this.model} - ${this.fuelType}`;
//     }
//   }

// const audiA3 = new Car("audi", "a3", "diesel");

// console.log(audiA3.getInfo());

// uztais??t Animal klasi ar parametriem: dz??vnieks, name, age, weight

// class Animal {
//   constructor(species, name, gender, age, weight) {
//     this.species = species;
//     this.name = name;
//     this.gender = gender;
//     this.age = age;
//     this.weight = weight;
//   }

//   getInfo() {
//     return `I'm owner of a ${this.species} named ${
//       this.name
//     }. ${this.getGender()} is ${this.age} years old with ${
//       this.weight
//     } kg weight`;
//   }

//   getGender() {
//     return this.gender === "male" ? "He" : "She";
//   }
// }

// const cat = new Animal("cat", "Minka", "female", 3, 7);
// const dog = new Animal("dog", "Rekss", "male", 5, 20);

// console.log(cat.getInfo());
// console.log(dog.getInfo());

class User {
  constructor(role, name, email) {
    this.role = role;
    this.name = name;
    this.email = email;

    this.editPermissions = this.getEditPermission();
  }

  getInfo() {
    return `${this.role} - ${this.name}`;
  }

  getEditPermission() {
    if (this.role === "Admin" || this.role === "Moderator") {
      return true;
    }

    return false;
  }
}

class Basic extends User {
  constructor(name, email, avatar) {
    super("Basic", name, email);

    this.avatar = avatar ?? "https://image-placeholder.com";
  }

  getCard() {
    return `you have 10 products in your card`;
  }

  getAvatar() {
    return this.avatar;
  }

  setAvatar(url) {
    this.avatar = url;
  }
}

class Guest extends Basic {
  constructor() {
    super("", "", "");
  }
}

const newBasicUser = new Basic("Janis Briska", "janis@1a.lv");

const newGuestUser = new Guest();
