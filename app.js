
/*
This is simple way to create node js server
const http =require('http');
http.createServer((req, res)=>{

res.writeHead(200)
res.end("Hello am Iraguha");


}).listen(8080);
*/

/*
const express= require("express");
const app= express();
app.get('/',(req,res)=>{
  res.send("express started")
})
app.listen(()=>{
  console.log("my express app is running on http://localhost:5000");

})
*/


/*
exports.AddNumber=function(a, b){
  return a+b;
}
const Addition= require('./Addition.js')

console.log(Addition.AddNumber(1,2))

*/


var express=require('express');
var app=express();
app.get('/',function(req,res)
{
 res.send('EXpresss server made by Iraguha Is Running.......!');
});
var server=app.listen(3000,()=> {
  console.log("my express server is  running on http://localhost:3000")
});

/*generate express routes to generste message whenever user tried to access url
*/
app.route('/Home').get((req,res)=>{
res.send("Welcome to Iraguha Tech")

})
app.route('/Users').get((req,res)=>{
  res.json({
    Admin:"Iraguha",
    Director:"Cyusa"
    
  })

})

/*

app.set('view engine','jade');
app.get('/',function(req,res)
{
 res.render('index',
 {title:'Guru99',message:'Welcome'})
});
*/
