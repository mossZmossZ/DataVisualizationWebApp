var express = require('express');
var router = express.Router();
const {GetAll} = require("../controller/getAll.js")

router.get('/getAll',GetAll);

module.exports = router