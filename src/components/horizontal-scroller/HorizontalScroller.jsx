import React from 'react'
import style from "./horizontalScroller.module.scss"
import headerStyle from "./header.module.scss"
import { R } from '../../constants/resources';

export default function HorizontalScroller({
   word1, word2, word3, onBackClick, onForwardClick, backColor, leadingBar, children, scrollable, titleFontSize
}) {

   const border = leadingBar ? "none" : "10px solid var(--primary-color)";

   return (
      <div className={style["container"]} style={{ backgroundColor: backColor, borderLeft: border }} >
         <div className={style["wrapper"]}>

            <Header word1={word1} word2={word2} word3={word3} onBackClick={onBackClick} onForwardClick={onForwardClick} leadingBar={leadingBar} scrollable={scrollable} titleFontSize={titleFontSize} />

            <div className={style["vehicle-list-container"]}>
               {children}
            </div>
         </div>
      </div>
   )
}

const Header = ({
   word1, word2, word3, onBackClick, onForwardClick, leadingBar, scrollable, titleFontSize
}) => {
   return (
      <div className={headerStyle["container"]}>

         <div className={headerStyle["wrapper"]}>
            {leadingBar && <p className={headerStyle["vertical-divider"]}></p>}
            {word1 && <p className={headerStyle["heading"]} style={{ color: word1.color, fontSize: titleFontSize }} >{word1.text}</p>}
            {word2 && <p className={headerStyle["heading"]} style={{ color: word2.color, fontSize: titleFontSize }} >{word2.text}</p>}
            {word3 && <p className={headerStyle["heading"]} style={{ color: word3.color, fontSize: titleFontSize }} >{word3.text}</p>}
         </div>

         {scrollable && <div className={headerStyle["wrapper"]}>

            <p className={headerStyle["horizontal-divider"]}></p>

            <div className={headerStyle["button-container"]} onClick={() => onBackClick()}>
               <img src={R.ic_arrow_left} className={headerStyle["button"]} alt='back' />
            </div>

            <div className={headerStyle["button-container"]} onClick={() => onForwardClick()}>
               <img src={R.ic_arrow_right} className={headerStyle["button"]} alt='forward' />
            </div>
         </div>}

      </div>
   )
}