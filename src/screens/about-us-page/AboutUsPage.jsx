import React from 'react'
import style from "./aboutUsPage.module.scss"
import { R } from "../../constants/resources"
import PrimaryPara from '../../components/primary-paragraph/PrimaryPara'
import Header2 from '../../components/header/Header2'

export default function AboutUsPage() {
   return (
      <>
         <Header2 />

         <div className={style["container"]}>
            <p className={style["container-header"]}>About Us</p>

            <div className={style["wrapper"]}>

               <div className={style["who-we-are-wrapper"]}>

                  <PrimaryPara
                     title={"Mission"}
                     description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum "}
                     containerStyle={{ width: "80%" }}
                  />

                  <div className={style["logo-wrapper"]}>
                     <img src={R.img_logo_color} className={style["logo"]} />
                  </div>
               </div>

               <PrimaryPara
                  title={"Vision"}
                  description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
                  containerStyle={{ backgroundColor: "var(--arrow-button-back)", padding: "40px" }}
               />

               <PrimaryPara
                  title={"Mission"}
                  description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
                  containerStyle={{ backgroundColor: "var(--arrow-button-back)", padding: "40px" }}
               />

               <div className={style["what-we-do-wrapper"]}>

                  <PrimaryPara
                     title={"What we do"}
                     description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum "}
                     containerStyle={{ width: "80%" }}
                  />

                  <div className={style["img-wrapper"]}>
                     <img src={R.img_about} className={style["about-img"]} />
                  </div>
               </div>

            </div>

         </div>
      </>
   )
}
