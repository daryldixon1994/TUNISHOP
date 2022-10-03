const express = require("express");
const app = express();
const mongoose = require("mongoose");
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

//connect server
app.listen(port, (err) => {
    if (err) throw err;
    console.log("Server is up and running...");
});
