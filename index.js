const express = require("express");

const app = express();

app.use(() => {
  console.log("Hello server...");
});

app.listen(4000);
