import React from 'react';
import style from "./header.module.scss"
import { R } from '../../constants/resources';
import { ActionButton, Button } from '../buttons/Buttons';
import { Link } from 'react-router-dom';
import buttonStyle from "../buttons/button.module.scss"

export default function Header() {
   return (
      <div className={style["container"]}>

         <Link className={style["logo-container"]} to={"/"}>
            <div className={style["logo-wrapper"]}>
               <img src={R.img_brand_logo} className={style["logo"]} alt='logo' />
            </div>
         </Link>

         <div className={style["action-button-container"]}>
            <div className={style["action-button-wrapper"]}>

               <Button
                  name={"Home"}
                  textStyle={style["button-text-style"]}
                  containerMargin={"0 20px"}
                  bottomLine
                  onClick={"/"}
               />
               <Button
                  name={"Buy Car"}
                  textStyle={style["button-text-style"]}
                  containerMargin={"0 20px"}
                  bottomLine
                  onClick={"/car-listing"}
               />
               <Button
                  name={"Contact Us"}
                  textStyle={style["button-text-style"]}
                  containerMargin={"0 20px"}
                  bottomLine
                  onClick={"/contact-us"}
               />
               <Button
                  name={"About Us"}
                  textStyle={style["button-text-style"]}
                  containerMargin={"0 20px"}
                  bottomLine
                  onClick={"/about-us"}
               />
               <Button
                  name={"More"}
                  trailingIcon={R.ic_drop_down_arrow}
                  textStyle={style["button-text-style"]}
                  containerMargin={"0 20px"}
                  bottomLine
               />
                <a
               className={buttonStyle["container"]}
               href='https://api.whatsapp.com/send?phone=+917014986896'
               target='_blank'
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
                     color: "#000000",
                     fontWeight: "300"
                  }}
                  >+91 7014986896</p>
               </div>
               <p className={buttonStyle["bottom-line"]}></p>
            </a>
               <ActionButton
                  name={"Sell Car"}
                  containerStyle={style["action-button-container-style"]}
               />
            </div>
         </div>
      </div>
   )
}
