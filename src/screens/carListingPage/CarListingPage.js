import React from 'react'
import style from "./carListingPage.module.scss"
import Header from "../../components/header/Header"
import FilterSection from './components/filter-section/FilterSection'
import ResultSection from './components/result-section/ResultSection'

export default function CarListingPage() {
   return (
      <div className={style["container"]}>
         
         <FilterSection/>
         <ResultSection/>

      </div>
   )
}
