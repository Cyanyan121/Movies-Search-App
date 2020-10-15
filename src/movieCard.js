import React from 'react';
import "./App.css";

export default function MovieCard(props) {
    const {movie} = props;
    const viewMovie = () => {
        const url = `https://www.themoviedb.org/movie/${movie.id}`;
        window.location.href = url;
    }

    const playMovie = () => {
        const url = `https://www.themoviedb.org/movie/${movie.id}/videos`;
        window.location.href = url;
    }

    return (
        <div className="card" key={movie.id}>
        <img className="card--image" 
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} 
                alt={movie.title + " poster"} />
        <div className="card--content">
            <h3 className="card--title">{movie.title}</h3>
            <p><small className="card--date">REALEASE DATE: {movie.release_date}</small></p>
            <p><small className="card--rating">RATING: {movie.vote_average}</small></p>
            <p className="card-desc">{movie.overview}</p>
            <button className="card--play" type="button" onClick={playMovie}>Play</button>
            <button className="card--view" type="button" onClick={viewMovie}>View</button>
        </div>
    </div>
    )
}