import React from 'react'
import style from "./footer.module.scss"
import { R } from '../../constants/resources'
import { Button } from '../buttons/Buttons'

export default function Footer() {
   return (
      <div className={style["container"]}>

         <div className={style["wrapper"]}>
            <div className={style["about-section"]}>
               <img src={R.img_brand_logo} className={style["logo"]} alt='logo' />
               <p className={style["about"]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
               </p>
            </div>

            <div className={style["info-section"]}>
               <p className={style["title"]}>Get to Know us</p>

               <Button
                  name={"About Us"}
                  leadingIcon={R.ic_dot}
                  textStyle={{
                     fontSize: "1.5rem",
                     fontWeight: "300",
                     color: "#ffffff",
                     margin: "0 0 0 24.5px"
                  }}
                  margin={"7px 0"}
                  leadingIconWidth={"8px"}
                  onClick={"/about-us"}
               />
               <Button
                  name={"Legal"}
                  leadingIcon={R.ic_dot}
                  textStyle={{
                     fontSize: "1.5rem",
                     fontWeight: "300",
                     color: "#ffffff",
                     margin: "0 0 0 24.5px"
                  }}
                  margin={"7px 0"}
                  leadingIconWidth={"8px"}
               />
               <Button
                  name={"Terms & Conditions"}
                  leadingIcon={R.ic_dot}
                  textStyle={{
                     fontSize: "1.5rem",
                     fontWeight: "300",
                     color: "#ffffff",
                     margin: "0 0 0 24.5px"
                  }}
                  margin={"7px 0"}
                  leadingIconWidth={"8px"}
               />
               <Button
                  name={"Privacy Policies"}
                  leadingIcon={R.ic_dot}
                  textStyle={{
                     fontSize: "1.5rem",
                     fontWeight: "300",
                     color: "#ffffff",
                     margin: "0 0 0 24.5px"
                  }}
                  margin={"7px 0"}
                  leadingIconWidth={"8px"}
               />
            </div>

            <div className={style["help-section"]}>
               <p className={style["title"]}>Let us Help you</p>

               <Button
                  name={"Help"}
                  leadingIcon={R.ic_dot}
                  textStyle={{
                     fontSize: "1.5rem",
                     fontWeight: "300",
                     color: "#ffffff",
                     margin: "0 0 0 24.5px"
                  }}
                  margin={"7px 0"}
                  leadingIconWidth={"8px"}
               />
               <Button
                  name={"FAQ's"}
                  leadingIcon={R.ic_dot}
                  textStyle={{
                     fontSize: "1.5rem",
                     fontWeight: "300",
                     color: "#ffffff",
                     margin: "0 0 0 24.5px"
                  }}
                  margin={"7px 0"}
                  leadingIconWidth={"8px"}
               />
               <Button
                  name={"Contact Us"}
                  leadingIcon={R.ic_dot}
                  textStyle={{
                     fontSize: "1.5rem",
                     fontWeight: "300",
                     color: "#ffffff",
                     margin: "0 0 0 24.5px"
                  }}
                  margin={"7px 0"}
                  leadingIconWidth={"8px"}
                  onClick={"/contact-us"}
               />
            </div>
         </div>

         <div className={style["copyright-container"]}>
            <p>copyright@yocarz2024</p>
         </div>

      </div>
   )
} 