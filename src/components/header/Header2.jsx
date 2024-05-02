import React from 'react'
import style from "./header2.module.scss"
import { R } from '../../constants/resources'
import { ActionButton, Button } from '../buttons/Buttons'
import { Link } from 'react-router-dom'
import buttonStyle from "../buttons/button.module.scss"

export default function Header2() {
   return (
      <div className={style["container"]}>
         <Link className={style["logo-wrapper"]} to={"/"}>
            <img src={R.img_brand_logo} className={style["logo-img"]} />
         </Link>

         <div className={style["button-wrapper"]}>

            <Button
               name={"Home"}
               textStyle={{
                  fontSize: "1.125rem",
                  color: "#ffffff",
                  fontWeight: "300"
               }}
               containerMargin={"0 20px"}
               bottomLine
               onClick={"/"}
            />
            <Button
               name={"Buy Car"}
               textStyle={{
                  fontSize: "1.125rem",
                  color: "#ffffff",
                  fontWeight: "300"
               }}
               containerMargin={"0 20px"}
               bottomLine
               onClick={"/car-listing"}
            />
            <Button
               name={"Contact Us"}
               textStyle={{
                  fontSize: "1.125rem",
                  color: "#ffffff",
                  fontWeight: "300"
               }}
               containerMargin={"0 20px"}
               bottomLine
               onClick={"/contact-us"}
            />
            <Button
               name={"About Us"}
               textStyle={{
                  fontSize: "1.125rem",
                  color: "#ffffff",
                  fontWeight: "300"
               }}
               containerMargin={"0 20px"}
               bottomLine
               onClick={"/about-us"}
            />
            <Button
               name={"More"}
               trailingIcon={R.ic_drop_down_arrow}
               textStyle={{
                  fontSize: "1.125rem",
                  color: "#ffffff",
                  fontWeight: "300"
               }}
               containerMargin={"0 20px"}
               bottomLine
            />

            <a
               className={buttonStyle["container"]}
               href='https://api.whatsapp.com/send?phone=+91234567890'
               style={{
                  margin: "0 20px"
               }}
            >
               <div className={buttonStyle["wrapper"]}>
                  <img src={R.ic_whatsapp} className={buttonStyle["icon"]} alt='logo' />
                  <p 
                  className={buttonStyle["text"]}
                  style={{
                     fontSize: "1.125rem",
                     color: "#ffffff",
                     fontWeight: "300"
                  }}
                  >+91 7014986896</p>
               </div>
               <p className={buttonStyle["bottom-line"]}></p>
            </a>

            <ActionButton
               name={"Sell Car"}
               containerStyle={{
                  padding: "11px 34.5px",
                  margin: "0 20px",
                  backgroundColor: "#ffffff",
                  color: "#000000"
               }}
            />
         </div>
      </div>
   )
}
