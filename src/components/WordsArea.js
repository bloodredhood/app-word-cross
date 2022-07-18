import React from "react";
import c from "./WordsArea.module.css"

const WordsArea = (props) => {
  //console.log(props)

  const dataObj = []
  props.words.forEach((item, idx) => {
    dataObj.push({
      letters: item.word.toUpperCase().split(''),
      translationRus: item.translationRus,
      horizontal: idx % 2 === 0 ? true : false,
      startCoordX: 0,
      startCoordY: 0
    })
  })

  let resultArr = []
  dataObj.forEach(el => {
    resultArr.push(null)
  })


  const vertical = []
  const horizontal = []
  dataObj.forEach(item => {
    if (item.horizontal === true) {
      horizontal.push(item)
    } else if (item.horizontal === false) {
      vertical.push(item)
    }
  })

  horizontal.sort((a, b) => a.letters.length - b.letters.length)
  vertical.sort((a, b) => a.letters.length - b.letters.length).reverse()
  // console.log(horizontal)
  // console.log(vertical)

  // const result = resultArr.map((item, idx) => {
  //   if (idx % 2 === 0) {
  //     return item = horizontal[idx - idx/2]
  //     //console.log(item)
  //   } else if (idx % 2 !== 0 && idx === 1) {
  //     return item = vertical[0]
  //     //console.log(item)
  //   } else {
  //      return item = vertical[Math.abs(Math.ceil(idx/2 - idx + 1))]
  //     //console.log(item)
  //   }
  // })


  //горизонталь от меньшего к большему
  //вертикаль от большего к меньшему

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


  return (
    <div className={c.wrapper}>
      {dataObj.map((item, index) => {
        if (item.horizontal === true) {
          return <div key={index} className={c.word} style={{
            top: `${index * 32 + 20}px`,
            left: `${index*16 + 20}px`
          }}>{
              item.letters.map((letter, idx) => {

                  return <div className={c.letter} style={{
                    top: `${32}px`,
                    left: `${idx * 32}px`,
                    backgroundColor: colors[index][0],
                    color: colors[index][1]
                  }}>{letter}</div>
                
              }
              )}</div>
        } else {
          return <div key={index} className={c.word} style={{
            top: `${(index-1)/2 * 32 + 20}px`,
            left: `${(index) * 48 - 28}px`
          }}>{
              item.letters.map((letter, idx) => {
                
                  return <div className={c.letter} style={{
                    top: `${idx * 32}px`,
                    left: `${0}px`,
                    backgroundColor: colors[index][0],
                    color: colors[index][1]
                  }}>{letter}</div>
                }
              )}</div>
        }
      })}
    </div>
  )
}

export default WordsArea