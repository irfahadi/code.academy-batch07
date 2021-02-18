import React from 'react'
import { Link } from 'react-router-dom'
import * as css from '../MainStyle'

export default function header() {
    return (
        <css.NavTop>
            <ul>
                <li className="logo">
                    <a><img src="/images/code-id.webp" /></a>     
                </li>
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/about">About</Link></li>
            </ul>
        </css.NavTop>
    )
}
