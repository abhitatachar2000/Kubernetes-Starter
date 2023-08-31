const express = require('express');
const app = express();
const port = 3000; // Change this port number if needed

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
