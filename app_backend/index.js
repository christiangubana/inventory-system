// index.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authController = require("./controllers/authController");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost/chef_management", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Authentication routes
app.post("/register", authController.register);
app.post("/login", authController.login);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
