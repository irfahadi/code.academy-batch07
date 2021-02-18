import React from 'react'

export default function Student(props) {

    return (
        <div className="bg-blue-200 hover:bg-blue-500 bg-opacity-75 rounded-sm grid justify-items-stretch ">
            <p>NIM      : {props.nim}</p>
            <p>Nama     : {props.nama}</p>
            <p>IPK      : {props.ipk}</p>
            <p>Kota     : {props.kota}</p>
            <p>Vote     : {props.vote}</p>
            <p>skills   : {props.onShowSkills(props.skills)}</p>
            <br />
            <button className="bg-gray-600 hover:bg-black text-white rounded-lg text-sm justify-self-auto" onClick={()=> props.onVote(props.nim)} > VOTE ME </button>
        </div>
    )
}
