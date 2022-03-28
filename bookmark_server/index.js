const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const routes = require("./routes");

app.use(express.json());
app.use(cors());

app.use("/", routes);

require("dotenv").config();

PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Database Connceted");

  app.listen(PORT, (err) => {
    if (err) return err;
    console.log(`Listening on port ${PORT}`);
  });
});
