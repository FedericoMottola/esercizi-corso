import React from "react";
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

const Galleries = ({ saga }) => {
  const [films, setFilms] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(
        "http://www.omdbapi.com/?s=" + saga + "&apikey=5aec6ec7"
      );
      if (res.ok) {
        let data = await res.json();
        setFilms(data.Search);
        console.log(data.Search);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const chunkedFilms = films.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 6);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; 
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
  return (
    
    
    <section>
        <style>
        {`
          .movie-cover {
            width: 100%;
            height: auto;
            min-height: 300px;
            max-height: 300px; 
          }
        `}
      </style>
          <h4 className="mt-4 text-uppercase">{saga}</h4>
          <Carousel className="col-md-12 col-11" indicators={true} controls={false}>
            {chunkedFilms.map((chunk, index) => (
              <Carousel.Item key={index}>
                <div className="row">
                  {chunk.map((film) => (
                    <div key={film.imdbID} className="col-md-2">
                      <img
                        className="img-fluid movie-cover d-block mx-auto"
                        src={film.Poster}
                        alt={film.Title}
                        
                      />
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          </section>


  );
};

export default Galleries;
