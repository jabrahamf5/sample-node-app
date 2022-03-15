
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


app.get("/api", (req, res) => {
    res.json({ message: `Hello from server on PORT:${PORT}!!` });
  });

  
app.listen(PORT, () => {
  console.log(`Hello!!! Server listening on ${PORT}`);
});