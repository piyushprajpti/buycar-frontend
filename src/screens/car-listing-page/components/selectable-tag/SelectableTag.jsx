import React from 'react'
import style from "./selectableTag.module.scss"
import { R } from '../../../../constants/resources'

export default function SelectableTag(
   { placeholder, count, dropDownArrow, checkbox }
) {

   let border = dropDownArrow ? "1px solid var(--filter-horizontal-divider)" : "none"
   let padding = dropDownArrow ? "15px 16px 15px 13px" : "0"

   return (
      <div className={style["container"]} style={{ border: border, padding: padding }}>

         {checkbox && <input type='checkbox' className={style["checkbox"]} />}

         <p className={style["placeholder"]}>{placeholder}</p>

         <p className={style["model-count"]}>{"(" + count + ")"}</p>

         {dropDownArrow && <img src={R.ic_drop_down_arrow} className={style["drop-down-arrow"]} />}

      </div>
   )
}
