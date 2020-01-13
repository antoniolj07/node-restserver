// ===================================
// Puerto
// ===================================

process.env.PORT = process.env.PORT || 3000;


// ===================================
// Entorno 
// ===================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ===================================
// Base de Datos
// ===================================

let urlDB;
//if (process.env.NODE_ENV === 'dev') {
//    urlDB = 'mongodb://localhost:27017/database';
//} else {
urlDB = 'mongodb+srv://jorigot:iRMkgp8DtlAcjrdT@cluster0-hqblr.mongodb.net/cafe'
    //}

process.env.URLDB = urlDB;