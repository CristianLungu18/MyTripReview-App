require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//App
const app = express();
//Static
app.use(express.static(path.join(__dirname, "public")));
//Routes
const tripRoutes = require("./routes/trip");
//Database
const sequelize = require("./config/database");
//View Ening(EJS)
app.set("view engine", "ejs");
//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }));
//Sync DB
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Synchronization was successful!");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
//tripRoutes
app.use("/trips", tripRoutes);
//All Routes
app.get("/", (req, res, next) => {
  res.render("home");
});
app.all("*", (req, res, next) => {
  res.status(404);
  res.render("404");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at PORT: ${process.env.PORT}`);
});
