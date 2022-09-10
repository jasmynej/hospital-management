const mongoose = require("mongoose")

const patientSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    dateOfBirth:Date
})

module.exports  = mongoose.model("Patient",patientSchema)