import React, { useEffect, useState } from 'react'
import {movieRating} from '../../MovieData'
import RatingCard from './RatingCard'

export default function Rating() {
    const [Movies, setMovies] = useState([])
    
    useEffect(() => {
        setMovies(movieRating)
    }, [Movies])

    const handleUpVote = movieId=>{
        let movieVote = [...Movies]
        movieVote.map(movie=>{
            if(movie.id===movieId){
                //  console.log("cek")
                 movie.vote_count = movie.vote_count + 1;
                 return movie
            }else{
                return movie
            }
        });
        setMovies(movieVote)
    }

    const handleLike = movieId =>{
        let Movie = [...Movies]
        Movie.map(movie=>{
            if(movie.id===movieId){
                //  console.log("cek")
                 movie.popularity = movie.popularity + 1;
                 return movie
            }else{
                return movie
            }
        })
        setMovies(Movie)
    }


    return (
        <div className="popular">
            <h1>Rating Popular Movie</h1>
            {
                Movies.sort((a,b)=> b.vote_count - a.vote_count).map(movie=>(
                    <RatingCard
                    id={movie.id}
                    poster={`/images/${movie.poster_path}`}
                    vote={movie.vote_count}
                    popular={movie.popularity}
                    rating={movie.vote_average}
                    title={movie.title}
                    overview={movie.overview}
                    handleUpVote={handleUpVote}
                    handleLike={handleLike}
                    />
                ))
            }            
        </div>
    )
}

