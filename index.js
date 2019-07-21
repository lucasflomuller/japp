require("dotenv").config();
const passport = require("passport");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// mongoose connect
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(res => console.log("Successfully connected to database"))
  .catch(err => console.log(err));

// requiring routes
const authRoutes = require("./routes/authRoutes");

// passport initialization
require("./services/passport");
app.use(passport.initialize());
app.use(passport.session());

// use routes
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
