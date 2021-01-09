import React from 'react'


const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const setVoteClass=(vote)=>{
 if(vote >=8){
     return 'green';
 } else if(vote >=6){
     return 'orange';
 }else{
     return 'red';
 }
}
const Movie = ({movie}) => {
    return (

<div className="movie">
            <img src={IMG_PATH+movie.poster_path} alt={movie.title} />
            <div className="movie_info">
            <h3>{movie.original_title}</h3> <span className={`tag ${setVoteClass(movie.vote_average)}`}>{movie.vote_average}</span>
            </div>
            <div className="movie_desc">
                <h3>Overview:</h3>  {movie.overview}
            </div>
        </div>

    )
}

export default Movie
