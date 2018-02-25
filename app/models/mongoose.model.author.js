let mongoose = require("mongoose");


let employeeSchema = mongoose.Schema({
    fname: String,
    lname: String,
    dob: Date,
    employeeID: String
  });

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
employeeSchema.methods.fullname =  function() {
    console.log("Employees fullname is '" + this.fname + " " + this.lname + "'");
  }
  
employeeSchema.methods.howOld =  function()  {
  console.log(this.fname + " is " + calcAge(this.dob) + " years old.");
}
  

let calcAge = (dob) => {
  var birthday = +new Date(dob);
  return ~~((Date.now() - birthday) / (31557600000));
}



let Employee = mongoose.model('Employee', employeeSchema);

module.exports=Employee;