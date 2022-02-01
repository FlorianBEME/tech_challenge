const router = require("express").Router();
const crews = require("./crews.routes.js");

router.use("/crews", crews);

module.exports = router;
