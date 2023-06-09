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
const reviewRouter = require("./reviewRoutes");

const router = express.Router();

router.param("id", checkId);

router.use("/:tourId/reviews", reviewRouter);

router
  .route("/")
  .get(getAllTours)
  .post(protect, restrictTo("admin", "lead-guide"), createTour);
router.route("/tour-stats").get(getTourStats);
router
  .route("/monthly-plan/:year")
  .get(protect, restrictTo("admin", "lead-guide", "guide"), getMonthlyPlan);
router.route("/top-5-cheap").get(aliasTopTours, getAllTours);

router
  .route("/:id")
  .get(singleTour)
  .patch(protect, restrictTo("admin", "lead-guide"), updateTour)
  .delete(protect, restrictTo("admin", "lead-guide"), deleteTour);

module.exports = router;
