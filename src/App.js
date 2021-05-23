import './App.css';
import React, {useState, useEffect} from 'react';
import socket from './components/Socket';

function App() {
  const [vuelos, setVuelos] = useState([{code:'Sin Información', airline:'', origin:[-100,-100], destination:[-100,-100], plane:'', seats: 1, passengers:[{name:'', age:1}]}]);
  
  useEffect(() => {
    socket.on('FLIGHTS', data => {
      setVuelos(data)
    })  
  }) 

  const getVuelos = (e) => {
    e.preventDefault()
    socket.emit('FLIGHTS')
  }

  const renderVuelos = () => {
    return vuelos.map(({code, airline, origin, destination, plane, seats, passengers}, index) => (
      <div key={index}>
      <br></br>
      <div className = "card">
        <b>{code}- {airline}</b>
        <br></br>
        <b>Origen:</b> {origin.map((item, j)=> (
            <div key={j}>
              <li>{item}</li>
            </div>))}
        <b>Destino:</b> {destination.map((item, k)=> (
            <div key={k}>
              <li>{item}</li>
            </div>))}
        <b>Avión:</b> {plane}
        <br></br>
        <b>Cantidad asientos:</b> {seats}
        <br></br>
        <b>Pasajeros:</b> {passengers.map(({name, age}, f)=> (
            <div key={f}>
             <li>{name} - {age}</li>
            </div>))}
      </div>
      </div>
    ))
  }

  return (
      <div className = "App">
        <div className = "header">
          <h1>Bienvenido a Vuelos</h1>
          <form onSubmit={getVuelos}>
            <button>Solicitar información de vuelos</button>
          </form>
        </div>



        <div className="column-info">
          <h2>Información de vuelos</h2>
          {renderVuelos()}
        </div>
      </div>
  );
}

export default App;
