//server.js
process.env.NODE_ENV = process.env.NODE_ENV || "development";

let config = require("express");
let envConfig = require("./config/env/development");

console.log("db: " +  envConfig.db);

let mongoose = require('mongoose');
mongoose.connect(envConfig.db);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("opened");

    let Employee = require("./app/models/mongoose.model.employee");

    let person1 = new Employee({ fname: 'Sam', lname: "Smith", employeeID: "8900998", dob: "1977-12-25" });
    let person2 = new Employee({ fname: 'Julie', lname: "Aardvark", employeeID: "2445465", dob: "1978-10-22" });
  
    person1.howOld();

    person1.save(function (err, data) {
        if (err) return console.error(err);
        console.log("saved data: " + data);
        person1.fullname();
        
        person2.save(function (err, data) {
            if (err) return console.error(err);
            console.log("saved data: " + data);
            person2.fullname();
            person2.howOld();

            console.log("-----------------------------------------")
            Employee.find(function (err, employees) {
                if (err) return console.error(err);
                console.log(employees);
              }) 
        

        });
    });

    







});