// Function takes data parameters to be reusable

const addTwoNumbers = function (num1, num2) {
  return num1 + num2;
};

// Function takes function parameters to have reusable actions

const forEachElement = function (array, action) {
  for (const element of array) {
    action(element);
  }
};

// Callback functions are a relationship between a higher order function and a 'normal' function

// Callback functions can be an action (log, store, etc.)
// Callback functions can be a modifier (multiply, add, concatenate, etc.)
// Callback functions can be a condition (filtering, complex conditions)

// [
//   {name:"bob", lastName:"bobinson"}
// ]

// [
//   "bob bobinson"
// ]
