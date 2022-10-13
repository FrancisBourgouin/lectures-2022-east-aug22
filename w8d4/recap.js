// Javascript Classes

// Promise
// Error
// Date
// Object
// Array

// const newArray = new Array()

class Potato {
  constructor(name) {
    this.name = name;
    this.taste = "yummy";
  }

  sayHello = function () {
    console.log("Hi my name is: ", this.name);
  };

  throwMe = function () {
    console.log("AHHHHHHHH");

    console.log("SPLOUTCH");
  };
}

class SuperPotato extends Potato {
  constructor(name) {
    const coolName = `Super ${name}`;
    super(coolName);
  }

  throwMe = function () {
    console.log("AHHHHHHHH");

    console.log("SURPRISE! *FLIES AWAY*");
  };
}

// const yukon = new Potato("Yukon Gold");
// const russ = new Potato("Russett");

// console.log(yukon);
// yukon.sayHello();

// russ.sayHello();

// yukon.throwMe();

const yukon = new SuperPotato("Yukon Gold");

console.log(yukon);

yukon.throwMe();
