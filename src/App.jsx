import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Films from './pages/Films'
import Users from './pages/People'
// import FilmDetail from './pages/FilmDetail'
// import PeopleDetail from './pages/PeopleDetail'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/films">
                    <Films />
                </Route>
                {/* <Route exact path="/films/:filmid">
                    <FilmDetail />
                </Route> */}
                 <Route exact path="/users">
                    <Users />
                </Route> 
                
            </Switch>
        </BrowserRouter>
    );
};

export default App;