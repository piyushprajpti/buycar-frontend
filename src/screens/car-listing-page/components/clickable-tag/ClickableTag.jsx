import React, { useState } from 'react'
import style from "./clickableTag.module.scss"

export default function ClickableTag(
   {text}
) {

   const [isClicked, setIsClicked] = useState(false)
   const borderColor = isClicked ? "var(--primary-color)" : "var(--filter-horizontal-divider)";

  return (
    <div className={style["container"]} style={{borderColor: borderColor}} onClick={() => setIsClicked(!isClicked)} >
      <p className={style["text"]} >{text}</p>
    </div>
  )
}
