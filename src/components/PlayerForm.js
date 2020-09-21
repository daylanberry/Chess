import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';


const PlayerForm = ({ name, handleChange, nameSubmit, errors, colorSubmit, currentPlayer }) => {

  return (
    <div >
      <div>
        <h3>Enter name for {name}</h3>
        <TextField
          type='text'
          name={name}
          value={currentPlayer}
          onChange={handleChange}
        />
      </div>
      <div style={{paddingTop: '10px', paddingBottom: '20px'}}>
        <h2>
          Pick a color
        </h2>
        <Button
          style={{backgroundColor: 'black', color: 'white'}}
          variant='contained'
          onClick={() => colorSubmit(name, 'B')}
        >
          Black
        </Button>
        <Button
          variant='contained'
          style={{ backgroundColor: 'white', color: 'black'}}
          onClick={() => colorSubmit(name, 'W')}
        >
          White
        </Button>
      </div>
      <Button onClick={nameSubmit} variant='contained'>Submit!</Button>
      <div style={{color: 'red'}}>
        {errors.length ? errors : null}
      </div>
    </div>
  )
}

export default PlayerForm;