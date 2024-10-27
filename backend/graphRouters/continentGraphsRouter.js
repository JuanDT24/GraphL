const express = require('express');
const continentGraphsRouter = express.Router();
const client = require("../databasecontroller.js")



continentGraphsRouter.route('/total_per_continent').get(async(req, res) => {
    try {
        const dbRes = await client.query(`WITH max_cases_per_location AS (
            SELECT DISTINCT ON (location)
                continent, location, total_cases, total_deaths
            FROM covid_data
            WHERE total_cases IS NOT NULL	and continent is not null
            ORDER BY location, total_deaths DESC
        )
        SELECT continent, 
            SUM(total_cases) AS total_cases,
			SUM(total_deaths) as total_deaths
        FROM max_cases_per_location
        GROUP BY continent
        ORDER BY total_cases DESC;`);
        res.send(dbRes.rows)
    } catch (err) {
        console.error("Error en la consulta", err);
        res.status(500).send("Error en la consulta");
    }   
})
continentGraphsRouter.route('/:continent/continent_totals').get(async(req, res) => {
    try {
        const dbRes = await client.query(`WITH max_cases_per_location AS (
            SELECT DISTINCT ON (location)
                continent, location, total_cases, total_deaths
            FROM covid_data
            WHERE total_cases IS NOT NULL	and continent is not null and continent = '${req.params.continent}'
            ORDER BY location, total_deaths DESC
        ),
       population_per_country as(
       Select distinct on (location) continent, location, population
       from covid_data where continent is not null
       order by location
)
        SELECT m.continent, 
            SUM(total_cases) AS total_cases,
			SUM(total_deaths) as total_deaths,
			SUM(p.population) as population
        FROM max_cases_per_location m join population_per_country p
		on m.location=p.location
        GROUP BY m.continent
        ORDER BY total_cases DESC;`);
        res.send(dbRes.rows)
    } catch (err) {
        console.error("Error en la consulta", err);
        res.status(500).send("Error en la consulta");
    }   
})

continentGraphsRouter.route('/:continent/totalcases').get(async(req, res) => {
    try {
        console.log(`Continente: ${req.params.continent}`)
        const dbRes = await client.query(`WITH max_cases_per_location AS (
            SELECT DISTINCT ON (location)
                continent, location, total_cases
            FROM covid_data
            WHERE total_cases IS NOT NULL	and continent is not null
            ORDER BY location, total_cases DESC
        )
        SELECT continent, 
            SUM(total_cases) AS total_cases_per_continent
        FROM max_cases_per_location
        WHERE continent = '${req.params.continent}'
        GROUP BY continent
        ORDER BY total_cases_per_continent DESC;`);
        res.send(dbRes.rows)
    } catch (err) {
        console.error("Error en la consulta", err);
        res.status(500).send("Error en la consulta");
    }   
})

continentGraphsRouter.route('/:continent/totaldeaths').get(async(req,res) =>{
    try{
        const dbRes= await client.query(`WITH max_deaths_per_location AS (
            SELECT DISTINCT ON (location)
                continent, location, total_deaths
            FROM covid_data
            WHERE total_deaths IS NOT NULL	and continent is not null
            ORDER BY location, total_deaths DESC
        )
        SELECT continent, 
            SUM(total_deaths) AS total_deaths_per_continent
        FROM max_deaths_per_location
        WHERE continent = '${req.params.continent}'
        GROUP BY continent
        ORDER BY total_deaths_per_continent DESC;`)
        res.send(dbRes.rows);
    }catch(err){
        console.error('Error en la consulta', err);
        res.status(500).send('Error en la consulta');
    }
})
continentGraphsRouter.route('/:continent/population').get(async(req,res) =>{
    try{
        const dbRes= await client.query(`with population_per_country as (
            Select distinct location, population, continent
            from covid_data where continent is not null)
            Select distinct continent, SUM(p.population) as continent_population
            from population_per_country p  
            where continent = '${req.params.continent}'
            group by continent`)
        res.send(dbRes.rows);
    }catch(err){
        console.error('Error en la consulta', err);
        res.status(500).send('Error en la consulta');
    }
})



module.exports = continentGraphsRouter;