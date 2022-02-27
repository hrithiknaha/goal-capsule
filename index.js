const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./route/goalRoute"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is Listening on ${PORT}`));
