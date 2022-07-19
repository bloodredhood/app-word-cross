import React, { useState, useEffect } from "react";
import styles from "./BackDrop.module.css"
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Example from "./Example";
import hand from "../assets/hand.png"
import arrow from "../assets/arrow.png"
import { wordsClip, colors } from "./Example";
import c from "./WordsArea.module.css"


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
  const [pointers, setPointers] = useState({})

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
      text: "Потяни горизонтальное слово вправо или влево, чтобы освободить следующее слово",
      buttonText: "Играть",
      nextState: handleClose
    }

    const zeroPointers = {
      lastWordStyle: null,
      prelastWordStyle: null,
      arrowCoords: {
        position: 'absolute',
        zIndex: 101,
        top: 370,
        left: -3,
        display: "none",
      },
      handCoords: {
        position: 'absolute',
        zIndex: 101,
        top: 410,
        left: 15,
        display: "none",
      },
      nextState: null
    }
    const firstPointers = {
      lastWordStyle: {
        position: "absolute",
        zIndex: 100,
      },
      prelastWordStyle: {},
      arrowCoords: {
        position: 'absolute',
        zIndex: 101,
        top: 370,
        left: -3
      },
      handCoords: {
        position: 'absolute',
        zIndex: 101,
        top: 410,
        left: 15
      },
      nextState: null
    }

    const secondPointers = {
      lastWordStyle: {
        position: "absolute",
        zIndex: 100,
      },
      prelastWordStyle: {},
      arrowCoords: {
        position: 'absolute',
        zIndex: 101,
        top: 442,
        left: 228,
        transform: "rotate(90deg)"
      },
      handCoords: {
        position: 'absolute',
        zIndex: 101,
        top: 460,
        left: 175,
        transform: "rotate(55deg)"
      },
      nextState: null
    }

    //text: ["Потяни вертикальное слово", "вверх или вниз, чтобы", "освободить следующее", "слово"],
    let statesArr = [zeroPointers, firstPointers, secondPointers]
    let modalStates = [firstModal, secondModal, thirdModal]

    firstPointers.nextState = () => setPointers(statesArr[1])
    secondPointers.nextState = () => setPointers(statesArr[2])
    firstModal.nextState = () => setModalState(modalStates[1])
    secondModal.nextState = () => setModalState(modalStates[2])

    setTimeout(() => {
      setModalState(modalStates[0])
      setPointers(statesArr[0])
      handleClickOpen()
    }, 1);

    // function deepEqual(obj1, obj2) {
    //   return JSON.stringify(obj1) === JSON.stringify(obj2);
    // }

  }, [])

  return (
    <div>
      <div style={pointers.handCoords}>
        <img src={hand} alt="" />
      </div>

      <div style={pointers.arrowCoords}>
        <img src={arrow} alt="" />
      </div>

      <div style={{
        position: "absolute",
        zIndex: 96,
      }}>
        {wordsClip[6].map((el, idx) => {
          return <div className={c.letter} style={{
            top: `${320}px`,
            left: `${idx * 32}px`,
            backgroundColor: colors[6][0],
            color: colors[6][1]
          }}>{el}</div>
        })}
      </div>

      <div style={{
        position: "absolute",
        zIndex: 100,
      }}>
        {wordsClip[7].map((el, idx) => {
          return <div className={c.letter} style={{
            top: `${idx * 32 + 288}px`,
            left: `${0}px`,
            backgroundColor: colors[7][0],
            color: colors[7][1]
          }}>{el}</div>
        })}
      </div>



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
    </div>

  )
}

export default BackDrop