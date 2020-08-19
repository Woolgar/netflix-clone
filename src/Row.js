import React, {useState, useEffect} from 'react'
import axios from "./axios"
import './Row.css';

// Base url for movie posters
const base_url ="https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based on a specific conditions/variables
    useEffect(()=> {
        // if [], empty, run once when the row loads, and don't run again
        async function fetchData(){
            const request = await axios.get(fetchUrl);    // wait for answer then do something
            // console.log(request.data.results);
            setMovies(request.data.results);
            return request;

        }
        fetchData()

    }, [fetchUrl]);


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {/* posters */}

                {movies.map(movie => (
                    
                    <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
            {/*  container > posters/images */}

        </div>
    )
}

export default Row
