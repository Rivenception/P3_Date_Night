const path = require("path");

const router = require("express").Router();
const Dates = require("../models/dates.js");

// API Routes
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// router.get("/api/datelist", (req, res) => {
//   Dates.find({})
//     .then(dbDate => {
//       res.json(dbDate);
//     })
//     .catch(err => {
//       res.status(404).json(err);
//     });
// });

module.exports = router;
