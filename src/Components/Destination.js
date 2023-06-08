import React, { useState, useEffect } from 'react'
import './css/Destination.css'

const Destination = () => {
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
    fetchDestinations()
  }, [])

  const fetchDestinations = async () => {
    
    const response = await fetch('http://127.0.0.1:8000/destinations')
    const data = await response.json()
    setDestinations(data)
  }

  const handleLearnMore = (event, destination) => {
    event.preventDefault()
    const updatedDestinations = destinations.map((dest) => {
      if (dest.id === destination.id) {
        return { ...dest, showVisitUrl: true }
      }
      return dest
    })
    setDestinations(updatedDestinations)
  }

const handleDelete = (event, id) => {
  event.preventDefault()
  

  fetch(`http://127.0.0.1:8000/delete/destinations/${id}`, {
   method: 'DELETE',
  
    
  })
    .then((response) => {
      if (response.ok) {
        fetchDestinations()
      } else {
        console.error('Failed to delete destination:', response.status)
      }
    })
    .catch((error) => {
      console.error('Failed to delete destination:', error)
    })
}


  return (
    <div className='card-container'>
      {destinations.map((destination) => (
        <div key={destination.id} className='card'>
          <img src={destination.image} alt={destination.name} />
          <div>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <p>Location: {destination.location}</p>
            {destination.showVisitUrl && (
              <p>Visit URL: {destination.visitUrl}</p>
            )}
            <a
              href={destination.visitUrl}
              onClick={(event) => handleLearnMore(event, destination)}
            >
              Learn More
            </a>
            <br />

            <button onClick={(event) => handleDelete(event, destination.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Destination
