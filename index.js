const express = require("express");
const cors = require("cors");
const app = express();

const docxProcessor = require("./utils/fileReader");

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const a = await docxProcessor.searchKeywordsInDocx("ID1161.docx")
  console.log(a);
});

app.listen(8080, () => console.log("started on 8080"));
