const homemadeForEach = (array, action) => {
  for (const element of array) {
    action(element);
  }
};

const todoManager = () => {
  const todoList = [];

  const showTodos = () => console.log(todoList);

  const addTodo = (value) => todoList.push(value);

  return { showTodos, addTodo };
};

const nicksTodos = todoManager();
const hugosTodos = todoManager();

hugosTodos.addTodo("Being busy");
hugosTodos.addTodo("Being very busy");

hugosTodos.showTodos(); // ["busy","very busy"]
nicksTodos.showTodos(); // []

// Difference between for..of and forEach

// Can't return in forEach?

const someArray = [1, 3, 5, 7, 9, 11, 12, 15, 17];

const addOddNumbers = (list) => {
  const output = [];
  for (const number of someArray) {
    if (number % 2 === 0) {
      console.log("stopped because an even number was found");
      return output;
    }
    output.push(number);
  }
  return output;
};

const addOddNumbersFE = (list) => {
  const output = [];
  list.forEach((number) => {
    if (number % 2 === 0) {
      console.log("stopped because an even number was found");
      return output;
    }
    output.push(number);
  });
  return output;
};

// const result1 = addOddNumbers(someArray);
// console.log(result1);

// const result2 = addOddNumbersFE(someArray);
// console.log(result2);

// const cheapMap = (array, modifierAction) => {
//   const output = [];

//   for (const value of array) {
//     const newValue = modifierAction(value);
//     output.push(newValue);
//   }

//   console.log(output);
//   return output;
// };

// const someNumbers = [1, 2, 3, 4, 5];

// const multiplyBy = (value, multiplier) => value * multiplier;

// // const multiplyByFive = (value) => multiplyBy(value, 5);
// // const multiplyByFive = (value) => multiplyBy(value, 5);
// // const multiplyByFive = (value) => multiplyBy(value, 5);
// // const multiplyByFive = (value) => multiplyBy(value, 5);

// cheapMap(someNumbers, (number) => number * number);
// cheapMap(someNumbers, multiplyByFive);
// cheapMap(someNumbers, (value) => multiplyBy(value, 5));
// cheapMap(someNumbers, (value) => multiplyBy(value, 55));
// cheapMap(someNumbers, (value) => multiplyBy(value, 15));
// cheapMap(someNumbers, (value) => multiplyBy(value, 0.5));

// for (let i = 0; i < 5; i++) {
//   cheapMap(someNumbers, (value) => multiplyBy(value, i));
// }

// const fs = require("fs");

// const logToConsole = (value) => {
//   console.log(value);
// };

// const logToFile = (value) => {
//   fs.writeFileSync("./log.txt", value);
// };

// const logEvents = (action) => {
//   setInterval(() => {
//     const value = `"NOTHING HAPPENED" ${new Date().toISOString()}`;

//     action(value);
//   }, 3000);
// };

// const listUsers = (action) => {
//   const users = ["Nick", "Simran", "Kyra"];

//   for (const user of users) {
//     action(user);
//   }
// };

// logEvents(logToFile);
// listUsers(logToFile)

// someArray.forEach()
// someArray.map()
// someArray.filter()
// someArray.reduce()
// someArray.find()
// someArray.findIndex()

const countdownGenerator = function (initialTime) {
  let timeRemaining = initialTime;

  const countdown = () => {
    if (timeRemaining > 0) {
      console.log(timeRemaining, "...");
      return timeRemaining--;
    }

    if (timeRemaining === 0) {
      console.log("AHHH YISSSS");
      return timeRemaining--;
    }

    if (timeRemaining < 0) {
      return console.log("WHAT.");
    }
  };

  return countdown;
};

console.log("SPACE RACE BEGINS :D :D :D");

const redCountdown = countdownGenerator(3);
const blueCountdown = countdownGenerator(3);

redCountdown(); // T-minus 3...
redCountdown(); // T-minus 3...
blueCountdown();
blueCountdown();
blueCountdown();
blueCountdown();

const arrArr = [
  [1, 2, 3],
  [1, 2, 3],
];

arrArr.forEach((arr) => {
  arr.forEach((value) => {
    console.log(value);
  });
});

("She was waiting for her mother at the station in Torino and you know I love you baby but it's getting to heavy to laugh");
