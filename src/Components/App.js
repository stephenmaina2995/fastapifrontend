
// import './App.css'
// import { useEffect, useState } from 'react'

// const App = () => {
//   const [data, setData] = useState([])
//   const [endpoint, setEndpoint] = useState('http://127.0.0.1:8000/destinations')

//   const fetchData = async () => {
//     try {
//       const response = await fetch(endpoint)
//       const destinations = await response.json()
//       return destinations
//     } catch (error) {
//       console.log('Error in fetching destinations: ', error)
//       return []
//     }
//   }

//   useEffect(() => {
//     fetchData()
//       .then((res) => {
//         setData(res)
//       })
//       .catch((err) => {
//         console.log('Error in fetching destinations: ', err)
//       })
//   }, [])

//   return (
//     <div className='App'>
//       <h1>Travel</h1>
//       {data.map((destination) => (
//         <div key={destination.id}>
//           <p>{destination.name}</p>
//           <p>{destination.location}</p>
//           <p>{destination.description}</p>

//           <img src={destination.image} alt={destination.name} />
//         </div>
//       ))}
//     </div>
//   )
// }

// export default App

// import './App.css'
import { useState, useEffect } from 'react'
import Destination from './Destination'

const App = () => {
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    fetchDestinations()
  }, [])

  const fetchDestinations = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/destinations')
      const data = await response.json()
      setDestinations(data)
    } catch (error) {
      console.error('Error fetching destinations:', error)
    }
  }

  return (
    <div className='App'>
      <h1>Travel</h1>
      <Destination destinations={destinations} />
    </div>
  )
}

export default App
