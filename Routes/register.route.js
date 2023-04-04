const express = require("express");
const { UserModel } = require("../Models/user.model");
const register = express.Router();
const bcrypt = require("bcrypt");
const { profileModel } = require("../Models/profile.model");



register.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await UserModel.find({ email });
  if (user.length) {
    res.send("Email already registered, Please login!");
  }

  try {
    bcrypt.hash(password, 3, async (err, hashed) => {
     
      if (err) {
        res.send("Something went wrong!");
      } else {
        const obj = { name, email, password: hashed };
        let user = new UserModel(obj);
        user = await user.save();
console.log(user)
        let date = new Date();

        let profile = new profileModel({
          userID: user._id,
          timeStamp: `${date.toLocaleDateString()} ${date.toTimeString()}`,
          name,
          email,
        });
        await profile.save();
        console.log(profile);
        res.send("User successfully registed , Please login!");
      }
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = { register };
