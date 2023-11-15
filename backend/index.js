const express = require("express");
const app = express();
const port = 3000;
const mongoDB = require("./db.js")
mongoDB();

app.get("/", (req, res) => {
  res.send(`listening on ${port}`);
});

app.use('/api', require('./Routes/CreateUser'));
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
