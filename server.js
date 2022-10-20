const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

//process environement vars
const port = process.env.PORT;
const URI = process.env.URI;

// connect to database
mongoose
    .connect(URI)
    .then(() => {
        console.log("connected to database");
    })
    .catch((err) => console.log(err));

//middlewares
app.use(express.json());
app.use("/api/admin", require("./routes/admin"));
app.use("/api/user", require("./routes/user"));

//multer middleware
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//connect server
app.listen(port, (err) => {
    if (err) throw err;
    console.log("Server is up and running...");
});