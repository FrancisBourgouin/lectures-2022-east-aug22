REASSESS / IDENTIFY / PLAN / CODE / MANUAL RUN / ATTENBOROUGH

# Drinking beverage function

Considering a beverage mug object, I want to be able to drink from the mug and lower the amount of beverage.

```jsx
const someMug = {
  amountInMl: 300,
  content: "Some brown liquid",
};
const sizeOfSip = 20;

const sipOneMug = drinkBeverage(mugObject, sizeOfSip);
// 280ml remaining
const sipTwoMug = drinkBeverage(sipOneMug, sizeOfSip);
// 260ml remaining
```

# In / Out

## IN - mug object

```jsx
const someMug = {
  amountInMl: 300,
  content: "Some brown liquid",
};
```

## IN - size of the sip

```jsx
const sizeOfSip = 20;
```

## OUT - updated amount in mug

return the mutated mug object

# How

mugObject + sip -> drinkBeverage -> modified mugObject
mugObject + sip (too big) -> drinkBeverage -> modified mugObject (cap to 0)
mugObject + ??? -> drinkBeverage -> original mugObject
??? + sip -> drinkBeverage -> undefined (throw an error)

mugObject (empty) + sip -> drinkBeverage -> undefined (throw an error mug empty you dum dum)
mugObject (invalid) + sip -> drinkBeverage -> undefined (throw an error that aint a mug chief)
mugObject + sip (invalid) -> drinkBeverage -> undefined (throw an error that's not how you sip buddy.)
(Already managed) mugObject (invalid) + sip (invalid) -> drinkBeverage -> undefined (throw an error that's not how you sip buddy.)

# Test cases
