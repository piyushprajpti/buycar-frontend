import React from 'react'
import style from "./primaryPara.module.scss"
import { R } from '../../constants/resources'

export default function PrimaryPara({ title, description, containerStyle, mapView }) {
   console.log(containerStyle)
   return (
      <div className={[style["container"], containerStyle].join(" ")}>

         <div className={style["heading-wrapper"]}>
            <p className={style["leading-bar"]}></p>
            <p className={style["address-type"]}>{title}</p>
         </div>

         <p className={style["description"]}>{description}</p>

         {mapView && <a className={style["map-view-wrapper"]} href={"https://maps.google.com"} target='_blank'>
            <img src={R.ic_location_pin} className={style["location-pin"]} />
            <p className={style["map-view-text"]}>Map View</p>
         </a>}
      </div>
   )
}
