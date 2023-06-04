const express = require("express");
const {
  getAllUsers,
  deleteUser,
  updateUser,
  singleUser,
} = require("../controllers/userController");

const { signup } = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);

router.route("/").get(getAllUsers);
router.route("/:id").get(singleUser).patch(updateUser).delete(deleteUser);

module.exports = router;
