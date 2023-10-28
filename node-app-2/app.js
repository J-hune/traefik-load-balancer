const express = require('express');
const app = express();
const port = 3001; // The port on which this application is listening

app.engine('html', require('ejs').renderFile);

// Middleware to enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  next();
});

app.use(express.static('public'))

app.get('/', (req, res) => {
  const domainUrl = process.env.DOMAIN_NAME; // Récupère l'URL depuis les variables d'environnement
  res.render(__dirname + '/views/index.html', { root: __dirname, domainUrl:domainUrl });
});

app.listen(port, () => {
  console.log(`Node.js Application 2 is listening on port ${port}`);
});