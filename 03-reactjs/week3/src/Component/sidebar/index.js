import {Link} from 'react-router-dom'

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
            path:'/todo',
            name: 'Todo',            
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
        <div className="navside">
            <ul>
                {
                    sidemenus.map(data=> 
                    <li>
                        <Link to={data.path}>#{data.id}-{data.name}</Link>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default SideBar