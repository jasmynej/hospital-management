var express = require('express');
var router = express.Router();
var Patient = require("../models/Patient")
router.get('/',async function(req,res){
    const allPatients = await Patient.find({})
    res.json(allPatients)
})

module.exports = router;