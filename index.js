const express = require("express");
const adminRouter = require("./routes/admin.router");
const modulesRouter = require("./routes/modules.router");
const fileRouter = require("./routes/files.router");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use(fileRouter);
app.use(modulesRouter)
app.use(adminRouter)

app.listen(8082, () => console.log("started on 8082"));
