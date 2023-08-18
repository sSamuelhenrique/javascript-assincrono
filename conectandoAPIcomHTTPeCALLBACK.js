const https = require('https');
const API = 'https://jsonplaceholder.typicode.com/users?_limit=1';

https.get(API, res =>{ //callback
    console.log(res.statusCode); //assíncronismo
});

console.log('Conectando API') //assíncronismo