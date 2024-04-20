import React, { useEffect, useState } from 'react'

import axios, { AxiosError } from 'axios'




function App() {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes').then((response)=>{
      setjokes(response.data)

  
    }).catch((error)=>{
      console.log(error) 
    })
  })


  return (
<>
{
  jokes.map((joke)=>{
  
    return (
      <div key={joke.id}>

        <h1>{joke.joke}</h1>
      </div>
    )
  })
}

</>

  )
}

export default App
