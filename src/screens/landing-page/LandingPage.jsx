import React from 'react'
import style from "./landingPage.module.scss"
import Header from '../../components/header/Header'
import HeroSection from './components/hero-section/HeroSection'
import TradeCarSection from './components/trade-car-section/TradeCarSection'
import QuickSearchSection from './components/quick-search-section/QuickSearchSection'
import HorizontalScroller from '../../components/horizontal-scroller/HorizontalScroller'
import VehicleCard from '../../components/vehicle-card/VehicleCard'
import { R } from '../../constants/resources'


export default function LandingPage() {
   return (
      <>
         <div className={style["container"]}>

            <Header />

            <HeroSection />

            <TradeCarSection />

            <QuickSearchSection />

            <HorizontalScroller
               backColor={"var(--footer-back)"}
               word1={{ text: "TRENDING", color: "var(--primary-color)" }}
               word2={{ text: "CARS", color: "#ffffff" }}
               leadingBar={true}
               scrollable={true}
            >
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
                  containerFlex={"0 0 23%"}
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
                  containerFlex={"0 0 23%"}
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
                  containerFlex={"0 0 23%"}
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
                  containerFlex={"0 0 23%"}
               />
               
            </HorizontalScroller>

            <HorizontalScroller
               backColor={"#ffffff"}
               word1={{ text: "BEST", color: "#000000" }}
               word2={{ text: "DISCOUNTED ", color: "var(--primary-color)" }}
               word3={{ text: "CARS", color: "#000000" }}
               leadingBar={true}
               scrollable={true}
            >
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
                  containerFlex={"0 0 23%"}
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
                  containerFlex={"0 0 23%"}
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
                  containerFlex={"0 0 23%"}
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
                  containerFlex={"0 0 23%"}
               />
               
            </HorizontalScroller>

            <HorizontalScroller
               backColor={"var(--newest-model-back)"}
               word1={{ text: "NEWEST", color: "var(--primary-color)" }}
               word2={{ text: "MODELS", color: "#000000" }}
               leadingBar={true}
               scrollable={true}
            >
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
                  containerFlex={"0 0 23%"}
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
                  containerFlex={"0 0 23%"}
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
                  containerFlex={"0 0 23%"}
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
                  containerFlex={"0 0 23%"}
               />
            </HorizontalScroller>

            <HorizontalScroller
               backColor={"#ffffff"}
               word1={{ text: "NEWEST", color: "#000000" }}
               word2={{ text: "STOCK", color: "var(--primary-color)" }}
               leadingBar={true}
               scrollable={true}
            >
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
                  containerFlex={"0 0 23%"}
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
                  containerFlex={"0 0 23%"}
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
                  containerFlex={"0 0 23%"}
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
                  containerFlex={"0 0 23%"}
               />
               
            </HorizontalScroller>

         </div>
      </>
   )
}
