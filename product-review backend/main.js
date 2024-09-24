var express = require("express");
var app = express();
app.use(express.json());

const fileUpload = require("express-fileupload");
app.use(fileUpload());

var cors = require("cors");
app.use(cors());

PORTNO = 8080;

var user = require("./api/user");
app.use("/user", user);

var product = require("./api/product");
app.use("/product", product);

app.listen(PORTNO, () => {
  console.log(`Server is running on http://localhost:${PORTNO}/`);
});
