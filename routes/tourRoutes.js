const express = require("express");
const {
  getAllTours,
  createTour,
  singleTour,
  updateTour,
  deleteTour,
  checkId,
  checkBody,
} = require("../controllers/tourController");

const router = express.Router();

router.param("id", checkId);

router.route("/").get(getAllTours).post(checkBody, createTour);

router.route("/:id").get(singleTour).patch(updateTour).delete(deleteTour);

module.exports = router;
