import React from "react";
import Letter from "./Letter";

const Word = (props) => {
  //divide tring into array
  const top = props.top
  const left = props.left
  const color = props.color
  const bgcolor = props.bgcolor
  
  const letters = props.word.split('')
  const horizontal = props.horizontal

  return (
    <div>
      {letters.map((letter, idx) => {
        if (horizontal === true) {
          return <Letter letter={letter} top={top} left={left  + idx * 32} color={color} bgcolor={bgcolor} />
        } else {
          return <Letter letter={letter} top={top + idx * 32} left={left} color={color} bgcolor={bgcolor} />
        }
      })}
    </div>
  )
}

export default Word