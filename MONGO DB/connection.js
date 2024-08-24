//CREATE CONNECTION WITH MONGODB


const MongoClient= require('mongodb').MongoClient;

const url='mongodb://localhost/EmployeeDB';

MongoClient.connect(url,(err, db)=>{

    console.log("connected");
    db.close();

})

/*



####The first step is to include the mongoose module which
is done through the require function. Once this module
is in place, we can use the necessary functions
available in this module to create connections to the
database.

Next we specify our connect string to the database. In
the connect string there are 3 key values which are
passed.

*/




