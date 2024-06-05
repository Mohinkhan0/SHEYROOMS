const mongoose= require("mongoose");

var mongoURL = 'mongodb+srv://mohin74569177:7456917763@cluster0.ooajxqi.mongodb.net/mern-rooms'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser:true})


var connection = mongoose.connection


connection.on('error' , ()=>{
    console.log('Mongodb connection is failed')
})

connection.on('connected' , ()=>{
    console.log('Mongodb connection is success')
})

module.exports = mongoose