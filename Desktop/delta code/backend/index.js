const express = require('express')

require('dotenv').config()

const app = express()
const port = 3000 || process.env.PORT


// routes

app.get('/', (req, res)=>{
    res.json({

        name:"vikash sharma ", 
        course:"bca"
    })
})

//listing on port 3000

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})