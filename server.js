require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dataBase = require("./connection/dataBaseConnection");

const app = express();
app.use(express.json());
app.use(cors());

//Database connection...
dataBase();

//Routers...
app.get("/", (req, res) => {
  res.send("This server is set up and ready for work");
});

app.use("/api", require("./router/api/searchRouter"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The Server has been started on localhost port ${PORT}`);
});
