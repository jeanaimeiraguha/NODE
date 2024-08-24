const mongodb = require('mongodb');
const url='mongodb://localhost:EmployeeDB'
MongoClient.connect(url,(err, db)=>{
    const cursor=db.collection('Employee').find();
    cursor.each((err,doc)=>{
        console.log(doc)
    });
});



/*

In the first step, we are creating a cursor (A cursor is a
pointer which is used to point to the various records
fetched from a database. The cursor is then used to
iterate through the different records in the database.
Here we are defining a variable name called cursor
which will be used to store the pointer to the records
fetched from the database. ) which points to the
records which are fetched from the MongoDb
collection. We also have the facility of specifying the
collection 'Employee' from which to fetch the records.
The find() function is used to specify that we want to
retrieve all of the documents from the MongoDB
collection.
*/