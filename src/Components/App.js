import { useState, useEffect } from 'react'
import Destination from './Destination'
import Header from './Header'
import AddDestination from './AddDestination'

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
      <Header />
      <Destination destinations={destinations} />
      <AddDestination />
    </div>
  )
}

export default App
