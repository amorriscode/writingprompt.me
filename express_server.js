'use strict';

const express = require('express');
const app = express();
app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.set('view engine', 'ejs');

// Set default port as 8080
const PORT = process.env.PORT || 8080;
// Initiate server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

app.get('/', (req, res) => {
  res.render('index');
});