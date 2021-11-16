const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const {
  userTest,
  signIn,
  signUp,
  currentProfile,
} = require("../controllers/user");
const { isAuth } = require("../middlewares");

router.get("/test", userTest);

router.post(
  "/signup",
  check("name", "Name is required").notEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  signUp
);

router.post(
  "/signin",
  check("email", "Please include a valid email").isEmail(),
  signIn
);


router.get("/currentUser", isAuth, currentProfile);

module.exports = router;
