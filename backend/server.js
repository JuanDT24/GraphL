const express = require("express");
const path=require('path')
const app=express();
const client = require("../backend/databasecontroller.js")


app.use(express.static(path.join(__dirname, '../frontend')));
app.use("/graphs", require("../backend/graphRouter.js"));
app.get('/', (req, res) => {
    res.sendFile(path.join('../frontend', 'index.html'));
});
client.connect()
app.get('/continent/:continent', (req, res) => {
    client.query(`Select distinct continent from covid_data where continent = '${req.params.continent}';`, (err, dbRes) =>{
    if(!err){
        res.send(dbRes.rows);
    }
    });
    client.end();
})
app.use((req, res) => {
    res.send('<h1> Error 404: Resource not found </h1>')
});
app.listen(3000, ()=> {
    console.log("App listening on port 3000")
});
