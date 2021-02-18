import React from 'react'

export default function Student(props) {
    
    return (
        <div>
            <p>NIM  : {props.nim}</p>
            <p>Nama : {props.nama}</p>
            <p>IPK  : {props.ipk}</p>
            <p>Kota : {props.kota}</p>
            <p>Vote : {props.vote}</p>
            <button onClick={()=> props.onVote(props.nim)} >VOTE ME </button>
        </div>
    )
}
