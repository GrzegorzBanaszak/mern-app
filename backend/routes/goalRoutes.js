const express = require("express");
const {
  getGoal,
  postGoal,
  updateGoal,
  deleteGoal,
  getGoals,
} = require("../controllers/goalController");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, postGoal);
router
  .route("/:id")
  .get(protect, getGoal)
  .put(protect, updateGoal)
  .delete(protect, deleteGoal);

module.exports = router;
