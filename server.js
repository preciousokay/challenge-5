// Imports
const path = require('path');
const fs = require('fs');
const http = require('http');
const express = require('express');

// Server app setup
const app = express();
const port = process.env.PORT || 3000;

// Route
app.use(express.static(__dirname + '/public'));

// Start server on specified port
app.listen(port, () => {
  console.log('App listening on port local host 3000!');
});
