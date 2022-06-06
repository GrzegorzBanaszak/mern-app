const asyncHandler = require("express-async-handler");

// @desc   - Get all goals
// @route  - GET /api/goals
// @access - Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goal" });
});

//@desc   - Get goal by id
//@route  - GET /api/goals/:id
//@access - Private
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goal" });
});

//@desc - Create goal
//@route - POST /api/goals
//@access - Private
const postGoal = asyncHandler(async (req, res) => {
  res.status(201).json({ message: "Set goal" });
});

//@desc - Update goal
//@route - PUT /api/goals/:id
//@access - Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

//@desc - Delete goal
//@route - DELETE /api/goals/:id
//@access - Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoal, postGoal, updateGoal, deleteGoal, getGoals };
