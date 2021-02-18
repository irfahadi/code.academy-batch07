import React from 'react'
import './Rating.css'
import {FaStar} from '@react-icons/all-files/fa/FaStar'
import {FaHeart} from '@react-icons/all-files/fa/FaHeart'
import {FaChevronUP} from '@react-icons/all-files/fa/FaChevronUp'
import {FaThumbsUp} from '@react-icons/all-files/fa/FaThumbsUp'

export default function RatingCard(props) { 
    return (
        <div className="top-popular">
            <div className="logo">
                <img src={props.poster} alt="poster" />
            </div>
            <div className="description">
                <div className="title-rating">
                    <h2>{props.title}</h2>
                    <p>{props.overview}</p>
                </div>
                <div className="vote">
                    <span style={{color: '#fff68f', opacity: 0.5}}>
                        <FaStar size={18} />
                        <span>{props.rating}</span>
                    </span>
                    <span style={{color: '#fff68f', opacity: 0.5, cursor:"pointer"}}>
                            <FaHeart size={18} onClick={()=>props.handleLike(props.id)}/>
                        <span>{Math.round(props.popular)}</span>
                    </span>
                    <span style={{color: '#fff68f', opacity: 0.5, cursor:"pointer"}}>
                            <FaThumbsUp size={18} onClick={()=>props.handleUpVote(props.id)}/>
                        <span>{props.vote}</span>
                    </span>    
                </div>           
            </div>
        </div>
    )
}
