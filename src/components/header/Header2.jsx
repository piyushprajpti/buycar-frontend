import React from 'react'
import style from "./header2.module.scss"
import { R } from '../../constants/resources'
import { ActionButton, Button } from '../buttons/Buttons'

export default function Header2() {
   return (
      <div className={style["container"]}>
         <div className={style["logo-wrapper"]}>
            <img src={R.img_brand_logo} className={style["logo-img"]} />
         </div>

         <div className={style["button-wrapper"]}>
            <Button 
            name={"Home"} 
            fontSize={"1.125rem"} 
            fontColor={"#ffffff"} 
            fontWeight={"500"} 
            containerMargin={"0 20px"} 
            bottomLine 
            
            />
            <Button name={"Buy Car"} fontSize={"1.125rem"} fontColor={"#ffffff"} fontWeight={"500"} containerMargin={"0 20px"} bottomLine />
            <Button name={"Contact Us"} fontSize={"1.125rem"} fontColor={"#ffffff"} fontWeight={"500"} containerMargin={"0 20px"} bottomLine />
            <Button name={"About Us"} fontSize={"1.125rem"} fontColor={"#ffffff"} fontWeight={"500"} containerMargin={"0 20px"} bottomLine />
            <Button name={"More"} trailingIcon={R.ic_drop_down_arrow} fontSize={"1.125rem"} containerMargin={"0 20px"} fontColor={"#ffffff"} fontWeight={"500"} />
            <Button name={"+91 1234567890"} leadingIcon={R.ic_whatsapp} fontSize={"1.125rem"} containerMargin={"0 20px"} fontColor={"#ffffff"} fontWeight={"500"} />

            <ActionButton 
            name={"Sell Car"} 
            containerStyle={{
               padding:"11px 34.5px",
               margin: "0 20px",
               backgroundColor: "#ffffff",
               color: "#000000"
            }}
            />
         </div>
      </div>
   )
}
