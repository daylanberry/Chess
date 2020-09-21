import React, { Component } from 'react';
import Chess from './Chess'
import './PlayerTurn.css'

class PlayerTurn extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: {},
      players: [],
    }
  }

  componentDidMount() {
    const { player1, player2 } = this.props

    this.setState({
      currentPlayer: player1,
      players: [player1, player2]
    })
  }

  switchPlayer = () => {
    const { currentPlayer, players } = this.state;

    const switchedPlayer = players.filter(player => (
      player.name !== currentPlayer.name)
    )[0]

    this.setState({
      currentPlayer: switchedPlayer
    })
  }

  render(){
    const { currentPlayer } = this.state;

    if (!currentPlayer) {
      return <div>Loading...</div>
    }

    const color = currentPlayer.color === 'B' ? 'Black' : 'White'

    return (
      <div>
        <div className='player-turn'>
            <h2>
              {currentPlayer.name}'s turn ({color})</h2>
        </div>
        <Chess
          currentPlayer={currentPlayer}
          switchPlayer={this.switchPlayer}
        />
      </div>
    )
  }
}

export default PlayerTurn