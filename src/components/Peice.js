import React from 'react';
import './Peice.css'

const Peice = ({row, col, peice, setCurrentPeice, moveCurrentPeice, currentPeice, color }) => {

  return (
    <div
      style = {
        {
          backgroundColor: color === 'yellow' ? 'yellow' : (row + col) % 2 === 0 ? '#03a9fc' : 'white'
        }
      }
      className={`border-peice ${color}`}
      onClick={() => {
        const [currentRow, currentCol] = currentPeice

        if (currentRow === undefined || currentCol === undefined) {
          setCurrentPeice(row, col)
        } else {
          setCurrentPeice(row, col)
          moveCurrentPeice(row, col)
        }

      }}
    >
      <div className='peice' >
        {peice}
      </div>
    </div>
  )
}

export default Peice;