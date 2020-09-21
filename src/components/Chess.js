import React, { Component } from 'react';
import * as helpers from '../helpers';
import * as rules from '../../rules';
import './Chess.css';
import Won from './Won'

import Peice from './Peice'

class Chess extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [],
      currentPeice: [],
      deletedPeices: [],
      error: '',
      hasWon: false
    }
  }

  componentDidMount(){
    let board = helpers.setBoard()
    this.setState({ board });
  }

  restartGame = () => {
    this.setState({
      board: helpers.setBoard(),
      hasWon: false
    })
  }


  setCurrentPeice = (row, col) => {
    const { currentPlayer } = this.props
    const newBoard = this.state.board.slice()

    const [oldRow, oldCol]= this.state.currentPeice;


    if (!newBoard[row][col].peice.length) return
    if (oldRow !== undefined && oldCol !== undefined && oldRow === row && oldCol === col) return

    // Need to check the color of the current turn by the first letter of peiceName
    if (newBoard[row][col].peiceName[0] !== currentPlayer.color) {
      return this.setState({
        error: 'Hold on there it is not your turn!'
      })
    }

    newBoard[row][col].color = 'red';

    if (oldRow !== undefined && oldCol !== undefined) {
      newBoard[oldRow][oldCol].color = '';
    }


    // This function creates a rule for the type of peice selected
    rules.clearMatrix(newBoard)

    // All of the core logic lies withen this function
    rules.peiceRule(newBoard[row][col].peiceName, row, col, newBoard)

    this.setState({
      currentPeice: [row, col],
      board: newBoard,
      error: ''
    });

  }

  moveCurrentPeice = (row, col) => {

    const { switchPlayer, currentPlayer } = this.props
    const [selectedRow, selectedCol] = this.state.currentPeice;
    if (selectedRow === undefined) return

    const newBoard = this.state.board.slice();
    const deletedPeices = this.state.deletedPeices.slice()
    const currentPeice = newBoard[selectedRow][selectedCol];
    const toMoveArea = newBoard[row][col]

    if (toMoveArea.color === 'yellow') {

      newBoard[row][col] = currentPeice;

      newBoard[selectedRow][selectedCol] = {
        color: "",
        peice: "",
        peiceName: ""
      }

      if (toMoveArea.peiceName.length) {
        console.log(toMoveArea.peiceName)
        if (toMoveArea.peiceName[1] === 'K') {
          console.log(currentPlayer)
          return this.setState({
            hasWon: true,
            error: ''
          });

        }
        deletedPeices.push(toMoveArea)
      }

      rules.clearMatrix(newBoard, true);

      this.setState({
        board: newBoard,
        deletedPeices,
        error: ''
      })

      switchPlayer()

    }

  }


  render() {
    const { board, currentPeice, error, hasWon } = this.state;
    const { currentPlayer } = this.props;

    return(
      <div className='board-container'>
        {
          error.length ? (
          <div className='error'>
            <div style={{color: 'red'}}>
              {error}
            </div>
          </div>
          ): null
        }
        <Won
          hasWon={hasWon}
          restartGame={this.restartGame}
          currentPlayer={currentPlayer}
        />
        <div className='board'>
          {
            board.map((peicesRow, r) => (
              <div className='board-row' key={r}>
                {
                  peicesRow.map((peice, c) => {
                    let row = Math.abs(7 - r);
                    let color = peice.color

                    return (
                      <Peice
                        key={c}
                        row={r}
                        col={c}
                        peice={peice.peice}
                        color={color}
                        currentPeice={currentPeice}
                        setCurrentPeice={this.setCurrentPeice}
                        moveCurrentPeice={this.moveCurrentPeice}
                      />
                    )
                  })
                }
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Chess