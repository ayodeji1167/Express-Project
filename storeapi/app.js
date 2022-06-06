require("dotenv").config();
require("express-async-errors");

const PORT = 3000;
const dbConnect = require("./db/connectDb");
const express = require("express");
const app = express();
const errorHandlerMiddleware = require("./middleware/errorHandler");
const notFoundMiddleware = require("./middleware/notFound");
const storeRouter = require("./routes/storeRoutes");

app.use("/api/v1/store" , storeRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    console.log(process.env.MONGO_URI);
    await dbConnect(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`App Listening To ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
