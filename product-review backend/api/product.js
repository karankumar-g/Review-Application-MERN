var express = require("express");
var app = express();
app.use(express.json());
var router = express.Router();

const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb+srv://karankumar:karan2909@cluster0.viptk.mongodb.net/";
const client = new MongoClient(url);

const dbName = "product-review";

router.get("/getAllproducts", async (req, res) => {
  await client.connect();
  let db = client.db(dbName);
  // let productList = [
  //   { name: "Lungi" },
  //   { name: "Saree" },
  //   { name: "Shirts" },
  //   { name: "Pants" },
  // ];

  let list = await db.collection("products").find().sort({ name: 1 }).toArray();
  res.json(list);
});

router.post("/addReviewForProduct", async (req, res) => {
  let { category, reviewText, name } = req.body;
  let data = {
    name: name,
    category: category,
    reviewText: reviewText,
  };
  let path = __dirname + "/uploads/" + req.files.img.name;
  req.files.img.mv(path, (err) => {});
  await client.connect();
  let db = client.db(dbName);

  db.collection("products").insertOne(data);
  res.json({ msg: "product added for review" });
});

module.exports = router;
