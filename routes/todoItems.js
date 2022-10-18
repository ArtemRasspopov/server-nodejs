const router = require("express").Router();

//import todo model

const todoItemsModel = require("../models/todoItems");

//create route - add Todo Item to database

router.post("/api/item", async (req, res) => {
  try {
    const newItem = new todoItemsModel({
      item: req.query.item,
    });

    // //save this item in database
    const saveItem = await newItem.save();
    res.status(200).json("Item Added Successfully");
  } catch (err) {
    res.status(400).json(err);
  }
});

//create get data form database
router.get("/api/items", async (req, res) => {
  try {
    const allTodoItems = await todoItemsModel.find({});
    res.status(200).json(allTodoItems);
  } catch (err) {
    res.status(400).json(err);
  }
});

//create update item
router.put("/api/item/:id", async (req, res) => {
  try {
    //find the item by id and update it
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {
      $set: req.query,
    });
    res.status(200).json("Item Uppdated");
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete item from database
router.delete("/api/item/:id", async (req, res) => {
  try {
    //find the item by id and delete it
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Item Deleted");
  } catch (err) {
    res.status(400).json(err);
  }
});

//export router
module.exports = router;
