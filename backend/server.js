const express = require("express");
const cors = require("cors");
const doteve = require("dotenv");
const connectDB = require("./config/db");
const app = express();
const User = require("../backend/models/userModal");

app.use(express.json());
app.use(cors());
doteve.config();
app.use(express.json());
connectDB();


app.post("/getData", async (req, res) => {
  const { name, country, city, interest, selectedFile } = req.body;
  const user = await User.create({
    name,
    country,
    city,
    interest,
    selectedFile,
  });
  res.json(user);
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});


    