const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server_mongodb = require('./server_mongodb/mongodb');

const book = require('./models/book');
const member = require('./models/member');
const rent = require('./models/rent');


app.set("view engine", "ejs");

const router = require('./routes')(app, book, member, rent);

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});