import React from 'react'
import style from "./primaryPara.module.scss"
import { R } from '../../constants/resources'

export default function PrimaryPara({title, description, containerStyle, mapView}) {
   return (
      <div className={style["container"]} style={containerStyle}>

         <div className={style["heading-wrapper"]}>
            <p className={style["leading-bar"]}></p>
            <p className={style["address-type"]}>{title}</p>
         </div>

         <p className={style["description"]}>{description}</p>

         {mapView && <div className={style["map-view-wrapper"]}>
            <img src={R.ic_location_pin} className={style["location-pin"]} />
            <p className={style["map-view-text"]}>Map View</p>
         </div>}
      </div>
   )
}
