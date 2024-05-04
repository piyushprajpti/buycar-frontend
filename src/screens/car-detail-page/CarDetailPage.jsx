import React from 'react'
import style from "./carDetailPage.module.scss"
import Header2 from "../../components/header/Header2"
import { VehiclePriceBox, VehicleSpecsBox } from '../../components/vehicle-card/VehicleCard'
import { R } from '../../constants/resources'
import { ActionButton } from '../../components/buttons/Buttons'

export default function CarDetailPage() {
   return (
      <>
         <Header2 />

         <div className={style["container"]}>

            <div className={style["wrapper"]}>

               <div className={style["car-image-wrapper"]}>
                  <img src={R.ic_car3} className={style["image"]} />
               </div>

               <div className={style["car-detail-wrapper"]}>

                  <p className={style["car-name"]}>2018 Honda Amaze 1.2L I-VTEC S</p>

                  <VehicleSpecsBox
                     transmissionType={"Automatic"}
                     fuelType={"Petrol"}
                     odometer={"40,000"}
                     isDetailpage={true}
                  />

                  <VehiclePriceBox
                     vehicleOriginalPrice={"$ 30.74 Lac"}
                     vehicleDiscountedPrice={"$14.74 Lac"}
                     discountAmount={"21% OFF"}
                  />

                  <p className={style["horizontal-divider"]} />

                  <div className={style["test-drive-wrapper"]}>
                     <img src={R.ic_home} className={style["home-icon"]} />
                     <p className={style["test-drive-text"]}>Home Test Drive Available</p>
                  </div>

                  <div className={style["action-button-wrapper"]}>

                     <ActionButton
                        name={"Book Now"}
                        containerStyle={style["action-button-book-now"]}
                     />

                     <ActionButton
                        name={"Book Test Drive"}
                        containerStyle={style["action-button-book-test-drive"]}
                     />

                  </div>

                  <div className={style["more-help-container"]}>
                     <p className={style["more-help-text"]}>Need more help? Contact us via </p>
                     <a className={style["whatsapp-wrapper"]} href="https://api.whatsapp.com/send?phone=+91234567890">
                        <img src={R.ic_whatsapp} className={style["whatsapp-icon"]} />
                        <p className={style["whatsapp-text"]}>Whats App</p>
                     </a>
                  </div>

               </div>

            </div>

            <div className={style["overview-details-wrapper"]}>
               <p className={style["overview-text"]}>Overview Details</p>
               <p className={style["horizontal-divider"]} />

               <div className={style["boxes-container"]}>

                  <DetailBox
                     icon={R.ic_make_year}
                     title={"Make year"}
                     description={"Jan 2018"}
                  />
                  
                  <DetailBox
                     icon={R.ic_make_year}
                     title={"Make year"}
                     description={"Jan 2018"}
                  />
                  <DetailBox
                     icon={R.ic_make_year}
                     title={"Make year"}
                     description={"Jan 2018"}
                  />
                  <DetailBox
                     icon={R.ic_make_year}
                     title={"Make year"}
                     description={"Jan 2018"}
                  />
                  <DetailBox
                     icon={R.ic_make_year}
                     title={"Make year"}
                     description={"Jan 2018"}
                  />
                  <DetailBox
                     icon={R.ic_make_year}
                     title={"Make year"}
                     description={"Jan 2018"}
                  />
                  <DetailBox
                     icon={R.ic_make_year}
                     title={"Make year"}
                     description={"Jan 2018"}
                  />
                  <DetailBox
                     icon={R.ic_make_year}
                     title={"Make year"}
                     description={"Jan 2018"}
                  />
                  <DetailBox
                     icon={R.ic_make_year}
                     title={"Make year"}
                     description={"Jan 2018"}
                  />

               </div>
            </div>
         </div>
      </>
   )
}

const DetailBox = ({ icon, title, description }) => {
   return (
      <div className={style["detail-box-container"]}>

         <div className={style["detail-box-icon-wrapper"]}>
            <img src={icon} className={style["detail-box-icon"]} />
         </div>

         <div className={style["detail-info-wrapper"]}>
            <p className={style["detail-box-title"]}>{title}</p>
            <p className={style["detail-box-description"]}>{description}</p>
         </div>

      </div>
   )
}
