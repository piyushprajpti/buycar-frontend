import React from 'react'
import buttonStyle from "./button.module.scss"
import actionButtonStyle from "./actionButton.module.scss"
import { Link } from 'react-router-dom'

export function Button({
   name, onClick, leadingIcon, trailingIcon, bottomLine, containerMargin, leadingIconWidth, trailingIconWidth, textStyle
}) {
   return (
      <Link
         className={buttonStyle["container"]}
         to={onClick}
         style={{
            margin: containerMargin
         }}
      >
         <div className={buttonStyle["wrapper"]}>
            {leadingIcon && <img src={leadingIcon} className={buttonStyle["icon"]} style={{ width: leadingIconWidth }} alt='logo' />}
            <p
               className={buttonStyle["text"]}
               style={textStyle}
            >
               {name}
            </p>
            {trailingIcon && <img src={trailingIcon} className={buttonStyle["icon"]} style={{ width: trailingIconWidth }} alt='logo' />}
         </div>
         {bottomLine && <p className={buttonStyle["bottom-line"]}></p>}
      </Link>
   )
}

export function ActionButton({
   name, leadingIcon, trailingIcon, onClick, leadingIconWidth, textMargin, containerStyle
}) {
   return (
      <Link
         to={onClick}
         className={actionButtonStyle["container"]}
         style={containerStyle}
      >
         {leadingIcon && <img src={leadingIcon} alt='icon' style={{ width: leadingIconWidth }} />}

         <p className={actionButtonStyle["text"]} style={{ margin: textMargin }}>{name}</p>

         {trailingIcon && <img src={trailingIcon} alt='icon' />}
      </Link>
   )
}
