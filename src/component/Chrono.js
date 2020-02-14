import React from 'react';

import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";
import { storeScore } from "../redux/actions";
class Chrono extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            compteur: 120,
            chronoText: '',
        };
    }

    addChrono() {
        this.props.addChrono({
            compteur: this.state.compteur,
            chronoText: this.state.chronoText
        });
    }

    
    timer = setInterval=> (function() {
        if (cpt > 0) {
            --cpt; // décrémente le compteur
        } else {
            cpt = 120;
        }
        document.getElementById("chrono").innerHTML = "0" + cpt + "s";
    }, 1000);
    

    
    render() {
        const { stateChild } = this.state;
        const { text } = this.state;
        const { games } = this.props;
        return ( <div>
                    <h1> Le chiffre à trouver </h1>  
                    <p> A toi de jouer { stateChild }! </p>  
                    <form onSubmit = { this.isFound } className = "form-row align-items-center">
                        Proposer un nombre(1 - 100): <input id = "numberEntry" type = "text" placeholder = "Renseigner un nombre" className = "form-control mb-2"/> <br/>
                        <button className = "btn btn-primary"> Envoyer </button>  
                    </form>  
                    <button className = "btn btn-primary"onClick = { this.isLost }> Recommencer </button>  
                    <p> { text } </p>  
                    {games.map((game, index) => ( < p key = { index } > { game.name } { game.number } { game.score } </p>))} 
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