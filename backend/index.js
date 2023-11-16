const express = require("express");
const app = express();
const port = 5000;
const mongoDB = require("./db.js")
mongoDB();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();

})

app.get("/", (req, res) => {
  res.send(`listening on ${port}`);
});

app.use('/api', require('./Routes/CreateUser'));
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
