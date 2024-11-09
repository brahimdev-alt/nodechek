// hello-world.js
console.log("HELLO WORLD");

// server.js
const http = require('http');

// Création du serveur
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello Node !!!!</h1>\n');
});

// Écoute sur le port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

const fs = require('fs');

// Contenu à écrire dans le fichier
const content = 'Hello Node';

// Création du fichier welcome.txt
fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.log('Erreur lors de la création du fichier:', err);
  } else {
    console.log('Fichier "welcome.txt" créé avec succès !');
  }
});

const fs = require('fs');

// Lire le contenu de welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Erreur lors de la lecture du fichier:', err);
  } else {
    console.log('Contenu du fichier :', data);
  }
});
const generatePassword = require('generate-password');

// Générer un mot de passe aléatoire
const password = generatePassword.generate({
  length: 12, 
  numbers: true, 
  symbols: true, 
  uppercase: true, 
  lowercase: true, 
});

console.log('Mot de passe généré :', password);
const nodemailer = require('nodemailer');

// Créer un transporteur de mail
let transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'brahimmissoum@gmail.com', 
    pass: '12345', 
  },
});

// Configuration de l'e-mail
let mailOptions = {
  from: 'brahimmissoum@gmail.com', 
  to: 'hamid@gmail.com', 
  subject: 'Test', 
  text: 'hello hamid.', 
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
  } else {
    console.log('E-mail envoyé: ' + info.response);
  }
});







