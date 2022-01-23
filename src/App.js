import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MovieDetail from './components/Movie/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';

import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/movie/:movieId" component={MovieDetail} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
