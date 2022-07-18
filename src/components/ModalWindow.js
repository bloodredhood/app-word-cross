import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(4),
    paddingBottom: theme.spacing(0),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 6, p: 0, display: "flex"}} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [modalState, setModalState] = useState({})



  useEffect(() => {

    const firstModal = {
      title: "Найди английский перевод",
      text: '',
      buttonText: "Дальше",
      nextState: null
    }

    const secondModal = {
      title: "Потяни слово",
      text: "Потяни вертикальное слово вверх или вниз, чтобы освободить следующее слово",
      buttonText: "Дальше",
      nextState: null
    }

    const thirdModal = {
      title: "Потяни слово",
      text: "Потяни вертикальное слово вверх или вниз, чтобы освободить следующее слово",
      buttonText: "Играть",
      nextState: handleClose
    }

    //text: ["Потяни вертикальное слово", "вверх или вниз, чтобы", "освободить следующее", "слово"],

    let modalStates = [firstModal, secondModal, thirdModal]

    firstModal.nextState = () => setModalState(modalStates[1])
    secondModal.nextState = () => setModalState(modalStates[2])

    setTimeout(() => {
      setModalState(modalStates[0])
      handleClickOpen()
    }, 1000);

    let compare = deepEqual(modalState, modalStates[0])

  }, [])

  function deepEqual (obj1, obj2){
    return JSON.stringify(obj1)===JSON.stringify(obj2);
 }

  return (
    <div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{
          maxHeight: "640px",
          maxWidth: "360px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            p: 0,
            m: 5,
            mb: 0,
          }}>
          {modalState.title}
        </BootstrapDialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center"
          }}>
            <Typography>
              {modalState.text}
            </Typography>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Button
            variant="contained"
            onClick={modalState.nextState}>
            {modalState.buttonText}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
