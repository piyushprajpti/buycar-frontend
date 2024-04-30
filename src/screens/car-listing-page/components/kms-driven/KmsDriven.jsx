import React from 'react'
import style from "./kmsDriven.module.scss"
import ClickableTag from '../clickable-tag/ClickableTag'
import FilterHeader from '../filter-header/FilterHeader'

export default function KmsDriven() {
  return (
    <>

      <div className={style["wrapper"]}>
         <ClickableTag text={"< 10K km"} />
         <ClickableTag text={"< 25K km"} />
         <ClickableTag text={"< 50K km"} />
         <ClickableTag text={"> 75K+ km"} />
      </div>
    </>
  )
}
