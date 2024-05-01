import React from 'react'
import style from "./resultSection.module.scss"
import VehicleCard from '../../../../components/vehicle-card/VehicleCard'
import { R } from '../../../../constants/resources'
import HorizontalScroller from "../../../../components/horizontal-scroller/HorizontalScroller"
import { BrandBox } from '../../../landing-page/components/quick-search-section/QuickSearchSection'

export default function ResultSection() {

   return (
      <div className={style["container"]}>
         <p className={style["result-header"]}>1030 cars in New Delhi</p>

         <div className={style["result-list-wrapper"]}>

            <VehicleCard
               discountAmount={"50% OFF"}
               vehicleImg={R.ic_car1}
               transmissionType={"Automatic"}
               fuelType={"Petrol"}
               odometer={"40,000"}
               vehicleName={"2022 Hyundai Creta SX"}
               vehicleOriginalPrice={"$ 14.74 Lac"}
               vehicleDiscountedPrice={"$ 14.74 Lac"}
               vehicleDate={"June 2021"}
            />
            <VehicleCard
               discountAmount={"50% OFF"}
               vehicleImg={R.ic_car1}
               transmissionType={"Automatic"}
               fuelType={"Petrol"}
               odometer={"40,000"}
               vehicleName={"2022 Hyundai Creta SX"}
               vehicleOriginalPrice={"$ 14.74 Lac"}
               vehicleDiscountedPrice={"$ 14.74 Lac"}
               vehicleDate={"June 2021"}
            />
            <VehicleCard
               discountAmount={"50% OFF"}
               vehicleImg={R.ic_car1}
               transmissionType={"Automatic"}
               fuelType={"Petrol"}
               odometer={"40,000"}
               vehicleName={"2022 Hyundai Creta SX"}
               vehicleOriginalPrice={"$ 14.74 Lac"}
               vehicleDiscountedPrice={"$ 14.74 Lac"}
               vehicleDate={"June 2021"}
            />
            <VehicleCard
               discountAmount={"50% OFF"}
               vehicleImg={R.ic_car1}
               transmissionType={"Automatic"}
               fuelType={"Petrol"}
               odometer={"40,000"}
               vehicleName={"2022 Hyundai Creta SX"}
               vehicleOriginalPrice={"$ 14.74 Lac"}
               vehicleDiscountedPrice={"$ 14.74 Lac"}
               vehicleDate={"June 2021"}
            />

         </div>

         <HorizontalScroller
            backColor={"#ffffff"}
            word1={{ text: "Yocarz", color: "#000000" }}
            word2={{ text: "Assurance", color: "var(--primary-color)" }}
            titleFontSize={"1.5rem"}
            scrollable={true}
         >
            <div className={style["assurance-container"]}>
               <div className={style["assurance-wrapper"]}>
                  <img className={style["assurance-ic"]} src={R.ic_buy_back} />
                  <p className={style["assurance-name"]}>Buy Back Guarantee</p>
               </div>
               <div className={style["assurance-wrapper"]}>
                  <img className={style["assurance-ic"]} src={R.ic_buy_back} />
                  <p className={style["assurance-name"]}>Buy Back Guarantee</p>
               </div>
               <div className={style["assurance-wrapper"]}>
                  <img className={style["assurance-ic"]} src={R.ic_buy_back} />
                  <p className={style["assurance-name"]}>Buy Back Guarantee</p>
               </div>
               <div className={style["assurance-wrapper"]}>
                  <img className={style["assurance-ic"]} src={R.ic_buy_back} />
                  <p className={style["assurance-name"]}>Buy Back Guarantee</p>
               </div>
            </div>

         </HorizontalScroller>

         <p style={{ height: "50px", width: "100%" }}></p>

         <div className={style["result-list-wrapper"]}>

            <VehicleCard
               discountAmount={"50% OFF"}
               vehicleImg={R.ic_car1}
               transmissionType={"Automatic"}
               fuelType={"Petrol"}
               odometer={"40,000"}
               vehicleName={"2022 Hyundai Creta SX"}
               vehicleOriginalPrice={"$ 14.74 Lac"}
               vehicleDiscountedPrice={"$ 14.74 Lac"}
               vehicleDate={"June 2021"}
            />
            <VehicleCard
               discountAmount={"50% OFF"}
               vehicleImg={R.ic_car1}
               transmissionType={"Automatic"}
               fuelType={"Petrol"}
               odometer={"40,000"}
               vehicleName={"2022 Hyundai Creta SX"}
               vehicleOriginalPrice={"$ 14.74 Lac"}
               vehicleDiscountedPrice={"$ 14.74 Lac"}
               vehicleDate={"June 2021"}
            />

         </div>

         <HorizontalScroller
            word1={{ text: "QUICK ", color: "var(--primary-color)" }}
            word2={{ text: "SEARCH", color: "#000000" }}
            leadingBar={false}
            scrollable={true}
            titleFontSize={"1.5rem"}
         >
            <div className={style["brand-wrapper"]}>
               <BrandBox brandLogo={R.ic_bmw} style={{ width: "128px", marginRight: "20px" }} />
               <BrandBox brandLogo={R.ic_audi} style={{ width: "128px", marginRight: "20px" }} />
               <BrandBox brandLogo={R.ic_kia} style={{ width: "128px", marginRight: "20px" }} />
               <BrandBox brandLogo={R.ic_toyota} style={{ width: "128px", marginRight: "20px" }} />
               <BrandBox brandLogo={R.ic_hyundai} style={{ width: "128px", marginRight: "20px" }} />
               <BrandBox brandLogo={R.ic_mahindra} style={{ width: "128px", marginRight: "20px" }} />
            </div>
         </HorizontalScroller>

         <p style={{ height: "50px", width: "100%" }}></p>

         <div className={style["result-list-wrapper"]}>

            <VehicleCard
               discountAmount={"50% OFF"}
               vehicleImg={R.ic_car1}
               transmissionType={"Automatic"}
               fuelType={"Petrol"}
               odometer={"40,000"}
               vehicleName={"2022 Hyundai Creta SX"}
               vehicleOriginalPrice={"$ 14.74 Lac"}
               vehicleDiscountedPrice={"$ 14.74 Lac"}
               vehicleDate={"June 2021"}
            />
            <VehicleCard
               discountAmount={"50% OFF"}
               vehicleImg={R.ic_car1}
               transmissionType={"Automatic"}
               fuelType={"Petrol"}
               odometer={"40,000"}
               vehicleName={"2022 Hyundai Creta SX"}
               vehicleOriginalPrice={"$ 14.74 Lac"}
               vehicleDiscountedPrice={"$ 14.74 Lac"}
               vehicleDate={"June 2021"}
            />

         </div>
      </div>
   )
}
