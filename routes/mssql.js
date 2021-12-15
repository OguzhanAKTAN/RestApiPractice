const express = require('express')
const router = express.Router()
const sql = require('mssql')
var config = require('./dbconfig')

router.get('/products',(req,res) => {
    console.log("/products")
    console.log("Req="+req.body+req.complete)
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

module.exports = router