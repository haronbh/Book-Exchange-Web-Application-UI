const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Utiliser body-parser pour parser les données JSON
app.use(bodyParser.json());

// Middleware pour autoriser les requêtes CORS (pour les tests en local)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Route pour recevoir les données du formulaire et les renvoyer
app.post('/books', (req, res) => {
  const bookData = req.body; // Les données du livre envoyées depuis le formulaire
  console.log('Données reçues par le serveur :', bookData);

  // Envoyer les mêmes données en réponse
  res.json(bookData);
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
