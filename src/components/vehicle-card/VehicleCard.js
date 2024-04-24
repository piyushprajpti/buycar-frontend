import React from 'react'
import style from "./vehicleCard.module.scss"
import { R } from '../../constants/resources'

export default function VehicleCard({
   discountAmount, vehicleImg, transmissionType, fuelType, odometer, vehicleName, vehiclePrice, vehicleLocation
}) {
   return (
      <div className={style["container"]}>

         <div className={style["image-container"]}>

            <div className={style["discount-tag-container"]}>
               <p className={style["discount-amount"]}>{discountAmount}</p>
               <img src={R.ic_discount_tag} className={style["tag-image"]} alt='tag' />
            </div>

            <img src={vehicleImg} className={style["vehicle-image"]} alt='vehicle' />

         </div>

         <div className={style["specs-container"]}>
            <div className={style["specs-wrapper"]}>

               <div className={style["spec-wrapper"]}>
                  <img src={R.ic_transmission} alt='icon' className={style["spec-icon"]} />
                  <p className={style["spec-name"]}>{transmissionType}</p>
               </div>

               <p className={style["gray-dot"]}></p>

               <div className={style["spec-wrapper"]}>
                  <img src={R.ic_fuel} alt='icon' className={style["spec-icon"]} />
                  <p className={style["spec-name"]}>{fuelType}</p>
               </div>

               <p className={style["gray-dot"]}></p>

               <div className={style["spec-wrapper"]}>
                  <img src={R.ic_odometer} alt='icon' className={style["spec-icon"]} />
                  <p className={style["spec-name"]}>{odometer}</p>
               </div>

            </div>
         </div>

         <p className={style["vehicle-name"]}>{vehicleName}</p>

         <p className={style["vehicle-price"]}>{vehiclePrice}</p>

         <p className={style["horizontal-divider"]}></p>

         <div className={style["vehicle-location-wrapper"]}>
            <img src={R.ic_location_pin} alt='icon' className={style["location-icon"]} />
            <p className={style["location"]}>{vehicleLocation}</p>
         </div>

      </div>
   )
}
