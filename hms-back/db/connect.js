const mongoose = require("mongoose")

function connectDb(){
    mongoose.connect("mongodb://localhost:27017/hospital-management-system",{useNewUrlParser:true})
    .then(()=> {
        console.log("Connected!")
    })
}

module.exports = {connectDb}