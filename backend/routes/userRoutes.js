const express = require("express");
const router = express.Router();
const {
  Home,
  createUser,
  editUser,
  deleteUser,
  getUsers,
} = require("../controllers/userController");
router.get("/", Home);
router.post("/createuser", createUser);
router.get("/getusers", getUsers);
router.put("/edituser/:id", editUser);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
