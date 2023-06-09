const express = require("express");
const {
  getAllReview,
  createReview,
  deleteReview,
  updateReview,
  setTourUserIds,
  getReview,
} = require("../controllers/reviewController");
const { protect, restrictTo } = require("../controllers/authController");

const router = express.Router({ mergeParams: true });

router.use(protect);

router
  .route("/")
  .get(getAllReview)
  .post(protect, restrictTo("user"), setTourUserIds, createReview);

router
  .route("/:id")
  .delete(restrictTo("user", "admin"), deleteReview)
  .patch(restrictTo("user", "admin"), updateReview)
  .get(getReview);

module.exports = router;
