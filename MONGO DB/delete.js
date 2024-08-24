const mongodb= require('mongodb');
const url='mongodb://localhost://EmployeeDB'

mongoClient.connect(url,(err, db)=>{

    db.collection('Employee').deleteONe({
        "EmployeeName": "Mugisha"
    })
})