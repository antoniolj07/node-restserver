const express = require('express');
const app = express();


app.use(require('./usuario'));

//var ruta = require('./login');
//app.use(ruta);

app.use(require('./login'));

module.exports = app;