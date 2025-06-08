const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  Employename: String,
  Employeid: String,
  designation: String,
  email: String,
  education: String,
  address: String,
  salary: String,
  joiningDate: String,
  performance: String
});

module.exports = mongoose.model('employees', employeeSchema);
