import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers'
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
import { storeScore } from './redux/actions';

const store = createStore(reducer);

class App extends Component {
  constructor (...props) {
    super(...props);
    
    this.state = {
      StateParent: ''
    };

    /*this.routes = [
      {
        path: '/',
        text: 'Accueil',
        component: Home
      },
      {
        path: '/students',
        text: 'Etudiants',
        component: Students,
        routes: [
          {
            path: 'student?add',
            text: 'Ajouter',
            component: Student
          },
          {
            path: 'student?edit',
            text: 'Ajouter',
            component: Student
          }
        ]
      }
    ];*/
  }

  exampleClick = (e) => {
    this.setState({...this.state, StateParent:e});
  }

  render() {
      return (
        <Provider store={store}>
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
              <Route path = "/Jeu" ><Jeu propsChild={this.state.StateParent} /></Route>
              <Route path = "/About" ><About /></Route>
            </Switch>
          </div>
        </Router>
        </Provider>
      );
  }
}


export default App;