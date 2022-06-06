const express = require("express");
const {
  getGoal,
  postGoal,
  updateGoal,
  deleteGoal,
  getGoals,
} = require("../controllers/goalController");
const router = express.Router();

router.get("/", getGoals);
router.get("/:id", getGoal);
router.post("/", postGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal);
module.exports = router;
