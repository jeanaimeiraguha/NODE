const mongodb = require('mongodb');
const url='mongodb://localhost://EmployeeDB';
MongoClient.connect(url,(err,db)=>{

db.collection('Employee').insertOne({
    Employeeid:1,
    EmployeeName:"Iraguha"
});

});