import React from "react";

const Letter = (props) => {

  return (
    <div style={{
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      top: props.top,
      left: props.left,
      height: "32px",
      width: "32px",
      backgroundColor: props.bgcolor,
      color: props.color,
      borderRadius: "50%",
      fontWeight: 600,
      fontSize: "18px",
      fontFamily: "Inter",

    }}>
      {props.letter}
    </div>
  )
}

export default Letter