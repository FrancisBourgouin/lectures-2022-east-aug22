const logToConsole = (value) => {
  console.log(value);
};

const logToFile = (value) => {
  fs.writeFileSync("./log.txt", value);
};

module.exports = { logToConsole, logToFile };
