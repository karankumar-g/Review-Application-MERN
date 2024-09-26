var express = require("express");
var router = express.Router();

const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb+srv://karankumar:karan2909@cluster0.viptk.mongodb.net/";
const client = new MongoClient(url);

const dbName = "product-review";

// http://localhost:8080/user/login
router.post("/login", (req, res) => {
  try {
    let { email, password } = req.body;
    res.json({ msg: "login test" });
  } catch (e) {
    res.status(400).json({ msg: e });
  }
});
// http://localhost:8080/user/register
router.post("/register", (req, res) => {
  let { email, password, name, mobile } = req.body;
});
module.exports = router;
