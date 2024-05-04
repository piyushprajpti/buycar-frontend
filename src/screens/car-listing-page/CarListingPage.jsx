import React from 'react'
import style from "./carListingPage.module.scss"
import FilterSection from './components/filter-section/FilterSection'
import ResultSection from './components/result-section/ResultSection'
import Header2 from '../../components/header/Header2'
import Footer from '../../components/footer/Footer'

export default function CarListingPage() {
   return (
      <>
         <Header2 />
         
         <div className={style["container"]}>

            <div className={style["wrapper"]}>
               <FilterSection />
               <ResultSection />
            </div>
         </div>
      </>
   )
}
