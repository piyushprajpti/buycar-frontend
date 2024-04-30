import React from 'react'
import style from "./buySection.module.scss"
import { R } from '../../../../constants/resources'
import SelectionField from "../../../../components/selection-field/SelectionField"
import InputField from "../../../../components/input-field/InputField"
import { ActionButton } from '../../../../components/buttons/Buttons'
import PrimaryPara from '../../../../components/primary-paragraph/PrimaryPara'

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

               <PrimaryPara 
               title={"Corporate Office Address"}
               description={"A-10 Shop No.12 Sec No.4 Shanti Nagar Mira Road, Mumbai, Maharashtra, 401107, India"}
               containerStyle={{paddingTop: "45px"}}
               mapView
               />
               <PrimaryPara 
               title={"Corporate Office Address"}
               description={"A-10 Shop No.12 Sec No.4 Shanti Nagar Mira Road, Mumbai, Maharashtra, 401107, India"}
               containerStyle={{paddingTop: "45px"}}               
               mapView
               />
            </div>
         </div>

      </div>
   )
}
