import { Route } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
import Home from './Home'
import Counter from './Counter'
import List from './list/List'
import Todo from './todo/Todo'
import Error404 from './Error404'

const MainLayout = () =>{
    return (
        <div className="container">
            <Header />
            <SideBar />
            <div className="maincontent">
                <Route path="/" component={Home} exact />
                <Route path="/counter" component={Counter} />
                <Route path="/list" component={List} />
                <Route path="/todo" component={Todo} />
                {/* <Route component={Error404} /> */}
            </div>
        </div>
    )
}

export default MainLayout