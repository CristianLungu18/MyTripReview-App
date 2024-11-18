const { Sequelize } = require("sequelize");
const Trip = require("../models/trip");

exports.getTrip = (req, res, next) => {
  Trip.findAll()
    .then((trips) => {
      res.status(200);
      res.render("trips", { trips });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAddTrip = (req, res, next) => {
  res.status(200);
  res.render("addtrip");
};

exports.postTrip = (req, res, next) => {
  const newTrip = {
    user_name: req.body.userName,
    email: req.body.email,
    country_name: req.body.country,
    city_name: req.body.city,
    price: req.body.price,
    review: req.body.review,
    rating: req.body.rating,
    image: req.file.filename,
  };
  Trip.create(newTrip)
    .then(() => {
      res.status(200);
      console.log("The trip has been successfully added!");
      res.redirect("/trips");
    })
    .catch((err) => {
      console.log(err);
    });
};
