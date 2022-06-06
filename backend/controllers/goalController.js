const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");
// @desc   - Get all goals
// @route  - GET /api/goals
// @access - Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
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
  if (!req.body.text) {
    res.status(400);
    throw new Error("Add text field");
  }

  const goal = await Goal.create({ text: req.body.text });
  res.status(201).json(goal);
});

//@desc - Update goal
//@route - PUT /api/goals/:id
//@access - Private
const updateGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Add text field");
  }
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    { new: true }
  );

  res.status(200).json(updatedGoal);
});

//@desc - Delete goal
//@route - DELETE /api/goals/:id
//@access - Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = { getGoal, postGoal, updateGoal, deleteGoal, getGoals };
