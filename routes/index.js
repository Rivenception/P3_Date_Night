const path = require("path");
const db = require('../models');
const router = require("express").Router();
const Dates = require("../models/dates.js");


module.exports = function(app) {

router.get("/api/randomdate", async (req, res) => {
  const dates = await db.Date.findAll();
  const randIdx = Math.floor(Math.random() * dates.length);
  res.json(dates[randIdx]);
})

};

