const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("aaa");
});

app.listen(8080, () => console.log("started on 8080"));
