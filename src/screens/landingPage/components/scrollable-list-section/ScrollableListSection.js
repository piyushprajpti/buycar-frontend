import React from 'react'
import headerStyle from "./sectionHeader.module.scss"
import style from "./scrollableListSection.module.scss"
import { R } from '../../../../constants/resources'
import VehicleCard from '../../../../components/vehicle-card/VehicleCard'

export default function ScrollableListSection({
   word1, word2, word3, onBackClick, onForwardClick, backColor
}) {
   return (
      <div className={style["container"]} style={{backgroundColor: backColor}} >
         <div className={style["wrapper"]}>

            <SectionHeader word1={word1} word2={word2} word3={word3} onBackClick={onBackClick} onForwardClick={onForwardClick} />

            <div className={style["vehicle-list-container"]}>

               <VehicleCard
                  discountAmount={"50% OFF"}
                  vehicleImg={R.img_hero_section_back}
                  transmissionType={"Automatic"}
                  fuelType={"Petrol"}
                  odometer={"40,000"}
                  vehicleName={"2022 Hyundai Creta SX"}
                  vehiclePrice={"$ 14.74 Lac"}
                  vehicleLocation={"Derawal Nagar"}
               />

               <VehicleCard
                  discountAmount={"50% OFF"}
                  vehicleImg={R.img_hero_section_back}
                  transmissionType={"Automatic"}
                  fuelType={"Petrol"}
                  odometer={"40,000"}
                  vehicleName={"2022 Hyundai Creta SX"}
                  vehiclePrice={"$ 14.74 Lac"}
                  vehicleLocation={"Derawal Nagar"}
               />

               <VehicleCard
                  discountAmount={"50% OFF"}
                  vehicleImg={R.img_hero_section_back}
                  transmissionType={"Automatic"}
                  fuelType={"Petrol"}
                  odometer={"40,000"}
                  vehicleName={"2022 Hyundai Creta SX"}
                  vehiclePrice={"$ 14.74 Lac"}
                  vehicleLocation={"Derawal Nagar"}
               />
               
               
            </div>
         </div>
      </div>
   )
}

export const SectionHeader = ({
   word1, word2, word3, onBackClick, onForwardClick
}) => {
   return (
      <div className={headerStyle["container"]}>

         <div className={headerStyle["wrapper"]}>
            <p className={headerStyle["vertical-divider"]}></p>
            {word1 && <p className={headerStyle["heading"]} style={{color: word1.color}} >{word1.text}</p>}
            {word2 && <p className={headerStyle["heading"]} style={{color: word2.color}} >{word2.text}</p>}
            {word3 && <p className={headerStyle["heading"]} style={{color: word3.color}} >{word3.text}</p>}
         </div>

         <div className={headerStyle["wrapper"]}>

            <p className={headerStyle["horizontal-divider"]}></p>

            <div className={headerStyle["button-container"]}>
               <img src={R.ic_arrow_left} className={headerStyle["button"]} onClick={() => onBackClick()} alt='back' />
            </div>

            <div className={headerStyle["button-container"]}>
               <img src={R.ic_arrow_right} className={headerStyle["button"]} onClick={() => onForwardClick()} alt='forward' />
            </div>
         </div>

      </div>
   )
}