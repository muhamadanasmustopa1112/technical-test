const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  '': Number,
  Number: Number,
  'Name of Location': String,
  Date: String,
  'Login Hour': String,
  Name: String,            
  Age: String,              
  gender: Number,          
  Email: String,           
  'No Telp': String,       
  'Brand Device': String,   
  'Digital Interest': String,
  'Location Type': String
});

module.exports = mongoose.model('Data', DataSchema, 'datas');
