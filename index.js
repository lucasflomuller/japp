require("dotenv").config();
const passport = require("passport");
const express = require("express");
const app = express();

// requiring routes
const authRoutes = require("./routes/authRoutes");

// passport initialization
require("./services/passport");
app.use(passport.initialize());

// use routes
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
