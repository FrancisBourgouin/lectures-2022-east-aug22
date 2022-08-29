const drinkBeverage = require("../drinkBeverage");
// const assert = require("assert")
const expect = require("chai").expect;

describe("happy path of drinkBeverage (Optimistic)", () => {
  it("return a modified object with sip deduced from amount", () => {
    const someMug = {
      amountInMl: 300,
      content: "Some brown liquid",
    };
    const sizeOfSip = 20;

    const result = drinkBeverage(someMug, sizeOfSip);
    const expectedResult = {
      amountInMl: 280,
      content: "Some brown liquid",
    };

    // assert.equal(result.amountInMl, expectedResult.amountInMl)
    expect(result).to.deep.equal(expectedResult);
  });
});

describe("dark path of drinkBeverage (Pessimistic)", () => {
  it("returns a modified object amount at zero when sip is too big", () => {
    const someMug = {
      amountInMl: 300,
      content: "Some brown liquid",
    };
    const sizeOfSip = 420;

    const result = drinkBeverage(someMug, sizeOfSip);
    const expectedResult = {
      amountInMl: 0,
      content: "Some brown liquid",
    };

    // assert.equal(result.amountInMl, expectedResult.amountInMl)
    expect(result).to.deep.equal(expectedResult);
  });
  it("throws an error if the mugobject amount is empty", () => {
    const someMug = {
      amountInMl: 0,
      content: "Some brown liquid",
    };
    const sizeOfSip = 20;

    const functionThatWillThrow = () => drinkBeverage(someMug, sizeOfSip);

    expect(functionThatWillThrow).to.throw("dum dum");
  });
  it("throws an error if the sip doesn't exist", () => {
    const someMug = {
      amountInMl: 110,
      content: "Some brown liquid",
    };
    const sizeOfSip = undefined;

    const functionThatWillThrow = () => drinkBeverage(someMug, sizeOfSip);

    expect(functionThatWillThrow).to.throw("buddy.");
  });
  it("throws an error if the mugobject is invalid or doesn't exist", () => {
    const someMug = undefined;
    const sizeOfSip = 20;

    const functionThatWillThrow = () => drinkBeverage(someMug, sizeOfSip);

    expect(functionThatWillThrow).to.throw("chief");
  });
});
