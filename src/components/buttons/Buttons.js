import React from 'react'
import buttonStyle from "./button.module.scss"
import actionButtonStyle from "./actionButton.module.scss"

export function Button({
   name, onClick, leadingIcon, trailingIcon, fontSize, fontWeight, fontColor, bottomLine, containerMargin, leadingIconWidth, trailingIconWidth, textMargin
}) {
   return (
      <div
         className={buttonStyle["container"]}
         onClick={() => onClick()}
         style={{
            margin: containerMargin
         }}
      >
         <div className={buttonStyle["wrapper"]}>
            {leadingIcon && <img src={leadingIcon} className={buttonStyle["icon"]} style={{ width: leadingIconWidth }} alt='logo' />}
            <p
               className={buttonStyle["text"]}
               style={{
                  fontSize: fontSize,
                  color: fontColor,
                  fontWeight: fontWeight,
                  margin: textMargin
               }}
            >
               {name}
            </p>
            {trailingIcon && <img src={trailingIcon} className={buttonStyle["icon"]} style={{ width: trailingIconWidth }} alt='logo' />}
         </div>
         {bottomLine && <p className={buttonStyle["bottom-line"]}></p>}
      </div>
   )
}

export function ActionButton({
   name, paddingValues, width, height, margin, fontSize, fontWeight, leadingIcon, trailingIcon, onClick, leadingIconWidth, textMargin
}) {
   return (
      <div
         className={actionButtonStyle["container"]}
         onClick={() => onClick()}
         style={{
            padding: paddingValues,
            width: width,
            height: height,
            margin: margin,
            fontSize: fontSize,
            fontWeight: fontWeight
         }}
      >
         {leadingIcon && <img src={leadingIcon} alt='icon' style={{width: leadingIconWidth}} />}
         <p className={actionButtonStyle["text"]} style={{margin: textMargin}}>{name}</p>
         {trailingIcon && <img src={trailingIcon} alt='icon' />}
      </div>
   )
}
