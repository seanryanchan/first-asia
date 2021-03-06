const functions = require('firebase-functions');
const express = require('express');
const firstAsiaApp = express();
const path = require('path');

// starting to think this does not work for free firebase.
// it is all hosted on public... brother of functions dir
// unless https://firebase.google.com/docs/hosting/full-config#direct_requests_to_a_function
// currently not used.

console.log('app is running on', __dirname)
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

firstAsiaApp.use('*', (req,res) => {
  res.sendStatus(404);
})

firstAsiaApp.use(express.static(path.join(__dirname,'public')));

// firstAsiaApp.listen(3000, () => console.log(`Example app listening on port 3000!`))

exports.firstAsiaApp = functions.https.onRequest(firstAsiaApp);



// headers are 1920 x 300 (header bg)
// contact info bg is 1920 x 751

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
