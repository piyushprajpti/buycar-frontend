import React from 'react'
import style from "./heroSection.module.scss"

export default function HeroSection() {
   return (
      <div className={style["container"]}>
         <p className={style["text"]}>
            Find Your <span className={style["highlighted-text"]}> Dream Car </span> Today: Explore <br /> Our Wide Selection of <span className={style["highlighted-text"]}> Vehicles </span>
         </p>
      </div>
   )
}
