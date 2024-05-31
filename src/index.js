const express = require("express");
const mongoose = require('mongoose')

const adminRouter = require("./routes/admin.router");
const modulesRouter = require("./routes/modules.router");
const fileRouter = require("./routes/files.router");
const PORT = process.env.PORT || 8082

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use(fileRouter);
app.use(modulesRouter)
app.use(adminRouter)

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:88143713@cluster0.hdn887b.mongodb.net/angebote?retryWrites=true&w=majority&appName=Cluster0')
    app.listen(PORT, () => console.log(`started on ${PORT}`));
  } catch (error) {
    console.log(error)
  }
}

start()
