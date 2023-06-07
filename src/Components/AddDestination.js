import React, { useState } from 'react'

function AddDestination() {
  const [destinationInfo, setDestinationInfo] = useState({
    name: '',
    image: '',
    description: '',
    location: '',
    visitURL: '',
  })

  const updateForm = (e) => {
    setDestinationInfo({
      ...destinationInfo,
      [e.target.name]: e.target.value,
    })
  }

  const postData = (e) => {
    e.preventDefault()
    // Send a POST request with the destinationInfo object
    fetch('http://127.0.0.1:8000/update/destinations', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: destinationInfo['name'],
        image: destinationInfo['image'],
        description: destinationInfo['description'],
        location: destinationInfo['location'],
        visitURL: destinationInfo['visitURL'],
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Success
          console.log('Destination added successfully')
          // Reset the form fields
          setDestinationInfo({
            name: '',
            image: '',
            description: '',
            location: '',
            visitURL: '',
          })
        } else {
          // Error
          console.log('Failed to add destination')
        }
      })
      .catch((error) => {
        console.log('Error in adding destination:', error)
      })
  }

  return (
    <>
      <form onSubmit={postData}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={destinationInfo.name}
          onChange={updateForm}
        />
        <input
          type='text'
          name='image'
          placeholder='Image URL'
          value={destinationInfo.image}
          onChange={updateForm}
        />
        <input
          type='text'
          name='description'
          placeholder='Description'
          value={destinationInfo.description}
          onChange={updateForm}
        />
        <input
          type='text'
          name='location'
          placeholder='Location'
          value={destinationInfo.location}
          onChange={updateForm}
        />
        <input
          type='text'
          name='visitURL'
          placeholder='Visit URL'
          value={destinationInfo.visitURL}
          onChange={updateForm}
        />
        <button type='submit'>Add Destination</button>
      </form>
    </>
  )
}

export default AddDestination
