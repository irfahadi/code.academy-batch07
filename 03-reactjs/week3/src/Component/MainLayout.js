import { Route, Switch } from 'react-router-dom'
import Header from './header'
import SideBar from './sidebar'
import Home from './container/home'
import Counter from './container/counter'
import List from './container/list'
import Rating from './container/rating'
import Error404 from './container/error404'
import Movies from './container/movies'

const MainLayout = () =>{
    return (
        <div className="container">
            <Header />
            <SideBar />
            <div className="maincontent">
                <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/counter" component={Counter} />
                <Route path="/list" component={List} />
                <Route path="/rating" component={Rating} />
                <Route path="/movies" component={Movies} />
                <Route component={Error404} />
                </Switch>
            </div>
        </div>
    )
}

export default MainLayout