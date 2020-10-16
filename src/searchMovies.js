/* 
    Create the SearchMovies component
    -- Form with a className of form
    -- Label with htmlFor="query" and a className of label
    -- Input of type text with a name of "query" and a placeholder
    -- Button with ClassName of button and a type of submit
*/

import React, {useState} from "react";
import './App.css';
import MovieCard from "./movieCard";

export default function SearchMovies(){
    // state: 1. input query  2. movies
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();
        // use Fetch API to request movie data from tmdb API
        const url = `https://api.themoviedb.org/3/search/movie?api_key=d9955252c6a76032ee2da0f3798fa1b9&query=${query}&include_adult=false`;

        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
    }

    return (
        <>
        <form className="form" onSubmit={e => searchMovies(e)}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Harry Potter"
                value={query}
                onChange={(e) => setQuery(e.target.value)}/>
            <button className="button" type="submit">Search</button>
        </form>

        <div className="card-list">
            {movies.filter((movie) => movie.poster_path).map((movie) => (
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
        </>
    )
}
