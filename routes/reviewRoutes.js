const express = require("express");
const {
  getAllReview,
  createReview,
  deleteReview,
} = require("../controllers/reviewController");
const { protect, restrictTo } = require("../controllers/authController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(getAllReview)
  .post(protect, restrictTo("user"), createReview);

router.route("/:id").delete(deleteReview);

module.exports = router;
