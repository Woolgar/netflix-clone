import React, {useState, useEffect} from 'react'
import axios from "./axios"
import './Row.css';
import YouTube from "react-youtube";
import movieTrailer from 'movie-trailer';

// Base url for movie posters
const base_url ="https://image.tmdb.org/t/p/original/";


// Youtube vid player
const opts = {
    height: "390",
    width: "100%",
    playerVars: {
        autoplay: 1,
    },
};



function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    console.log(movies);

    //  runs based on a specific conditions/variables
    useEffect(()=> {
        // if [] empty, run once when the row loads, and don't run again
        async function fetchData(){
            const request = await axios.get(fetchUrl);    // wait for answer then do something
            // console.log(request.data.results);
            setMovies(request.data.results);
            return request;

        }
        fetchData()

    }, [fetchUrl]);

const handleClick = (movie) => {

    if (trailerUrl) {
        setTrailerUrl('');
    } else {
        movieTrailer(movie?.name || movie?.title || "")
        
        .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v')); // Gets vid ID value from url
        }).catch(error => console.log(error));
    }
}
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* posters */}

                {movies.map(movie => (
                    
                    <img key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} loading="lazy"/>
                    
                ))}
                
            </div>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} /> }
            {/*  container > posters/images */}

        </div>
    )
}

export default Row
