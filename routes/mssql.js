const express = require('express')
const router = express.Router()
const sql = require('mssql')

router.get('/products',(req,res) => {
    console.log("/products")
    async () => {
        try {
            console.log("uloo")
            // make sure that any items are correctly URL encoded in the connection string
            await sql.connect('Server=localhost,1433;Database=HermanosBeta')
            const result = await sql.query`select * from Product `
            console.dir(result)
        } catch (err) {
            // ... error checks
            console.log(err)
        }
    }
})

module.exports = router