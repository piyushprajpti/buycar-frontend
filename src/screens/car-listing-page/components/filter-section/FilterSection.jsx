import React, { useState } from 'react'
import style from "./filterSection.module.scss"
import MakeAndModels from '../make-and-models/MakeAndModels'
import PriceRange from '../price-range/PriceRange'
import QuickPrice from '../quick-price/QuickPrice'
import Fuel from '../fuel/Fuel'
import KmsDriven from '../kms-driven/KmsDriven'
import CollapsibleTab from '../collapsible-tab/CollapsibleTab'

export default function FilterSection() {
   return (
      <div className={style["container"]}>

         <p className={style["container-header"]}>Refine your Result</p>

         <p className={style["horizontal-divider"]}></p>

         <div className={style["wrapper"]}>


            <CollapsibleTab heading={"MAKE AND MODELS"} initiallyExpended={true}>
               <MakeAndModels />
            </CollapsibleTab>

            <p className={style["horizontal-divider"]}></p>

            <CollapsibleTab heading={"PRICE RANGE"} initiallyExpended={true}>
               <PriceRange />
            </CollapsibleTab>

            <p className={style["horizontal-divider"]}></p>

            <CollapsibleTab heading={"QUICK PRICE"} initiallyExpended={true}>
               <QuickPrice />
            </CollapsibleTab>

            <p className={style["horizontal-divider"]}></p>

            <CollapsibleTab heading={"FUEL"} initiallyExpended={true}>
               <Fuel />
            </CollapsibleTab>

            <p className={style["horizontal-divider"]}></p>

            <CollapsibleTab heading={"MODEL YEAR"} initiallyExpended={false}>
               <Fuel />
            </CollapsibleTab>

            <p className={style["horizontal-divider"]}></p>

            <CollapsibleTab heading={"TRANSMISSION"} initiallyExpended={false}>
               <Fuel />
            </CollapsibleTab>

            <p className={style["horizontal-divider"]}></p>

            <CollapsibleTab heading={"OWNER"} initiallyExpended={false}>
               <Fuel />
            </CollapsibleTab>

            <p className={style["horizontal-divider"]}></p>

            <CollapsibleTab heading={"KMS DRIVEN"} initiallyExpended={true}>
               <KmsDriven />
            </CollapsibleTab>
         </div>

      </div>
   )
}