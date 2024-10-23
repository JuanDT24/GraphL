const express = require('express');
const graphrouter = express.Router();
const client =  require("../backend/databasecontroller")
graphrouter.route("/").get((req, res) =>{
    res.send('<h1>Graphs page</h1>' +
             '<p>Choose the theme of your graph</p>' +
             '<p> Continent, Country </p>');
      
});
graphrouter.route("/continents").get(async(req,res) => {
    try {
        const dbRes = await client.query(`SELECT DISTINCT continent FROM covid_data WHERE continent IS NOT NULL`);
        res.send(dbRes.rows.map(row => row.continent));
    } catch (err) {
        console.error("Error en la consulta", err);
        res.status(500).send("Error en la consulta");
    }   
})
graphrouter.route("/continents/:continent").get(async(req,res) => {
    try{
    const dbRes = await client.query(`Select distinct continent from covid_data where continent = '${req.params.continent}';`)
    res.send(dbRes.rows.map(row => row.continent))
    } catch(err){
        console.error("Error en la consulta", err);
        res.status(500).send("Error en la consulta");
    }
}
)
graphrouter.route("/countries").get(async(req,res) => {
try{
    const dbRes = await client.query(`Select distinct location from covid_data where location is not null`)
    res.send(dbRes.rows.map(row => row.location))
} catch(err){
    console.error("Error en la consulta", err);
    res.status(500).send("Error en la consulta");
}
})
graphrouter.route("/countries/:country").get(async(req,res) => {
    try{
        const dbRes = await client.query(`Select distinct location from covid_data where location = '${req.params.country}'`)
        res.send(dbRes.rows.map(row => row.location))
    } catch(err){
        console.error("Error en la consulta", err);
        res.status(500).send("Error en la consulta");
    }
    })


module.exports=graphrouter;