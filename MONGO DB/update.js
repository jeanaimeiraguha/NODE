const mongodb= require('mongodb');
const url='mongodb://localhost://EmployeeDB'
MongoClient.connect(url((err, db)=>{
db.collection('Employee').updateOne({
"EmployeeName":"Iraguha"
},{
    $set:{
        "EmployeeName":"Mugisha"
    }
})

}))