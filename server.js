const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const PORT = 8000;
app.listen(PORT, () => {
    console.log('we are live ' + PORT);
} )
