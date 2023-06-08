// import React, { useState, useEffect } from 'react';

// function Destination() {
//   const [data, setData] = useState([]);
//   const [endpoint, setEndpoint] = useState('http://127.0.0.1:8000/destinations');

//   const fetchData = async () => {
//     try {
//       const response = await fetch(endpoint);
//       const destinations = await response.json();
//       return destinations;
//     } catch (error) {
//       console.log('Error in fetching destinations: ', error);
//       return [];
//     }
//   };

//   useEffect(() => {
//     fetchData()
//       .then((res) => {
//         setData(res);
//       })
//       .catch((err) => {
//         console.log('Error in fetching destinations: ', err);
//       });
//   }, []);

//   return (
    
//     <div style={{width:'50%'}}>
//     <div className='destination-item flex'>
//       {/* <h1>Travel</h1> */}
//       {data.map((item) => (
//         <div key={item.id}>
//           <img src={item.image} alt={item.name} width="100%"/>
//           <p>{item.name}</p>
//           <p>{item.location}</p>
//           <p>{item.description}</p>
//           <button>Interested</button>
          
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// }

// export default Destination;
import React, { useState, useEffect } from 'react';

function Destination() {
  const [data, setData] = useState([]);
  const [endpoint, setEndpoint] = useState('http://127.0.0.1:8000/destinations');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          location,
          description,
        }),
      });

      if (response.ok) {
        const destinations = await fetchData();
        setData(destinations);
        // Clear form fields
        setName('');
        setLocation('');
        setDescription('');
      } else {
        console.log('Error in inserting destination');
      }
    } catch (error) {
      console.log('Error in inserting destination: ', error);
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
    <div style={{ width: '50%' }}>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Add Destination</button>
      </form> */}

      <div className="destination-item flex">
        {data.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} width="100%" />
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
