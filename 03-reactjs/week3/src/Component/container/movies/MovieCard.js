import React from 'react'
import {FaStar} from '@react-icons/all-files/fa/FaStar'
import {FaPlay} from '@react-icons/all-files/fa/FaPlay'
import {Link} from 'react-router-dom'
import './Movie.css'

export default function Movie(props) {
    return (
        <div>
            <div className="card" style={{backgroundImage:`url(images/${props.poster})`}}>
             <Link to="/movies">
                 <>
                 <div>
                     <span className="quality">{props.rating===0?'Trailer':(props.hd===false?'CAM':'HD')}</span>
                 </div>
                 <div className="ratingstar">
                     <span style={{width:18, height:18, color:'#ffd700'}}>
                         <FaStar />
                     </span>
                     <span className="rating">{props.rating}</span>
                 </div>
                 </>
                 <div className="title">
                     <span style={{color:'#fff8f', opacity: 0.5}}>
                         <FaPlay size={64} />
                     </span>
                     {props.title} ({props.date.substr(0,4)})
                 </div>
             </Link>  
        </div>
        </div>
    )
}
