const express = require('express');
const countriesGraphsRouter = express.Router();
const client = require("../databasecontroller.js");


countriesGraphsRouter.route('/:country/')

module.exports = countriesGraphsRouter;