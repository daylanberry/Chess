import React, { Component } from 'react';
import PlayerForm from './components/PlayerForm';
import PlayerTurn from './components/PlayerTurn';
import Chess from './components/Chess';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      player1: {name: '', color: ''},
      player2: {name: '', color: ''},
      currentPlayer: '',
      errors: ''
    }
  }

  handleChange = (e) => {
    const currentState = this.state[e.target.name];

    this.setState({
      currentPlayer: e.target.value
    });
  }

  colorSubmit = (name, color) => {
    const { page, player1 } = this.state;

    if (page === 1 && player1.color === color) {
      this.formError('You cant pick the same color')
      return
    };

    this.setState({
      [name]: {...this.state[name], color },
      errors: ''
    })
  }

  formError = (errors) => {
    this.setState({
      errors
    })
  }

  nameSubmit = () => {
    const { player1, player2, page, currentPlayer } = this.state;

    if (!currentPlayer.length) {
      this.formError('You must supply a name!')
      return
    }

    if (page === 0 && !player1.color.length || page === 1 && !player2.color.length) {
      this.formError('You must enter a color')
      return
    }

    let playerUpdate = page === 0 ? 'player1' : 'player2'
    let playerNameUpdateState = page === 0 ? player1: player2

    this.setState({
      [playerUpdate]: { ...playerNameUpdateState, name: currentPlayer},
      page: this.state.page + 1,
      errors: '',
      currentPlayer: ''
    })


  }

  playerForm = (page) => {

    return (
      <PlayerForm
        name={page === 0 ? 'player1' : 'player2'}
        handleChange={this.handleChange}
        nameSubmit={this.nameSubmit}
        errors={this.state.errors}
        colorSubmit={this.colorSubmit}
        currentPlayer={this.state.currentPlayer}
      />
    )
  }

  render() {
    const { page, player1, player2 } = this.state;


    return (
      <div>
        {
          page < 2 ? (
            this.playerForm(page)
          ) : (
            <PlayerTurn
              player1={player1}
              player2={player2}
              currentPlayer={player1}
            />
          )
        }
      </div>
    )
  }

};

export default App