const express = require('express');
const graphrouter = express.Router();
const path = require('path')



graphrouter.route("/continents").get(async(req,res) => {
    res.sendFile((path.join(__dirname, '../frontend/contmap.html')));
})

graphrouter.route("/countries").get(async(req,res) => {
res.sendFile((path.join(__dirname, '../frontend/map.html')));
})


module.exports=graphrouter;