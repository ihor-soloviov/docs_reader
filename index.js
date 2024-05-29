const express = require("express");
const adminRouter = require("./routes/admin.router");
const calcRouter = require("./routes/calculator.router");
const fileRouter = require("./routes/files.router");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use('/files', fileRouter);
app.use('/calc', calcRouter)
app.use('/adm', adminRouter)

app.listen(8082, () => console.log("started on 8082"));
