import React, { useState } from 'react';

const EditDestination = ({ destination, onSave, onCancel }) => {
  const [name, setName] = useState(destination.name);
  const [description, setDescription] = useState(destination.description);
  const [location, setLocation] = useState(destination.location);
  const[category,setCategory] = useState(destination.category)

  const handleSave = (event) => {
    event.preventDefault();
    const updatedDestination = {
      id: destination.id,
      name,
      description,
      location,
      category
    };
    onSave(updatedDestination);
  };

  return (
    <>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type='text'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type='text'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </>
  )
};

export default EditDestination;
