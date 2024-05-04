import React from 'react'
import style from "./quickSearchSection.module.scss"
import { R } from '../../../../constants/resources'
import HorizontalScroller from '../../../../components/horizontal-scroller/HorizontalScroller'

export default function QuickSearchSection() {
   return (
      <div className={style["container"]}>

         <div className={style["wrapper"]}>

            <HorizontalScroller
               word1={{ text: "QUICK ", color: "var(--primary-color)" }}
               word2={{ text: "SEARCH", color: "#000000" }}
               leadingBar={true}
               scrollable={true}
            >
               <div className={style["brand-wrapper"]}>
                  <BrandBox brandLogo={R.ic_bmw} />
                  <BrandBox brandLogo={R.ic_audi} />
                  <BrandBox brandLogo={R.ic_kia} />
                  <BrandBox brandLogo={R.ic_toyota} />
                  <BrandBox brandLogo={R.ic_hyundai} />
                  <BrandBox brandLogo={R.ic_mahindra} />
               </div>
            </HorizontalScroller>



         </div>

      </div>
   )
}

export const BrandBox = ({ brandLogo }) => {
   return (
      <img src={brandLogo} alt='logo' className={style["logo-img"]} />
   )
}
