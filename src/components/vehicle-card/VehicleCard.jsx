import React from 'react'
import style from "./vehicleCard.module.scss"
import { R } from '../../constants/resources'

export default function VehicleCard({
   discountAmount, vehicleImg, transmissionType, fuelType, odometer, vehicleName, vehicleOriginalPrice, vehicleDiscountedPrice, vehicleDate, containerFlex
}) {

   return (
      <div className={style["container"]} style={{flex: containerFlex}}>

         <div className={style["image-container"]}>

            <div className={style["discount-tag-container"]}>
               <p className={style["discount-amount"]}>{discountAmount}</p>
               <img src={R.ic_discount_tag} className={style["tag-image"]} alt='tag' />
            </div>

            <img src={vehicleImg} className={style["vehicle-image"]} alt='vehicle' />

         </div>

         <VehicleSpecsBox
            transmissionType={transmissionType}
            fuelType={fuelType}
            odometer={odometer}
         />

         <p className={style["vehicle-name"]}>{vehicleName}</p>

         <VehiclePriceBox 
            vehicleOriginalPrice={vehicleOriginalPrice}
            vehicleDiscountedPrice={vehicleDiscountedPrice}
         />

         <p className={style["horizontal-divider"]}></p>

         <div className={style["vehicle-date-wrapper"]}>
            <img src={R.ic_car_primary_back} alt='icon' className={style["car-icon"]} />
            <p className={style["date"]}>{vehicleDate}</p>
         </div>

      </div>
   )
}

export const VehicleSpecsBox = ({ transmissionType, fuelType, odometer, isDetailpage }) => {

   const containerStyle = isDetailpage ? {justifyContent: "start", margin: "20px 0 36px 0"} : {justifyContent: "center"}
   const wrapperStyle = isDetailpage ? {backgroundColor: "#ffffff"} : {backgroundColor: "var(--specs-back-gray)", transform: "translateY(-50%)", padding: "10px"}

   return (
      <div className={style["specs-container"]} style={containerStyle}>
         <div className={style["specs-wrapper"]} style={wrapperStyle}>

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
   )
}

export const VehiclePriceBox = ({ vehicleOriginalPrice, vehicleDiscountedPrice, discountAmount}) => {

   let textDecoration = vehicleDiscountedPrice ? "line-through" : "none";
   let priceColor = vehicleDiscountedPrice ? "var('--specs-price-black')" : "var('--primary-color')";

   return (
      <div className={style["vehicle-price-container"]}>

         <p className={style["vehicle-original-price"]} style={{ textDecoration: textDecoration, color: priceColor }}>{vehicleOriginalPrice}</p>
         <p className={style["vehicle-discounted-price"]}>{vehicleDiscountedPrice}</p>
         {discountAmount && <p className={style["green-discount-tag"]}>{discountAmount}</p>}

      </div>
   )
}