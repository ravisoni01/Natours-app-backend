const express = require("express");
const {
  getAllUsers,
  deleteUser,
  updateUser,
  getUser,
  updateMe,
  deleteMe,
  getMe,
} = require("../controllers/userController");

const {
  signup,
  login,
  forgetPassword,
  resetPassword,
  updatePassword,
  protect,
  restrictTo,
} = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgetPassword", forgetPassword);
router.patch("/resetPassword/:token", resetPassword);

router.use(protect);

router.get("/me", getMe, getUser);
router.patch("/updatePassword", updatePassword);
router.patch("/updateMe", updateMe);
router.delete("/deleteMe", deleteMe);

router.use(restrictTo("admin"));
router.route("/").get(getAllUsers);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
