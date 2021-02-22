
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Closumer from './components/pages/Closumer';
import Explore from './components/pages/Explore';
import Support from './components/pages/Support';
import SignUp from './components/pages/SignUp';

function App() {
    return(
        <>
        <Router> 
        <Navbar/>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/services' exact component={Services} />
                <Route path='/products' exact component={Products} />
                <Route path='/closumer' exact component={Closumer} />
                <Route path='/explore' exact component={Explore} />
                <Route path='/support' exact component={Support} />
                <Route path='/sign-up' exact component={SignUp} />
            </Switch>
        </Router>
        </>
    );
}
export default App;



