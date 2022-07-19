import React from "react";
import Word from "../../Word";
import c from "./Onboarding.module.css"
import arrow from "../../../assets/arrow.png"
import hand from "../../../assets/hand.png"

const Onboarding = () => {


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

  const arr1 = ["BALANCE", "EAT"]
  const arr2 = ["AAAA", "BALANCE"]

  const stateOne = {
    words: {
      w: ["BALANCE", "EAT"],
      coords: [[10, 10],[10, 10]], //top ,left
      horizontal: [true, false]
    },
    arrows: {
      coords: [[10, 10],[10, 10]], //top ,left
      transform: ["rotate(0deg)","rotate(90deg)"]
    },
  }

  return (
    <div>
      <div className={c.skip}>
        Пропустить
      </div>
      <div className={c.group}>
        <div className={c.title}>
          Правила игры
        </div>
        <div className={c.translation}>
          Есть
        </div>
        <div classname={c.playSpace}>
          <div style={{
            position: "absolute",
            top: stateOne.arrows.coords[0][0],
            left: stateOne.arrows.coords[0][1],
            transform: stateOne.arrows.transform[0]
            }}>
            <img src={arrow} alt="" />
          </div>
          <div style={{
            position: "absolute",
            top: stateOne.arrows.coords[1][0],
            left: stateOne.arrows.coords[1][1],
            transform: stateOne.arrows.transform[1]
            }}>
            <img src={arrow} alt="" />
          </div>
          <Word top={stateOne.words.coords[0][0]} left={stateOne.words.coords[0][1]} horizontal={stateOne.words.horizontal[0]} word={stateOne.words.w[0]} color={"#949494"} bgcolor={"#C4C4C4"} />
          <Word top={stateOne.words.coords[1][0]} left={stateOne.words.coords[1][1]} horizontal={stateOne.words.horizontal[1]} word={stateOne.words.w[1]} color={colors[5][1]} bgcolor={colors[5][0]} />
        </div>
      </div>


    </div>
  )
}

export default Onboarding