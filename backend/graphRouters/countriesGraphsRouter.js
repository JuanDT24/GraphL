const express = require('express');
const countriesGraphsRouter = express.Router();
const client = require("../databasecontroller.js");


countriesGraphsRouter.route("/:country/total_cases").get(async(req, res)=>{
    try{
    const dbRes = await client.query(`Select TO_CHAR(date, 'YYYY-MM-DD') as date, total_cases
    from covid_data
    where location = '${req.params.country}'
    order by date, total_cases;`);
    res.send(dbRes.rows);
    }catch(err){
    console.error("Error en la consulta", err);
    res.status(500).send("Error en la consulta");
    }
})
countriesGraphsRouter.route("/:country/total_deaths").get(async(req, res)=>{
    try{
    const dbRes = await client.query(`Select TO_CHAR(date, 'YYYY-MM-DD') as date, total_deaths
    from covid_data
    where location = '${req.params.country}'
    order by date, total_deaths;`);
    res.send(dbRes.rows);
    }catch(err){
    console.error("Error en la consulta", err);
    res.status(500).send("Error en la consulta");
    }
})

countriesGraphsRouter.route("/:country/total_cases_vs_total_deaths").get(async(req, res)=>{
    try{
    const dbRes = await client.query(`Select TO_CHAR(date, 'YYYY-MM-DD') as date, total_cases, total_deaths
    from covid_data
    where location = '${req.params.country}'
    order by date,total_cases,  total_deaths;`);
    res.send(dbRes.rows);
    }catch(err){
    console.error("Error en la consulta", err);
    res.status(500).send("Error en la consulta");
    }
})
countriesGraphsRouter.route("/:country/population_vs_total_cases").get(async(req, res)=>{
    try{
    const dbRes = await client.query(`SELECT DISTINCT ON (location)
    location, population, total_cases
FROM covid_data
WHERE total_cases IS NOT NULL	and continent is not null and location ='${req.params.country}'
ORDER BY location, total_cases DESC;`);
    res.send(dbRes.rows);
    }catch(err){
    console.error("Error en la consulta", err);
    res.status(500).send("Error en la consulta");
    }
})
countriesGraphsRouter.route("/:country/population_vs_total_deaths").get(async(req, res)=>{
    try{
    const dbRes = await client.query(`SELECT DISTINCT ON (location)
    location, population, total_deaths
FROM covid_data
WHERE total_cases IS NOT NULL	and continent is not null and location ='${req.params.country}'
ORDER BY location, total_deaths DESC;`);
    res.send(dbRes.rows);
    }catch(err){
    console.error("Error en la consulta", err);
    res.status(500).send("Error en la consulta");
    }
})

module.exports = countriesGraphsRouter;