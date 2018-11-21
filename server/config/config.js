// Puerto
process.env.PORT = process.env.PORT || 3000

//Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//BBDD
let urlDB

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb://cafe-user:cafe1234@ds255970.mlab.com:55970/cafecurso'
}

process.env.URLDB = urlDB