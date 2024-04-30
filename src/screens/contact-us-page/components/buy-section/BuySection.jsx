import React from 'react'
import style from "./buySection.module.scss"
import { R } from '../../../../constants/resources'
import SelectionField from "../../../../components/selection-field/SelectionField"
import InputField from "../../../../components/input-field/InputField"
import { ActionButton } from '../../../../components/buttons/Buttons'

export default function BuySection() {
   return (
      <div className={style["container"]}>

         <div className={style["query-container"]}>
            <p className={style["container-header"]}>Have a Query? Ask Our Team</p>

            <SelectionField options={["Select type of Query", "1", "2", "3"]} />

            <textarea placeholder='Describe your Query' className={style["query-area"]} />

            <InputField placeholder={"Enter Name"} />
            <InputField placeholder={"Enter Mobile Number"} />
            <InputField placeholder={"Enter Email"} />

            <ActionButton
               name={"Submit"}
               containerStyle={{ margin: "40px 0" }}
               textMargin={"17px 61.5px"}
            />

         </div>

         <p className={style["vertical-divider"]}></p>

         <div className={style["address-container"]}>
            <div className={style["address-wrapper"]}>

               <p className={style["container-header"]}>Address</p>

               <div className={style["address-header-wrapper"]}>
                  <p className={style["leading-bar"]}></p>
                  <p className={style["address-type"]}>Corporate Office Address</p>
               </div>

               <p className={style["address-detail"]}>A-10 Shop No.12 Sec No.4 Shanti Nagar Mira Road, Mumbai, Maharashtra, 401107, India</p>

               <div className={style["map-view-wrapper"]}>
                  <img src={R.ic_location_pin} className={style["location-pin"]} />
                  <p className={style["map-view-text"]}>Map View</p>
               </div>

               <div className={style["address-header-wrapper"]}>
                  <p className={style["leading-bar"]}></p>
                  <p className={style["address-type"]}>Corporate Office Address</p>
               </div>

               <p className={style["address-detail"]}>A-10 Shop No.12 Sec No.4 Shanti Nagar Mira Road, Mumbai, Maharashtra, 401107, India</p>

               <div className={style["map-view-wrapper"]}>
                  <img src={R.ic_location_pin} className={style["location-pin"]} />
                  <p className={style["map-view-text"]}>Map View</p>
               </div>

            </div>
         </div>

      </div>
   )
}
