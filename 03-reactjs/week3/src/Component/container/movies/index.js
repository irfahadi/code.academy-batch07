import React from 'react'
import Movie from '../../card/movie'
import {movieData} from './MovieData'
import './MovieList.css'

export default function Movies() {
    return (
        <div className="movies">
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
        </div>
    )
}
