const drinkBeverage = require("./drinkBeverage");

// require() module.exports = ...
// import sks from sos, export default .., export ..

// const someFunction = () => {
//   console.log("result");
//   return "result";
// };

// const someResult = someFunction();

// const addNumbers = function (list) {
//   for (const number in list) {
//     return number;
//   }
// };

// const bob = 5;

// try {
//   throw new Error("that's not a sip");
// } catch (error) {
//   console.log(error);
// }

// console.log(bob);
const mug = { amountInMl: 500, content: "tea" };
drinkBeverage(mug);

const someFunction = () => {
  const get = () => {
    // ...
  };
  const set = () => {
    // ...
  };

  return { get, set };
};
