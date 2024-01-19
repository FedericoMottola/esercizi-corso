import React, { useState } from 'react'
import './index.css'

function App() {
  // const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f31099d3657a9bc9492af703cf2113ea&lang=it&units=metric'

  const [count, setCount] = useState(0)

  return (
    <div className= 'app'>
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
          <p>15°C</p>
        </div>
        <div className="humidity">
          <p>50%</p>
        </div>
        <div className="wind">
          5 km/h
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default App
