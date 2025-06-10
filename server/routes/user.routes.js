// const UserSchema = new Schema({
//   username: String,
//   password: String,
// },{timestamps: true})

const express = require("express");
const user = require("../models/user.models");
const router = express.Router();

// getting the list of all the user present in the database
router.get("/", async (req, res) => {
  try {
    const data = await user.find();
    res.status(200).send(data);
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).send("Sorry! There is a server error");
  }
});

// getting the list of all the user present in the database
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await user.findById(id);
    res.status(200).send(data);
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).send("Sorry! There is a server error");
  }
});

// posting the data in the User Database
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    if (!(data.username && data.password))
      throw new Error("There is no value in the request body");
    const dbres = await user.create(data);
    res.status(200).send(dbres);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).send("Sorry! There is a server error");
  }
});

// updataing the data in the User Database
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const dbres = await user.findByIdAndUpdate(id, data, {new:true});
    res.status(200).send(dbres);
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).send("Sorry! There is a server error");
  }
});

// Deleting the data in the User Database
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const dbres = await user.findByIdAndDelete(id);
    res.status(200).send('The User is Deleted Successfully');
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).send("Sorry! There is a server error");
  }
});

module.exports = router;
