import React, { useState, useEffect} from 'react'
import style from "./filterHeader.module.scss"
import { R } from '../../../../constants/resources'

export default function FilterHeader(
   { title, isExpanded, onAction }
) {
   let icon = isExpanded ? R.ic_minus : R.ic_plus
   
   return (
      <div className={style["container"]}>
         <p className={style["text"]}>{title}</p>
         <div className={style["icon-wrapper"]}>
            <img
               src={icon}
               className={style["icon"]}
               onClick={onAction}
            />
         </div>
      </div>
   )
}