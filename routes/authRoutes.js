const passport = require("passport");
const express = require("express");
const router = express.Router({ mergeParams: true });

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/google/callback", passport.authenticate("google"));

module.exports = router;