const express = require('express');
const countriesGraphsRouter = express.Router();
const client = require("../databasecontroller.js");

countriesGraphsRouter.route("/total_per_country").get(async(req, res)=>{
    try{
        const dbRes = await client.query(`SELECT DISTINCT ON (location)
        location, total_cases, total_deaths
        FROM covid_data 
        WHERE total_deaths IS NOT NULL and continent is not null
        ORDER BY location, date DESC`);
    res.send(dbRes.rows);
    }catch(err){
    console.error("Error en la consulta", err);
    res.status(500).send("Error en la consulta");
    }
})


countriesGraphsRouter.route("/:country/total_cases_vs_total_deaths").get(async(req, res)=>{
    try{
    const dbRes = await client.query(`with cases_per_month as(
        Select DISTINCT ON(mes) TO_CHAR(date, 'YYYY-MM') as mes, total_cases, total_deaths, location
        from covid_data where location='${req.params.country}'
        order by mes, total_deaths desc
        ) 
        
        Select c.location, c.mes, c.total_cases, c.total_deaths
        from cases_per_month c
        `);
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
WHERE total_deaths IS NOT NULL	and continent is not null and location ='${req.params.country}'
ORDER BY location, total_deaths DESC;`);
    res.send(dbRes.rows);
    }catch(err){
    console.error("Error en la consulta", err);
    res.status(500).send("Error en la consulta");
    }
})
countriesGraphsRouter.route("/:country/new_cases_per_month").get(async(req, res) => {
try{
const dbRes= await client.query (`with new_cases_per_month as(
    Select location, TO_CHAR(date, 'YYYY-MM') as mes, new_cases
    from covid_data
    )
    Select location, mes, SUM(new_cases)
    from new_cases_per_month
    where location = '${req.params.country}'
    group by location, mes`)
res.send(dbRes.rows);
}catch(err){
    console.error("Error en la consulta", err);
    res.status(500).send("Error en la consulta");
}
})

module.exports = countriesGraphsRouter;