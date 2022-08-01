const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.MONGO_URL.replace("<user>", process.env.MONGO_USER)
  .replace("<password>", process.env.MONGO_PASS)
  .replace("myFirstDatabase", process.env.MONGO_DB);

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
