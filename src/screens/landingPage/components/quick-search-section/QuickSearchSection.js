import React from 'react'
import style from "./quickSearchSection.module.scss"
import { SectionHeader } from '../scrollable-list-section/ScrollableListSection'
import { R } from '../../../../constants/resources'

export default function QuickSearchSection() {
   return (
      <div className={style["container"]}>

         <div className={style["wrapper"]}>

            <SectionHeader
               word1={{ text: "QUICK ", color: "var(--primary-color)" }}
               word2={{ text: "SEARCH", color: "#000000" }}
            />

            <div className={style["brand-wrapper"]}>
               <BrandBox brandLogo={R.ic_bmw} />
               <BrandBox brandLogo={R.ic_audi} />
               <BrandBox brandLogo={R.ic_kia} />
               <BrandBox brandLogo={R.ic_toyota} />
               <BrandBox brandLogo={R.ic_hyundai} />
               <BrandBox brandLogo={R.ic_mahindra} />
            </div>

         </div>

      </div>
   )
}

const BrandBox = ({ brandLogo }) => {
   return (
      <img src={brandLogo} alt='logo' style={{ width: "204px", marginRight: "40px" }} />
   )
}
