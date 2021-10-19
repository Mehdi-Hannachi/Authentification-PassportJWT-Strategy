require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const cors = require("cors");
const app = express();
app.use(cors());

// app.use(fileUpload());

// Parse date
app.use(express.json());

// Data base connection
connectDB();

// User routes
app.use("/user", user);

// Server connection

app.listen(process.env.port, (err) => {
  err
    ? console.log("Server connection failed", err)
    : console.log(`Server is connected on port ${process.env.PORT}`);
});
