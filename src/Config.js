import React from 'react';

export default class Config extends React.Component {
  onSubmit = (event) => {
    event.preventDefault();
    this.props.propsChild(event.target[0].value);
  }
  
  render() {
    return ( 
      <div>
        <h1 align = "center"> Configuration </h1> 
        <form onSubmit={ this.onSubmit }  className = "form-row align-items-center">
          Nom : <input type = "text" placeholder = "Renseigner un nom" className = "form-control mb-2" /><br />
          <button className = "btn btn-primary" >Envoyer </button>
        </form>
      </div>
    );
  }
}