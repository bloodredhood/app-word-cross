import React from "react";
import c from "./WelcomePage.module.css"
import catProf from "../../../assets/catProf.png"
import { Navigate } from "react-router-dom";


const WelcomePage = () => {

  return (
    <div className={c.container}>
      <div className={c.group}>
        <div className={c.title}>
          Добро пожаловать!
        </div>
        <div className={c.descr}>
          Находи английскую пару для слова и повторяй слова с урока.
        </div>
        <div>
          <img src={catProf} alt="" className={c.catProf} />
        </div>
      </div>

      <div className={c.button} onClick={<Navigate to={"/onboarding"} />}>
        Начать игру
      </div>

    </div>
  )
}

export default WelcomePage