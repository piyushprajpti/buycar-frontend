import React, { useState } from 'react'
import {R} from "../../../../constants/resources"
import style from "./makeAndModels.module.scss"
import SelectableTag from '../selectable-tag/SelectableTag'
import FilterHeader from '../filter-header/FilterHeader'

export default function MakeAndModels() {

   return (
      <>

         <div className={style["search-wrapper"]}>
            <img src={R.ic_search} className={style["search-icon"]} />
            <input type='text' className={style["search-input"]} placeholder='Search Make & Models' />
         </div>

         <SelectableTag placeholder={"Maruti Suzuki"} count={"45"} dropDownArrow checkbox />
         <SelectableTag placeholder={"Maruti Suzuki"} count={"45"} dropDownArrow checkbox />
         <SelectableTag placeholder={"Maruti Suzuki"} count={"45"} dropDownArrow checkbox />
         <SelectableTag placeholder={"Maruti Suzuki"} count={"45"} dropDownArrow checkbox />
         <SelectableTag placeholder={"Maruti Suzuki"} count={"45"} dropDownArrow checkbox />
         <SelectableTag placeholder={"Maruti Suzuki"} count={"45"} dropDownArrow checkbox />

      </>
   )
}