var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers', function(req,res){
    fs.readFile(__dirname+"/"+"users.json","utf-8",function(err,data){
        console.log(data);
        res.end(data);
    })
})

app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })

var userToBeAdded = {
    "user4":{
        "name":"Oguzhan",
        "password":"12345",
        "proffesion":"programmer",
        "id": 4
    }
}

app.post('/addUser', function(req,res){
    // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    data = JSON.parse( data );
    data["user4"] = userToBeAdded["user4"];
    console.log( data );
    res.end( JSON.stringify(data));
    })
})

app.delete('/deleteUser',function(req,res){
    // Read existing users
    fs.readFile(__dirname + "/" + "users.json" , 'utf-8' , function(err,data){
        data = JSON.parse(data);
        delete data["user"+ 2 ]
        res.end(JSON.stringify(data));
    });
})


var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s",host,port)
})