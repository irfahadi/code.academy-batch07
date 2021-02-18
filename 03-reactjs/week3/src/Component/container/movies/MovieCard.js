import React from 'react'
import {FaStar} from '@react-icons/all-files/fa/FaStar'
import {FaPlay} from '@react-icons/all-files/fa/FaPlay'
import {Link} from 'react-router-dom'
import * as css from './MovieStyle'

export default function Movie(props) {
    return (
        <div>
            <css.Card poster={props.poster}>
             <Link to="/movies">
                 <>
                    <css.Quality>
                    {props.rating===0?'Trailer':(props.hd===false?'CAM':'HD')}
                    </css.Quality>
                    <css.RatingStar>
                    <span style={{width:18, height:18, color:'#ffd700'}}>
                         <FaStar />
                     </span>
                     <css.Rating>
                     {props.rating}
                     </css.Rating>
                    </css.RatingStar>
                 </>
                 <css.Title>
                     <span style={{color:'#fff8f', opacity: 0.5}}>
                         <FaPlay size={64} style={{display:'block',margin:'auto'}}/>
                     </span>
                     {props.title} ({props.date.substr(0,4)})
                 </css.Title>
             </Link>  
            </css.Card>
        </div>
    )
}
