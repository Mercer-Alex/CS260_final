const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/heywow', {
  useNewUrlParser: true
});

app.listen(2600, () => console.log('Server listening on port 2600!'));