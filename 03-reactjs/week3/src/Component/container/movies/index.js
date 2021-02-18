import React from 'react'
import Movie from './MovieCard'
import {movieData} from '../../MovieData'
import {MoviesList} from './MovieStyle'

export default function Movies() {
    return (
        <MoviesList>
            {
                movieData.map(el=>
                <Movie
                title={el.title}
                poster={el.poster_path}
                date={el.release_date}
                rating={el.vote_average}
                hd={el.video}
                />
                )
            }            
        </MoviesList>
    )
}
