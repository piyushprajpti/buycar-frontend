import React from 'react'
import style from "./selectionField.module.scss"

export default function SelectionField({
   options
}) {
   return (
      <select className={style["container"]} name={options[0]} key={options[0]}>

         {
            options.map((option) => (
               <option key={option} value={option}>{option}</option>
            ))
         }

      </select>
   )
}
