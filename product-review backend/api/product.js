var express = require("express");
var app = express();
app.use(express.json());
var router = express.Router();

const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb+srv://karankumar:karan2909@cluster0.viptk.mongodb.net/";

const client = new MongoClient(url);

const dbName = "product-review";

router.post("/createProduct", async (req, res) => {
  let { category, reviewText, name } = req.body;

  let data = {
    name: name,
    category: category,
    reviewText: reviewText,
    filename: req.files.img.name,
    isApproved: 0,
  };
  let path = process.cwd() + "/uploads/" + req.files.img.name;
  req.files.img.mv(path, (err) => {});
  const db = client.db("product-review");
  await db.collection("product").insertOne(data);
  res.json({ msg: "product added" });
});

router.post("/addReviewForProduct", async (req, res) => {
  let { id, reviewText, rating } = req.body;

  let data = {
    product_id: id,
    rating: rating,
    reviewText: reviewText,
    isApproved: "0",
  };
  const db = client.db("product-review");
  await db.collection("review").insertOne(data);
  res.json({ msg: "review added .." });
});

router.get("/getAllApprovedProducts", async (req, res) => {
  const db = client.db("product-review");
  let list = await db.collection("product").find({ isApproved: "1" }).toArray();
  res.json(list);
});

router.get("/getProductDetailById", async (req, res) => {
  let { id } = req.query;
  const db = client.db("product-review");
  let product = await db
    .collection("product")
    .findOne({ _id: ObjectId.createFromHexString(id) });
  let review = await db.collection("review").find({ product_id: id }).toArray();
  res.json({ product: product, review: review });
});

module.exports = router;
