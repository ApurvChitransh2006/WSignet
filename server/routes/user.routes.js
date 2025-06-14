const express = require("express");
const User = require("../models/user.models");
const router = express.Router();

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
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findById(id);
    res.status(200).send(data);
  } catch (error) {
    console.log("Error:", error);
  }
});

// posting the data in the User Database
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    if (!(data.firmname && data.password && data.firmcode && data.isSuperUser))
      res.status(400).send("There is no value in the request body");
    const dbres = await User.create(data)
    res.status(200).send(dbres);
  } catch (error) {
    console.log("Error: ", error);
  }
});

// updataing the data in the User Database
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
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
