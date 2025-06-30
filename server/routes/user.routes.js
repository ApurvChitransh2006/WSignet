const express = require("express");
const User = require("../models/user.models");
const router = express.Router();
const bcrypt = require("bcrypt");

// getting the list of all the user present in the database
router.get("/all", async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).send(data);
  } catch (error) {
    console.log("Error:", error);
  }
});

// getting the list of all the user present in the database
router.get("/:firmcode", async (req, res) => {
  try {
    const firmcode = req.params.firmcode;
    const data = await User.findOne({firmcode: firmcode});
    res.status(200).send(data);
  } catch (error) {
    console.log("Error:", error);
  }
});

// posting the data in the User Database
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    console.log(data)
    if (!data){
      console.log(data)
      return res.status(400).send("There is no value in the request body");}
    const dbres = await User.create(data)
    return res.status(200).json(dbres);
  } catch (error) {
    console.log("Error: ", error);
  }
});

// updataing the data in the User Database
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const salt = bcrypt.genSaltSync(10);
    data.password = bcrypt.hashSync(data.password, salt);
    const dbres = await User.findByIdAndUpdate(id, data, { new: true });
    res.status(200).send(dbres);
  } catch (error) {
    console.log("Error:", error.message);
  }
});

// Deleting the data in the User Database
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const dbres = await User.findByIdAndDelete(id);
    res.status(200).send("The User is Deleted Successfully");
  } catch (error) {
    console.log("Error:", error);
  }
});


module.exports = router;
