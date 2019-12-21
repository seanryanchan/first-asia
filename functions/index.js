const functions = require('firebase-functions');
const express = require('express');
const firstAsiaApp = express();
const path = require('path');

console.log('expressApp running on', __dirname)
firstAsiaApp.set('view engine', 'pug')

firstAsiaApp.get('/about', (request,response) => {
  response.sendFile( path.join(__dirname,'html','about.html') );
  // next();
});

firstAsiaApp.get('/products', (request,response) => {
  response.sendFile( path.join(__dirname,'html','products.html') );
  // next();
});

firstAsiaApp.get('/', (request,response) => {
  response.sendFile( path.join(__dirname,'html','index.html') );
  // next();
});

// firstAsiaApp.get('/test', function (req, res) {
//   res.render( path.join(__dirname,'views','index'))
// })

firstAsiaApp.use(express.static(path.join(__dirname,'public')));

firstAsiaApp.listen(3000, () => console.log(`Example app listening on port 3000!`))

exports.firstAsiaApp = functions.https.onRequest(firstAsiaApp);

// headers are 1920 x 300 (header bg)
// contact info bg is 1920 x 751

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
