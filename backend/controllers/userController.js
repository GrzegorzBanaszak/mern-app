//@desc - Register new user
//@route - POST /api/users
//@access - Public
const registerUser = (req, res) => {
  res.json({ message: "User registered" });
};

//@desc - Login user
//@route - POST /api/users/login
//@access - Public
const loginUser = (req, res) => {
  res.json({ message: "User login" });
};

//@desc - Get user data
//@route - GET /api/users/me
//@access - Public
const getUser = (req, res) => {
  res.json({ message: "Get user" });
};

module.exports = { registerUser, loginUser, getUser };
