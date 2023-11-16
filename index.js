const express = require("express");
const router = require("./routes/files.router");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(8080, () => console.log("started on 8080"));
