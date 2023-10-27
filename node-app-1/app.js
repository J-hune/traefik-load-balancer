const express = require('express');
const app = express();
const port = 3000; // The port on which this application is listening

// Middleware to enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`Node.js Application 1 is listening on port ${port}`);
});