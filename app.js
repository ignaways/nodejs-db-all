const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;
const { connect } = require("./config/mongodb");
const routes = require('./routes/index')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes)

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("🚀 ~ file: app.js ~ line 30 ~ connect ~ error", err);
  });
