import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Won = ({hasWon, restartGame, currentPlayer }) => {
  const classes = useStyles();


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={hasWon}
        onClose={restartGame}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={hasWon}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Congratulations {currentPlayer.name}</h2>
            <p id="transition-modal-description">You have won!</p>
            <Button onClick={restartGame}>Click here to restart</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default Won