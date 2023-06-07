const express = require("express");
const {
  getAllTours,
  createTour,
  singleTour,
  updateTour,
  deleteTour,
  checkId,
  checkBody,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} = require("../controllers/tourController");

const { protect, restrictTo } = require("../controllers/authController");

const router = express.Router();

router.param("id", checkId);

router.route("/").get(protect, getAllTours).post(createTour);
router.route("/tour-stats").get(getTourStats);
router.route("/monthly-plan/:year").get(getMonthlyPlan);
router.route("/top-5-cheap").get(aliasTopTours, getAllTours);

router
  .route("/:id")
  .get(singleTour)
  .patch(updateTour)
  .delete(protect, restrictTo("admin", "lead-guide"), deleteTour);

module.exports = router;
