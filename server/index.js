require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5050;

const { dbConnection } = require('./db/dbConnection');
const movieRoute = require('./routes/movie/index.js');

app.use(bodyParser.json());
app.use(cors());
app.use('/movies', movieRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
  dbConnection(process.env.MongoURI);
});
