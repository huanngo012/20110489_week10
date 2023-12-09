const mongoose = require("mongoose");

const MONGO_URL = "mongodb://localhost:27017/nasa";

mongoose.connection.once("open", () => {
  console.log("MongoDB CONNECT");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
