var express = require("express");
var app = express();
app.use(express.json());
var router = express.Router();

const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb+srv://karankumar:karan2909@cluster0.viptk.mongodb.net/";
const client = new MongoClient(url);

const dbName = "product-review";

router.get("/getAllproducts", async (req, res) => {
  //   await client.connect();
  //   let db = client.db(dbName);
  let productList = [
    { name: "product1" },
    { name: "product18" },
    { name: "product2" },
    { name: "product3" },
  ];
  res.json(productList);
});

module.exports = router;
