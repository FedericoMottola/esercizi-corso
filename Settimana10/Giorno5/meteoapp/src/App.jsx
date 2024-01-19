import React, { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './pages/SearchResults';


function App() {
  // const [data, setData] = useState({})
  // const [location, setLocation] = useState('')
  // const url = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=f31099d3657a9bc9492af703cf2113ea&lang=it&units=metric'

  // const searchLocation = () => {
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setData(data))
  //   console.log(res.data)
  // }

  

  return (
    // <div className= 'app'>
      
    //   <div className="container">
    //     <div className="top">
    //       <div className="location">
    //         <p>Roma</p>
    //         <div className="temp">
    //           <h1>14°C</h1>
    //         </div>
    //         <div className="description">
    //           <p>Nuvoloso</p>
    //         </div>
    //       </div>
    //     </div>
    //   <div className="bottom">
    //     <div className="feels">
    //       <p className='bold'>15°C</p>
    //       <p>T. Percepita</p>
    //     </div>
    //     <div className="humidity">
    //       <p className='bold'>50%</p>
    //       <p>Umidità</p>
    //     </div>
    //     <div className="wind">
    //       <p className='bold'>5 km/h</p>
    //       <p>Vento</p>
    //     </div>
    //   </div>
    //   </div>
      
    // </div>

<>
<BrowserRouter>
  
  <Routes>
    <Route path="/" element={<Home page="Homepage"/>} />
    
    <Route path="/risultati" element={<SearchResults />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  
</BrowserRouter>
</>
  )
}

export default App
