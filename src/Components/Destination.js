import React, { useState, useEffect } from 'react';
import './css/Destination.css';

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/destinations');
      const data = await response.json();
      setDestinations(data);
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  };

  const handleLearnMore = (event, url) => {
    event.preventDefault();
    // Redirect to the specific URL
    window.location.href = url;
  };

  return (
    <div>
      {destinations.map((destination, index) => (
        <div key={index} className="card">
          <img src={destination.image} alt={destination.name} />
          <div>
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <p>Location: {destination.location}</p>
            <a
              href={destination.bookingUrl}
              onClick={(event) => handleLearnMore(event, destination.bookingUrl)}
            >
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Destination;
