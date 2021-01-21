const path = require("path");
const db = require('../models');
const router = require("express").Router();
const Dates = require("../models/dates.js");

// API Routes
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

router.get("/api/randomdate", async (req, res) => {
  const dates = await db.Date.findAll();
  const randIdx = Math.floor(Math.random() * dates.length);
  res.json(dates[randIdx]);
})

router.get("/api/blogs", (req, res) => {
  db.Blog.findAll()
    .then(dbBlog => {
      res.json(dbBlog);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

router.post("/api/blogs", function (req, res) {
  db.Blog.create(req.body).then(function (dbBlog) {
      res.json(dbBlog);
  });
});

router.get("/api/users", (req, res) => {
  db.User.findAll()
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;
