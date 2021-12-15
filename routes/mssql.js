const express = require('express')
const router = express.Router()
const sql = require('mssql')
var config = require('./dbconfig')

router.get('/products',(req,res) => {
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from Product', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordset);
            
        });
    });
})

router.get('/OpenTable',(req,res)=>{
    sql.connect(config,(err)=>{
        if(err) console.log(err)

        var request = new sql.Request()

        request.query('select * from OpenTable',(err,recordset) => {
            if (err) console.log(err)

            res.send(recordset.recordset)
        })
    })
})    

module.exports = router