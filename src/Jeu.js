import React from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { storeScore } from "./redux/actions";

class Jeu extends React.Component {
    constructor({propsChild}) {
        super();
        
        this.nombreCherche = this.getRandomInt(100);
        this.state = {
            compteurEssai : 0,
            stateChild: propsChild,
            text: '',
        };
    }

	storeScore() {
		this.props.storeScore({
	      name: this.state.stateChild,
	      number: this.nombreCherche,
	      score: this.state.compteurEssai
	    });
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max + 1));
    }

    endGame = () => {
        /* if (this.state.tableauCoups.length > 5) {
            this.state.tableauCoups.shift();
        } */
        //displayTab();
    }

    
    
    

    isFound = (event) => {
        event.preventDefault();
        console.log('isFound');
        console.log(event.target[0].value);
        var arg = event.target[0].value;
        this.setState({...this.state, compteurEssai: this.state.compteurEssai ++ });
        console.log(this.state.compteurEssai);
        if (arg < this.nombreCherche) {
            console.log('+')
            this.setState({...this.state, text: 'C\'est plus.'});
        } else if (arg > this.nombreCherche) {
            console.log('-')
            this.setState({...this.state, text: 'C\'est moins.'});
        } else if (arg == this.nombreCherche) {
            console.log('=')
            this.setState({...this.state, text: 'C\'est gagné!',compteurEssai: 0});
            storeScore(this);
            this.nombreCherche = this.getRandomInt(100);
            
        } else {
            this.setState({...this.state, text: 'Erreur dans l\'entrée'});
        }
    }

    isLost = () => {
        console.log('isLost');
        this.setState({...this.state, text: 'C\'est perdu.',compteurEssai: 0});
        this.nombreCherche = this.getRandomInt(100);

    }

    /*componentDidUpdate({propsChild}) {
        this.setState({...this.state, stateChild:propsChild});
    }*/


  render() {
    const {stateChild} = this.state;
    const {text} = this.state;
    return (
      <div>
        <h1>Le chiffre à trouver</h1>
        <p>A toi de jouer { stateChild }! </p>
        <form onSubmit={ this.isFound }  className = "form-row align-items-center">
          Proposer un nombre(1-100) : <input id="numberEntry" type = "text" placeholder = "Renseigner un nombre" className = "form-control mb-2" /><br />
          <button className = "btn btn-primary">Envoyer</button>
        </form>
          <button className = "btn btn-primary" onClick={ this.isLost }>Recommencer</button>
          <p>{ text }</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		games: state.games
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		storeScore: game => {
			dispatch(storeScore(game))
		}
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Jeu));
