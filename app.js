const express = require("express");

const tourRouter = require("./routes/tourRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRoutes);

module.exports = app;
