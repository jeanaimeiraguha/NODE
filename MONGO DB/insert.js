
const promise =require('Promise')
const mongodb = require('mongodb');
const url='mongodb://localhost://EmployeeDB';
MongoClient.connect(url,(err,db)=>{

db.collection('Employee').insertOne({
    Employeeid:1,
    EmployeeName:"Iraguha"
});

//use of promises
.then(function(db) {
    db.collection('Employee').insertOne({
    Employeeid: 4,
    EmployeeName: "NewEmployee"
    })
    .then(function(db1) {
    db1.collection('Employee').insertOne({
    Employeeid: 5,
    EmployeeName: "NewEmployee1"
    })
    })
   });
});