import React, { useState } from 'react'
import './index.css'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=f31099d3657a9bc9492af703cf2113ea&lang=it&units=metric'

  const searchLocation = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data))
    console.log(res.data)
  }

  

  return (
    <div className= 'app'>
      <div className="search">
        <input 
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder='Inserisci la tua località'
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Roma</p>
            <div className="temp">
              <h1>14°C</h1>
            </div>
            <div className="description">
              <p>Nuvoloso</p>
            </div>
          </div>
        </div>
      <div className="bottom">
        <div className="feels">
          <p className='bold'>15°C</p>
          <p>Percepita</p>
        </div>
        <div className="humidity">
          <p className='bold'>50%</p>
          <p>Umidità</p>
        </div>
        <div className="wind">
          <p className='bold'>5 km/h</p>
          <p>Vento</p>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default App
