import React from 'react'
import { useState, useEffect} from 'react';



const Galleries = ({saga}) => {
    const [films, setFilms] = useState([]);
    const fetchData = async () => {
        try {
            const res = await fetch (
                'http://www.omdbapi.com/?s='+saga+'&apikey=5aec6ec7'
            );
            if (res.ok) {
                let data = await res.json();
                setFilms(data.Search);
                console.log(data.Search);
            } else {
                console.log('error');
            }
        } catch (error) {
            console.log(error);
        }
    };

useEffect(() => {
    fetchData();
}, []);

    return (
<section>


            <div className="row p-0 mb-0">
                <h4 className="mt-4 text-uppercase">{saga}</h4>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="movie-row">
                            <div className="row">
                                {films.map((film) =>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover d-block mx-auto " src={film.Poster} alt={film.Title} width= '100%' height ='auto'/>
                                </div> )}
                              
                                
                      
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                    <div className="movie-row">
                        <div className="row">
                        {films.map((film) =>
                                <div className="col-md-2">
                                    <img className="img-fluid movie-cover d-block mx-auto" src={film.Poster} alt={film.Title} width= '100%' height ='auto'/>
                                </div> )}
                           
                  
                </div>
              </div>
            </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
        </div>
           </section>





        );
       
};

export default Galleries;