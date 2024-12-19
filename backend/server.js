const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const connectToMongoDB = require("./db/connectToMongoDB");
const contactRouter = require("./routes/contact.Router");

const app = express();
const port = process.env.PORT || 7000;

connectToMongoDB()
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api/contacts", contactRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
