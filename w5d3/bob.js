// const someFunction = (callback) => {
//   const isError = Math.random() > 0.5;

//   setTimeout(() => {
//     if (isError) {
//       return callback("randomizer not happy", null);
//     }

//     return callback(null, "secret cool data or something");
//   }, 1000);
// };

// const someCallbackFct = (err, data) => {
//   if (err) {
//     return console.log("OH NO!", err);
//   }
//   return console.log("GREAT SUCCESS", data);
// }

// someFunction(someCallbackFct);

const moreCallbackFunction = (callbackSuccess, callbackFailure) => {
  const isError = Math.random() > 0.5;

  setTimeout(() => {
    if (isError) {
      return callbackFailure("randomizer not happy");
    }

    return callbackSuccess("secret cool data or something");
  }, 1000);
};

moreCallbackFunction(
  (data) => console.log("success!", data),
  (error) => console.log("error", error)
);
