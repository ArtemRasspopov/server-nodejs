//import mongose to create new Schema

const mongoose = require("mongoose");

//create Schema
const TodoItemSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
});

//export schemam
module.exports = mongoose.model("todo", TodoItemSchema);
