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
