import React, { useRef, useState } from 'react'
import style from "./selectionField.module.scss"
import { R } from '../../constants/resources'

export default function SelectionField({
   options
}) {

   const selectRef = useRef(null);

   const handleClick = () => {
     selectRef.current.click();
   }

   return (
      <div className={style["container"]} onClick={() => handleClick} >
         <select className={style["select-tag"]} name={options[0]} key={options[0]}>

            {
               options.map((option) => (
                  <option key={option} value={option}>{option}</option>
               ))
            }

         </select>
         <div className={style["drop-down-wrapper"]}>
            <img src={R.ic_drop_down_arrow} className={style["drop-down-img"]} />
         </div>
      </div>
   )
}
