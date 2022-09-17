require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db");
const Form = require("./model/formModel");
let port = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});
app.post("/form-details", (req, res) => {
  Form.create(
    {
      concern: req.body.concern,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      state: req.body.state,
      city: req.body.city,
      package: req.body.package,
      date: req.body.date,
    },
    (err, data) => {
      if (err) return res.send("Error While Registering");
      res.send("Registration Successful");
    }
  );
});
app.listen(port, () => {
  console.log("running on port " + port);
});
