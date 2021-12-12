const express = require('express')
const router = express.Router()
var fs = require('fs')

router.get('/', (req,res) => {
    fs.readFile(__dirname+"/"+"users.json","utf-8",(err,data) => {
        console.log(data);
        res.end(data);
    })
})

router.get('/:id', (req, res) => {
    // First read existing users.
    fs.readFile( __dirname + "/" + "users.json", 'utf8', (err, data) => {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       console.log(req.body);
       res.end( JSON.stringify(user));
    });
 })

 module.exports = router 