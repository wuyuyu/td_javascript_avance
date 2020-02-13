import React, {Component} from 'react';

export default class Jeu extends Component {
  render() {
    return (
      <div>
        <h1>Le chiffre à trouver</h1>
        <form onSubmit={ this.onSubmit }  className = "form-row align-items-center">
          Proposer un nombre(1-100) : <input type = "text" placeholder = "Renseigner un nombre" className = "form-control mb-2" /><br />
          <button className = "btn btn-primary" >Envoyer </button>
        </form>
      </div>
    );
  }
}
