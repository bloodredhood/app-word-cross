import React, { useState } from "react";
import c from "./WordsArea.module.css"

const ProgressEx = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      marginTop: "20px",
      marginBottom: "5px"
    }}>
      <div style={{
        display: "flex",
        alignItems: "center"
      }}>
        <div style={{
          height: "9px",
          width: "252px",
          borderRadius: "6px",
          backgroundColor: "#E5E5E5",
          justifyContent: "left"
        }}>
          <div style={{
            width: "9px",
            height: "9px",
            backgroundColor: "#4F6EFD",
            borderRadius: "6px",

          }}></div>
        </div>
      </div>
      <div style={{
        display: "flex",
        color: "#4F6EFD",
        fontSize: "20px",
        fontWeight: "600px",
        alignItems: "center",
        justifyContent: "center",
      }}>
        0/8
      </div>
    </div>
  )
}
const Example = (props) => {

  const [pointers, setPointers] = useState()

  const zeroPointers = {
    lastWordStyle: {},
    prelastWordStyle: {},
    arrowCoords: {},
    handCoords: {}
  }
  const firstPointers = {
    lastWordStyle: {
      position: "absolute",
      zIndex: 100,
    },
    prelastWordStyle: {},
    arrowCoords: {

    },
    handCoords: {

    }
  }

  const secondPointers = {
    
  }

  const colors = [
    ["#DD57D8", "#83137E"],
    ["#F19C8D", "#BA4848"],
    ["#F5D55E", "#A88104"],
    ["#CAFA50", "#338D4D"],
    ["#73CD9A", "#2A745F"],
    ["#1BB0C1", "#105E63"],
    ["#8169FA", "#231372"],
    ["#A75CDF", "#3E3470"]
  ]

  let words = [
    "eat",
    "ability",
    "flash",
    "landsap",
    "butts",
    "pandema",
    "kindness",
    "butterly"
  ]

  //let wordsRev = words.map(el => el.toUpperCase()).reverse()

  let wordsClip = words.map(el => el.toUpperCase()).reverse().map(el => el.split(''))
  console.log(wordsClip)

  // const vertWord = (arr, i, top, left) => {
  //   arr[i].map((el, idx) => {
  //     return <div className={c.letter} style={{
  //       top: `${idx * 32 + top}px`,
  //       left: `${left}px`,
  //       backgroundColor: colors[i][0],
  //       color: colors[i][1]
  //     }}>{el}</div>
  //   })
  // }
  // const horizWord = (arr, i, top, left) => {
  //   arr[i].map((el, idx) => {
  //     return <div className={c.letter} style={{
  //       top: `${top}px`,
  //       left: `${idx * 32 + left}px`,
  //       backgroundColor: colors[i][0],
  //       color: colors[i][1]
  //     }}>{el}</div>
  //   })
  // }

  return (
    <div style={{
      position: "relative"
    }}>
      
      <div style={{
        position: "absolute",
        backgroundColor: "black",
        opacity: 0.4,
        height: "640px",
        width: "360px",
        zIndex: 96,
        left: -20,
        top: -20
      }}></div>

      <div>
        <ProgressEx />

        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100px"
        }}>
          <div style={{
            display: "flex",
            width: "320px",
            height: "66px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            backgroundColor: "white",
            fontSize: "20px",
            flexDirection: "column"
          }}>
            <div>{props.translation}</div>
            <div style={{
              fontSize: "16px",
            }}>{props.engWord}</div>
          </div>
        </div>

        <div className={c.wrapper}>
          <div>
            {wordsClip[0].map((el, idx) => {
              return <div className={c.letter} style={{
                top: `${64}px`,
                left: `${idx * 32}px`,
                backgroundColor: colors[0][0],
                color: colors[0][1]
              }}>{el}</div>
            })}
          </div>
          <div>
            {wordsClip[1].map((el, idx) => {
              return <div className={c.letter} style={{
                top: `${idx * 32 + 32}px`,
                left: `${160}px`,
                backgroundColor: colors[1][0],
                color: colors[1][1]
              }}>{el}</div>
            })}
          </div>
          <div>
            {wordsClip[2].map((el, idx) => {
              return <div className={c.letter} style={{
                top: `${128}px`,
                left: `${idx * 32 + 96}px`,
                backgroundColor: colors[2][0],
                color: colors[2][1]
              }}>{el}</div>
            })}
          </div>
          <div>
            {wordsClip[3].map((el, idx) => {
              return <div className={c.letter} style={{
                top: `${idx * 32 + 96}px`,
                left: `${256}px`,
                backgroundColor: colors[3][0],
                color: colors[3][1]
              }}>{el}</div>
            })}
          </div>
          <div>
            {wordsClip[4].map((el, idx) => {
              return <div className={c.letter} style={{
                top: `${224}px`,
                left: `${idx * 32 + 64}px`,
                backgroundColor: colors[4][0],
                color: colors[4][1]
              }}>{el}</div>
            })}
          </div>
          <div>
            {wordsClip[5].map((el, idx) => {
              return <div className={c.letter} style={{
                top: `${idx * 32 + 192}px`,
                left: `${96}px`,
                backgroundColor: colors[5][0],
                color: colors[5][1]
              }}>{el}</div>
            })}
          </div>

          <div style={{
            position: "absolute",
            zIndex: 100,
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
        </div>
      </div>



    </div>
  )
}

export default Example