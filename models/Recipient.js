const mongoose = require('mongoose')
const {Schema} = mongoose

const recipientSchema = new Schema({
  email: String,
  responsded: {type:Boolean, default:false}},

})

modules.exports = recipientSchema;
