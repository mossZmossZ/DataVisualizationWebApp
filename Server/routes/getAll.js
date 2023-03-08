var express = require('express');
const { model } = require('mongoose');
var router = express.Router();
const {GetAll} = require("../controller/getAll.js")

router.get('/getAll',GetAll);

module.exports = router