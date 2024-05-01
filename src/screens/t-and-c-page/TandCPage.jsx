import React, { useState } from 'react'
import style from "./tandcPage.module.scss"
import Header2 from '../../components/header/Header2'
import ArrowButton from '../../components/buttons/ArrowButton'
import TandCBuySection from './components/tandc-buy-section/TandCBuySection'
import TandCSellSection from './components/tandc-sell-section/TandCSellSection'

export default function TandCPage() {

   const [activeButton, setActiveButton] = useState("buy")

   return (
      <div className={style["container"]}>

         <Header2 />

         <div className={style["wrapper"]}>
            <p className={style["contact-us-text"]}>Terms & Conditions</p>

            <div className={style["form-wrapper"]}>

               <div className={style["switch-button-wrapper"]}>
                  <ArrowButton
                     title={"Buy"}
                     isActive={activeButton === "buy"}
                     borderRadius={"12px 0 0 0"}
                     onClick={() => setActiveButton("buy")}
                  />
                  <ArrowButton
                     title={"Sell"}
                     isActive={activeButton === "sell"}
                     borderRadius={"0 12px 0 0"}
                     onClick={() => setActiveButton("sell")}
                  />
               </div>

               {activeButton === "buy" && <TandCBuySection />}
               {activeButton === "sell" && <TandCSellSection />}

            </div>
         </div>

      </div>
   )
}
