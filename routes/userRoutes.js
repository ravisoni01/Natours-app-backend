const express = require("express");
const {
  getAllUsers,
  deleteUser,
  updateUser,
  singleUser,
  updateMe,
  deleteMe,
} = require("../controllers/userController");

const {
  signup,
  login,
  forgetPassword,
  resetPassword,
  updatePassword,
  protect,
} = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/forgetPassword", forgetPassword);
router.patch("/resetPassword/:token", resetPassword);
router.patch("/updatePassword", protect, updatePassword);
router.patch("/updateMe", protect, updateMe);
router.delete("/deleteMe", protect, deleteMe);

router.route("/").get(getAllUsers);
router.route("/:id").get(singleUser).patch(updateUser).delete(deleteUser);

module.exports = router;
