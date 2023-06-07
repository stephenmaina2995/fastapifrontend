// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Destination from './components/Destination';
import Header from './components/Header';

function App() {
  const[data, setData]= useState([])
  const [endpoint, setEndpoint]= useState([])

  useEffect(() =>{
    fetch('http://127.0.0.1:8000/destinations')
    .then(response => response.json())
    .then(data => console.log(data))
  },[]);

  const[list, setList] = useState([]);

  return (
    <div className="App">
      <Header/>
      <Destination/>
      <>
        {/* <p className="title">Registration Form</p> */}

        <form className="App">
          <input type="Name" placeholder="Name" />
          <input type="URL" placeholder="Image" />
          <input type="Description" placeholder="Description" />
          <input type="Location" placeholder="Location" />
          <input type="Visit URL" placeholder="Visit URL" />
          {/* <input type={"submit"} */}
          <button>Add Destination</button>
          {/* style={{ backgroundColor: "#a1eafb" }} /> */}
        </form>
      </>
      {/* <destination/> */}
      {/* <p>{destination.name}</p>
      <p>{destination.location}</p>
      <p>{destination.image}</p> */}
      {/* <h1>Travel </h1> */}
    </div>
  );
}

export default App;
