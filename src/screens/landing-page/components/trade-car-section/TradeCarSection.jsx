import React from 'react'
import style from "./tradeCarSection.module.scss"
import { ActionButton } from '../../../../components/buttons/Buttons'
import { R } from "../../../../constants/resources"
import SelectionField from '../../../../components/selection-field/SelectionField'
import InputField from '../../../../components/input-field/InputField'

export default function TradeCarSection() {
   return (
      <div className={style["container"]}>
         <div className={style["wrapper"]}>

            <div className={style["buy-car-wrapper"]}>

               <p className={style["header"]}>Buy a Car</p>

               <div className={style["selection-field-wrapper"]}>
                  <SelectionField
                     options={["Select Model", "2024", "2023", "2022", "2021", "2020"]}
                  />

                  <p style={{ width: "30.5px" }}></p>

                  <SelectionField
                     options={["Select Make", "2024", "2023", "2022", "2021", "2020"]}
                  />
               </div>

               <InputField placeholder={"Enter Car Name"} />

               <ActionButton
                  name={"Search"}
                  containerStyle={{
                     fontSize: "1.5rem",
                     fontWeight: "500",
                     padding: "17px 62.5px",
                     margin: "32px 0"
                  }} />
            </div>

            <div className={style["divider"]}></div>

            <div className={style["sell-car-wrapper"]}>
               <p className={style["header"]}>Sell your Car</p>

               <ActionButton
                  name={"Sell Car"}
                  leadingIcon={R.ic_sell_car}
                  leadingIconWidth={"24px"}
                  textMargin={"0 0 0 6px"} paddingValues={"22px 0"} width={"100%"} fontSize={"1.5rem"} fontWeight={"500"} margin={"0 0 30px 0"}
                  containerStyle={{
                     padding: "22px 0",
                     width: "100%",
                     fontSize: "1.5rem",
                     fontWeight: "500",
                     margin: "0 0 30px 0"
                  }}
               />

               <div className={style["tag-container"]}>

                  <div className={style["tag-wrapper"]}>
                     <img src={R.ic_instant_online_quote} className={style["tag-icon"]} alt='logo' />
                     <p className={style["tag-name"]}>Instant Online <br /> Quote</p>
                  </div>

                  <div className={style["tag-wrapper"]}>
                     <img src={R.ic_free_doorstep_evaluation} className={style["tag-icon"]} alt='logo' />
                     <p className={style["tag-name"]}>Free Doorstep <br /> Evaluation</p>
                  </div>

                  <div className={style["tag-wrapper"]}>
                     <img src={R.ic_same_day_payment} className={style["tag-icon"]} alt='logo' />
                     <p className={style["tag-name"]}>Same Day <br /> Payment</p>
                  </div>

               </div>
            </div>

         </div>
      </div>
   )
}
