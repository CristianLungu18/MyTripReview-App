const express = require("express");
const Trip = require("../models/trip");
const router = express.Router();
const upload = require("../config/multer");
const tripController = require("../controllers/trip");

//GET TRIPS
router.get("/", tripController.getTrip);

//GET FORM
router.get("/add",tripController.getAddTrip);

//POST FORM
router.post("/add", upload.single("image"),tripController.postTrip);

module.exports = router;
