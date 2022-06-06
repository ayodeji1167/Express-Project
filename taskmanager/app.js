const express = require("express");
const app = express();
const taskRouter = require("./routes/taskRouter.js");
const connectDb = require("./db/connection.js");
const errorHanlder = require("./middleware/errorHandling");
require("dotenv").config();

const PORT = 3000;

app.use(express.json());
app.use("/api/v1", taskRouter);
app.use(errorHanlder);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`App listening to port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
