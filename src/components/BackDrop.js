import React, { useState, useEffect } from "react";
import styles from "./BackDrop.module.css"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Example from "./Example";


const Close = (props) => {
  const { onClose } = props;

  return (
    <IconButton
      aria-label="close"
      onClick={onClose}
      sx={{
        position: 'absolute',
        right: 0,
        top: 0,
        color: (theme) => theme.palette.grey[500],
      }}
    >
      <CloseIcon />
    </IconButton>
  );
};

const BackDrop = (props) => {

  const translation = ["есть", "возможность"]
  const engWord = ["", "eat"]

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
      translate: translation[0],
      engW: engWord[0],
      title: "Найди английский перевод",
      text: '',
      buttonText: "Дальше",
      nextState: null
    }

    const secondModal = {
      translate: translation[0],
      engW: engWord[1],
      title: "Потяни слово",
      text: "Потяни вертикальное слово вверх или вниз, чтобы освободить следующее слово",
      buttonText: "Дальше",
      nextState: null
    }

    const thirdModal = {
      translate: translation[0],
      engW: engWord[0],
      title: "Потяни слово",
      text: "Потяни горізонтальное слово вправо или влево, чтобы освободить следующее слово",
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
    }, 1);

    // function deepEqual(obj1, obj2) {
    //   return JSON.stringify(obj1) === JSON.stringify(obj2);
    // }

  }, [])

  return (
    <div className={styles.main}>
      <div>
        <Example translation={translation[0]} engWord={engWord[0]} />
      </div>
      <div className={styles.modal}>
        <div
          className={styles.cross}
        >
          <Close
            onClose={handleClose}
            open={open}
          />
        </div>
        <div
          className={styles.title}
        >
          {modalState.title}
        </div>
        <div
          className={styles.text}
        >
          {modalState.text}
        </div>
        <div
          className={styles.button}
          onClick={modalState.nextState}
        >
          {modalState.buttonText}
        </div>
      </div>

    </div>
  )
}

export default BackDrop