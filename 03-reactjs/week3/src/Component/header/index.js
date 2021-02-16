import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
    return (
        <div className="navtop">
            <ul>
                <li className="logo">
                    <a><img src="/images/code-id.webp" /></a>     
                </li>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/about">About</Link></li>
            </ul>
        </div>
    )
}
