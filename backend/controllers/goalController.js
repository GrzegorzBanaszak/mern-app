// @desc   - Get all goals
// @route  - GET /api/goals
// @access - Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goal" });
};

//@desc   - Get goal by id
//@route  - GET /api/goals/:id
//@access - Private
const getGoal = (req, res) => {
  res.status(200).json({ message: "Get goal" });
};

//@desc - Create goal
//@route - POST /api/goals
//@access - Private
const postGoal = (req, res) => {
  res.status(201).json({ message: "Set goal" });
};

//@desc - Update goal
//@route - PUT /api/goals/:id
//@access - Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

//@desc - Delete goal
//@route - DELETE /api/goals/:id
//@access - Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = { getGoal, postGoal, updateGoal, deleteGoal, getGoals };
