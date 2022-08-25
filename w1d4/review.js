// Questions !

// Anonymous callbacks
// Nested object & Loops
// Type coercion =>
// == => Those two things are equivalent (photo of a muffin equivalent to a muffin)
// === => Those two are identical

// "1" == 1
// "1" === 1

// ==

const someObject = {
  "bob@bob.com": {
    nickname: "Cadaei",
    email: "bob@bob.com",
    wins: 5,
  },
  "robert@robert.com": {
    nickname: "Potatonator",
    email: "robert@robert.com",
    wins: 55,
  },
};

const playerBob = someObject["bob@bob.com"];

playerBob.wins;

const someArray = [1, 2, 3, 4, 5];

const playerRobert = someObject["robert@robert.com"];
for (const key in playerRobert) {
  console.log(key, playerRobert[key]);
}

const objects = {};

for (let x = 0; x < 5; x++) {
  objects[x] = {
    name: "foo",
  };
}

console.log(objects);
