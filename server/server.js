require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;
const DATABASE = process.env.DATABASE;
const userRoutes = require("./routes/user");

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Db Connected");
  });

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log("Server is running on", PORT);
});
