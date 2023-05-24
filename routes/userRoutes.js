const express = require("express");
const {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  singleUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(singleUser).patch(updateUser).delete(deleteUser);

module.exports = router;
