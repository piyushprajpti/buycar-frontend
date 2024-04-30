import React, { useState } from 'react'
import style from "./contactUsPage.module.scss"
import Header2 from "../../components/header/Header2"
import Footer from "../../components/footer/Footer"
import ArrowButton from '../../components/buttons/ArrowButton'
import BuySection from './components/buy-section/BuySection'
import SellSection from './components/sell-section/SellSection'

export default function ContactUsPage() {

   const [activeButton, setActiveButton] = useState("buy")

   return (
      <div className={style["container"]}>

         <Header2 />

         <div className={style["wrapper"]}>
            <p className={style["contact-us-text"]}>Contact Us</p>

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

               {activeButton === "buy" && <BuySection />}
               {activeButton === "sell" && <SellSection />}

            </div>
         </div>

      </div>
   )
}
