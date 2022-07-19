import React, { useEffect, useState } from "react";

const TranslateArea = (props) => {

  //{props.words.wordsForApp.map((item, idx)=> <div key={idx}>{item.translationRus}</div>)}
  // useEffect(()=> {
  //   setState(stateCopy)
  // })

  console.log(props)
  return (
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
        <div>{props.words[props.words.length - 1].translationRus}</div>
        <div style={{
          fontSize: "16px",
        }}>{props.words[props.words.length - 1].word}</div>
      </div>
    </div>

  )
}

export default TranslateArea