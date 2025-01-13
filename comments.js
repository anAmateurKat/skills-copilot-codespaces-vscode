// Create web server with Express
// Create a route for GET /comments
// Use the fs module to read the comments.json file
// Send the contents of the file to the client as JSON

const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    res.json(JSON.parse(data));
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});