const userDatabaseIsh = {
  "gentleman@cambrioleur.com": {
    email: "gentleman@cambrioleur.com",
    imagePath: "/arsene.gif",
    name: "Arsène Lupin",
    password: "paris",
  },
  "pontiac@bandit.com": {
    email: "pontiac@bandit.com",
    name: "Doug Judy",
    imagePath: "/doug.webp",
    password: "rosa",
  },
};

userDatabaseIsh["gentleman@cambrioleur.com"];
// {
//   email: "gentleman@cambrioleur.com",
//   imagePath: "/arsene.gif",
//   name: "Arsène Lupin",
//   password: "paris",
// }

userDatabaseIsh["bob@bob.com"];
// undefined

const bob = {};

bob.name.firstName;
