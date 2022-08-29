// const stuffToExport = {}
// stuffToExport.drinkBeverage = drinkBeverage
const drinkBeverage = (mug, sip) => {
  // mug.amountInMl -= sip;
  // mug.amountInMl = mug.amountInMl < 0 ? 0 : mug.amountInMl;
  if (typeof mug !== "object" || (!mug.amountInMl && mug.amountInMl !== 0)) {
    throw new Error("that aint a mug chief");
    // return "that aint a mug chief"
  }

  if (mug.amountInMl === 0) {
    throw new Error("mug empty you dum dum");
  }

  if (typeof sip !== "number" || sip < 0) {
    throw new Error("that's not how you sip buddy.");
  }

  if (sip <= mug.amountInMl) {
    mug.amountInMl -= sip;
  } else {
    mug.amountInMl = 0;
  }

  return mug;
};

const refillBeverage = () => {
  // ...
};

module.exports = { drinkBeverage, refillBeverage };
