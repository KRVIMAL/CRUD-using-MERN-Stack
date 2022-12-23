const User = require("../models/users");
exports.Home = (req, res) => {
  res.send("This is home route");
};

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!(name && email)) {
      res.status(400).send("both fields are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).send("user already exists");
    }

    const user = await User.create({ name, email });

    res.status(200).json({
      success: true,
      message: "user created",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      message: "user created",
      users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: message.error,
    });
  }
};

exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "successfully updated",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: message.error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "user deleted",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: message.error,
    });
  }
};
