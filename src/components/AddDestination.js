import React, { useState } from 'react';

function AddDestination() {
  const [destinationInfo, setDestinationInfo] = useState({
    id: 1,
    name: '',
    image: '',
    description: '',
    location: '',
    visitURL: '',
    interested: '',
    user_id: 1,
  });

  const updateForm = (e) => {
    // setDestinationInfo({
    //   ...destinationInfo,
    //   [e.target.name]: e.target.value,
    // });
    setDestinationInfo(prev => {return {...prev, [e.target.name]:e.target.value}})
  };

const postData = (e) => {
    e.preventDefault();
    console.log(destinationInfo)
    // Send a POST request with the destinationInfo object
    fetch('http://127.0.0.1:8000/destinations', {
      method: 'POST',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(destinationInfo)
    //     {
    //     name: destinationInfo['name'],
    //     image: destinationInfo['image'],
    //     description: destinationInfo['description'],
    //     location: destinationInfo['location'],
    //     visitURL: destinationInfo['visitURL'],
    //   },
    })
    .then((response) => {
      if (response.ok) {
        // Success
        console.log('Destination added successfully');
        // Reset the form fields
        setDestinationInfo({
            id: 1,
          name: '',
          image: '',
          description: '',
          location: '',
          visitURL: '',
          interested: '',
          user_id: 1,
        });
      } else {
        // Error
        console.log('Failed to add destination');
      }
    })
    .catch((error) => {
      console.log('Error in adding destination:', error);
    });
  };
  

  return (
    <>
      <form onSubmit={postData}>
      <input
          type="number"
          name="id"
          placeholder="id"
          value={destinationInfo.id}
          onChange={updateForm}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={destinationInfo.name}
          onChange={updateForm}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={destinationInfo.image}
          onChange={updateForm}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={destinationInfo.description}
          onChange={updateForm}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={destinationInfo.location}
          onChange={updateForm}
        />
        <input
          type="text"
          name="visitURL"
          placeholder="Visit URL"
          value={destinationInfo.visitURL}
          onChange={updateForm}
        />
        <input
          type="text"
          name="interested"
          placeholder="interested"
          value={destinationInfo.interested}
          onChange={updateForm}
        />
        <input
          type="number"
          name="user_id"
          placeholder="user_id"
          value={destinationInfo.user_id}
          onChange={updateForm}
        />
        <button type="submit">Add Destination</button>
      </form>
    </>
  );
}

export default AddDestination;
