const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432, 
    password:"juan1234",
    database:"labbases"
})

client.connect()
    .then(() => console.log('Conexión a la base de datos establecida.'))
    .catch(err => console.error('Error al conectar a la base de datos', err));

module.exports= client;
