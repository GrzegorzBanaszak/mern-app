const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold);
});
