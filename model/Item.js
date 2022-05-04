const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    
    name: 'String',
    quantity: 'String',
    date:'String',
    date2: {
        type: Date,
        default: Date.now
    },
    userId:'String'
    ,
    img:"String"



})

module.exports = mongoose.model('item', userSchema)