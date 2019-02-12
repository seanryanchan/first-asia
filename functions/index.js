const functions = require('firebase-functions');
const express = require('express');
const firstAsiaApp = express();

firstAsiaApp.get('/', (request,response) => {
  response.sendFile('../public/index.html');
});

firstAsiaApp.use(express.static('../public'));

exports.firstAsiaApp = functions.https.onRequest(firstAsiaApp);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
