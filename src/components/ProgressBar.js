import React from "react";

const ProgressBar = (props) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      margin: "20px",
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
        justifyContent: "center"
      }}>
        0/{props.words.length}
      </div>
    </div>
  ) 
}

export default ProgressBar