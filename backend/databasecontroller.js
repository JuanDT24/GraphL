const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432, 
    password:"juan1234",
    database:"labbases"
})



module.exports= client
