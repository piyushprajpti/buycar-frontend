import React from 'react'
import style from "./quickPrice.module.scss"
import ClickableTag from '../clickable-tag/ClickableTag'
import FilterHeader from '../filter-header/FilterHeader'

export default function QuickPrice() {
   return (
      <>

         <div className={style["tag-wrapper"]}>
            <ClickableTag text={"Under 3 lakh"} />
            <ClickableTag text={"From 3 lakh - 5 lakh"} />
            <ClickableTag text={"From 5 lakh - 7 lakh"} />
            <ClickableTag text={"From 7 lakh - 10 lakh"} />
            <ClickableTag text={"Above 10 lakh"} />
         </div>
      </>
   )
}
