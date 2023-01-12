const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./mongoose");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/artists", require("./Routes/artistRoutes"));
app.use("/genres", require("./Routes/genreRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}!!`));
