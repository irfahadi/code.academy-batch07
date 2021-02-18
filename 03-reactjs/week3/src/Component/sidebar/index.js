import {Link} from 'react-router-dom'
import {NavSide} from '../MainStyle'

const SideBar = () =>{

    const sidemenus = [
        {
            id:1,
            path:'/counter',
            name: 'Counter',            
            exact: true,
            component: null
        },
        {
            id:2,
            path:'/list',
            name: 'List',            
            exact: true,
            component: null
        },
        {
            id:3,
            path:'/rating',
            name: 'Rating',            
            exact: true,
            component: null
        },
        {
            id:4,
            path:'/movies',
            name: 'Movies',            
            exact: true,
            component: null
        }
    ]
    return (
        <NavSide >
            <ul>
                {
                    sidemenus.map(data=> 
                    <li>
                        <Link to={data.path}>#{data.id}-{data.name}</Link>
                    </li>)
                }
            </ul>
        </NavSide>
    )
}

export default SideBar