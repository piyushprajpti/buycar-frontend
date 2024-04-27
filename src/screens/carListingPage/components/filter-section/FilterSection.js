import React, { useState } from 'react'
import style from "./filterSection.module.scss"
import tagStyle from "./vehicleModelTag.module.scss"
import { R } from '../../../../constants/resources'
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"

export default function FilterSection() {
   return (
      <div className={style["container"]}>

         <p className={style["container-header"]}>Refine your Result</p>

         <p className={style["horizontal-divider"]}></p>

         <div className={style["wrapper"]}>

            <MakeAndModels />

            <p className={style["horizontal-divider"]}></p>

            <PriceRange />

            <p className={style["horizontal-divider"]}></p>

            <QuickPrice/>
         </div>

      </div>
   )
}

const MakeAndModels = () => {
   return (
      <>
         <p className={style["wrapper-header"]}>MAKE & MODELS</p>

         <div className={style["search-wrapper"]}>
            <img src={R.ic_search} className={style["search-icon"]} />
            <input type='text' className={style["search-input"]} placeholder='Search Make & Models' />
         </div>

         <VehicleModelTag placeholder={"Maruti Baleno"} modelCount={"45"} />
         <VehicleModelTag placeholder={"Maruti Baleno"} modelCount={"45"} />
         <VehicleModelTag placeholder={"Maruti Baleno"} modelCount={"45"} />
         <VehicleModelTag placeholder={"Maruti Baleno"} modelCount={"45"} />
         <VehicleModelTag placeholder={"Maruti Baleno"} modelCount={"45"} />

      </>
   )
}

const VehicleModelTag = (
   { placeholder, modelCount }
) => {
   return (
      <div className={tagStyle["container"]}>

         <input type='checkbox' className={tagStyle["checkbox"]} />

         <p className={tagStyle["placeholder"]}>{placeholder}</p>

         <p className={tagStyle["model-count"]}>{"(" + modelCount + ")"}</p>

         <img src={R.ic_drop_down_arrow} className={tagStyle["drop-down-arrow"]} />

      </div>
   )
}

const PriceRange = () => {

   const [minPrice, setMinPrice] = useState("50,000")
   const [maxPrice, setMaxPrice] = useState("80,00,000")


   return (
      <>
         <p className={style["wrapper-header"]}>PRICE RANGE</p>

         <div className={style["price-range-amount"]}>
            <p className={style["price"]}>{"₹" + minPrice}</p>
            <p className={style["price"]}>{"₹" + maxPrice}</p>
         </div>

         <div className={style["min-max-label-wrapper"]}>
            <p className={style["min-max-label"]}>Minimum</p>
            <p className={style["min-max-label"]}>Maximum</p>
         </div>

         {/* <Slider
               value={value}
               onChange={handleChange}

            /> */}

      </>
   )
}

const QuickPrice = () => {
   return (
      <>
         <p className={style["wrapper-header"]}>Quick Price</p>
      </>
   )
}