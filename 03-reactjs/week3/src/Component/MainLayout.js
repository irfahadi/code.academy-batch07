import { Route, Switch } from 'react-router-dom'
import Header from './header'
import SideBar from './sidebar'
import Home from './container/home'
import Counter from './container/counter'
import List from './container/list'
import Rating from './container/rating'
import Error404 from './container/error404'
import Movies from './container/movies'
import * as css from './MainStyle'

const MainLayout = () =>{
    return (
        <css.Container>
            <Header />
            <SideBar />
            <css.MainContent>
                <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/counter" component={Counter} />
                <Route path="/list" component={List} />
                <Route path="/rating" component={Rating} />
                <Route path="/movies" component={Movies} />
                <Route component={Error404} />
                </Switch>
            </css.MainContent>
        </css.Container>
    )
}

export default MainLayout