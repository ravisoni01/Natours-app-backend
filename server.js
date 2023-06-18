const dotenv = require("dotenv");
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! .");
  console.log(err.name, err.message);

  process.exit(1);
});
const app = require("./app");
dotenv.config({ path: "./config.env" });

// const DB = process.env.DATABASE;
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("DB Connection"));

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! .");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
