import React from 'react'
import style from "./arrowButton.module.scss"
import { R } from '../../constants/resources'

export default function ArrowButton({
   title, isActive, onClick, borderRadius
}) {

   const fontColor = isActive ? "#ffffff" : "var(--arrow-button-text)";
   const backColor = isActive ? "var(--primary-color)" : "var(--arrow-button-back)"

   return (
      <div
         className={style["container"]}
         onClick={onClick}
         style={{ borderRadius: borderRadius, backgroundColor: backColor }}
      >
         <p className={style["text"]} style={{ color: fontColor }}>{title}</p>

         {isActive && <div className={style["triangle-wrapper"]}>
            <img src={R.img_triangle} className={style["triangle-img"]} />
         </div>}
      </div>
   )
}
