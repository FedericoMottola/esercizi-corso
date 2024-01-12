import React from 'react';
import Galleries from './Galleries'


const Main = () => {

    const saga =['avatar','shrek','harry potter']

    return (

        <main className="container-fluid text-white pt-3">
        <div className="row justify-content-between align-items-center ">
                    <div className="col d-flex align-items-center">
                        <div className="me-5">
                    <h1>TV Shows</h1></div>
                    <div className="dropdown">
                        <button className="bg-dark border border-white text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Genres
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li><a className="dropdown-item active" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                      </div>
                      
                    
                  </div>

                  <div className="col-1 me-1 d-flex">
                    
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" className="bi bi-list border border-white text-white" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                      </svg></a>
                      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" fill="currentColor" className="bi bi-grid-fill border border-white text-white" viewBox="0 0 16 16">
                        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"/>
                      </svg></a>
                  </div>
                </div>
                
                      {saga.map((saga, index) => (
        <Galleries key={index} saga={saga} />
      ))}
                
                
                </main>
        );
};

export default Main;