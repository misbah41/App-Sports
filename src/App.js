

import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LeagueDetail from './components/LeagueDetail/LeagueDetail';
import NotFound from './components/NotFound/NotFound';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <>
      <div>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Banner />
              <Home />
            </Route>
            <Route path='/home'>
              <Banner />
              <Home />
            </Route>
            <Route path='/leagueDetail/:leagueId'>
              <LeagueDetail />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
