
import React from 'react';

export default class Accueil extends React.Component {
  constructor({propsChild}) {
    super();

    this.state = {
      stateChild: propsChild
    };
  }

  componentDidUpdate({propsChild}) {
    this.setState({...this.state, stateChild:propsChild});
  }
  
  render() {
    const {stateChild} = this.state;
    return (
      <div> 
        <h1>Accueil</h1>
        <h2>Hello {stateChild}!</h2>
      </div> 
    );
  }
}