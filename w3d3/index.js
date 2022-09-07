const cookieParser = require("cookie-parser");
const express = require("express"); // Import Express package, Framework to make a simpler server (http)

const app = express(); // Instantiate an express object for us to use
const port = 3005; // Store the port value inside the port variable

app.use(cookieParser());
app.use(express.static("public")); // Static files (css / images)
app.use(express.urlencoded({ extended: false })); // Parses the body of a form request string in an object
app.set("view engine", "ejs"); // Set the view engine to EJS

// In the event of a request of type GET, if the route asked it "/", then do the callback defined where
// req is the request and res is the response to send back

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

const fetchUserByEmail = (email) => {
  if (userDatabaseIsh[email]) {
    return userDatabaseIsh[email];
  }

  return {};
};

const authenticateUser = (email, password) => {
  const currentUser = userDatabaseIsh[email];
  // const email = req.body.email
  // const password = req.body.password

  // Email doesn't exist
  if (!currentUser) {
    return { error: "Email doesn't exist", user: null };
  }

  // Password doesn't match
  if (currentUser.password !== password) {
    return { error: "Password bad.", user: null };
  }

  return { error: null, user: currentUser };
};

app.get("/", (req, res) => {
  console.log(req.cookies);
  const currentUser = fetchUserByEmail(req.cookies.email);
  const templateVars = { name: currentUser.name, imagePath: currentUser.imagePath };

  return res.render("index", templateVars); // Render the template called "index" and sends the resulting HTML
});

app.get("/users/:user_email", (req, res) => {
  res.json(userDatabaseIsh[req.params.user_email]);
});
app.post("/register", (req, res) => {
  const { email, name, imagePath, password } = req.body;

  if (!email || !name || !imagePath || !password) {
    return res.redirect("/register");
  }

  if (fetchUserByEmail(email).email) {
    return res.redirect("/register");
  }

  const newUser = {
    email,
    name,
    imagePath,
    password,
  };

  userDatabaseIsh[email] = newUser;

  res.cookie("email", email);

  return res.redirect("/");
});

app.get("/register", (req, res) => {
  return res.render("register");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const { error, user } = authenticateUser(email, password);

  if (error) {
    console.log("error:", error);
    return res.redirect("/");
  }

  res.cookie("email", email);
  return res.redirect("/");
  // res.render()
});

app.post("/logout", (req, res) => {
  res.clearCookie("email");
  return res.redirect("/");
});

// app.post("/login", (req, res) => {
//   // Email doesn't exist
//   if (!userDatabaseIsh[req.body.email]) {
//     console.log("Email doesn't exist");
//     return res.redirect("/");
//   }

//   // Password doesn't match
//   if (userDatabaseIsh[req.body.email].password !== req.body.password) {
//     console.log("Password bad.");
//     return res.redirect("/");
//   }

//   res.json(userDatabaseIsh[req.body.email]);
// });

app.listen(port, () => console.log(`Express server running on port ${port}`)); // Start listening to requests on port specified by the port variable
