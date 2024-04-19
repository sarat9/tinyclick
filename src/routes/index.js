const express = require('express')
const router = express.Router();


const urlRoute = require("./url/url")


router.use(urlRoute);



module.exports = router;