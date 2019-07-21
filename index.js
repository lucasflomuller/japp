const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send("hello world")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
