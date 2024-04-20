const express = require('express');
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000



app.get('/api/jokes', (req , res)=>
{

  const   jokes= [
        {
            id: 1,
            joke: 'I am a cat'
        },
        {
            id: 2,
            joke: 'I am a dog'
        },
        {
            id: 3,
            joke: 'I am a bird'
        }
    ]
    res.json(
       
jokes
    )

   

})


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})