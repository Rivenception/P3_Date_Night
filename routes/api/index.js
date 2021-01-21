const router = require("express").Router();
const apiRoute = require("./data");

router.use("/data", apiRoute);

module.exports = router;