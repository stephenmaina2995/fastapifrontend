import React, { useState, useEffect } from 'react';

function Destination() {
  const [data, setData] = useState([]);
  const [endpoint, setEndpoint] = useState('http://127.0.0.1:8000/destinations');

  const fetchData = async () => {
    try {
      const response = await fetch(endpoint);
      const destinations = await response.json();
      return destinations;
    } catch (error) {
      console.log('Error in fetching destinations: ', error);
      return [];
    }
  };

  useEffect(() => {
    fetchData()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log('Error in fetching destinations: ', err);
      });
  }, []);

  return (
    
    <div style={{width:'50%'}}>
    <div className='destination-item flex'>
      {/* <h1>Travel</h1> */}
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} width="100%"/>
          <p>{item.name}</p>
          <p>{item.location}</p>
          <p>{item.description}</p>
          <button>Interested</button>
          
        </div>
      ))}
    </div>
    </div>
  );
}

export default Destination;
