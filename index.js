const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.json());

//Port
const PORT = process.env.PORT || 5500;

//Use cors
app.use(cors());

//Import routes
const TodoItemRoute = require("./routes/todoItems");

//Connect to mongodb
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/", TodoItemRoute);

//Add Port and connect to server
app.listen(PORT, () => console.log("server connected"));
