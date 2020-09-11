import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
import Artist from './views/Artist';



function App() {
  return (
    <div>      
      <Router>

        <Header/>

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
            <Route path="/artist/:artist_uuid">
              <Artist/>
            </Route>
          </Switch>
        </div>
        
        
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
