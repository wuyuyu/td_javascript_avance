import React, { Component } from 'react';
import './App.css';
import Accueil from './Accueil';
import Config from './Config';
import Jeu from './Jeu';
import About from './About';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
  constructor (...props) {
    super(...props);
    this.state = {
      StateParent: ''
    };
  }

  exampleClick = (e) => {
    this.setState({...this.state, StateParent:e});
  }

  render() {
      return (
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to = "/"> Accueil </Link></li>
                <li><Link to = "/Config"> Configuration </Link></li>
                <li><Link to = "/Jeu">Chiffre à trouver</Link></li>
                <li><Link to = "/About"> À propos </Link></li>
              </ul>
            </nav>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path = "/" ><Accueil propsChild={this.state.StateParent}/></Route>
              <Route path = "/Config" ><Config propsChild={this.exampleClick} /></Route>
              <Route path = "/Jeu" ><Jeu /></Route>
              <Route path = "/About" ><About /></Route>
            </Switch>
          </div>
        </Router>
      );
  }
}


export default App;