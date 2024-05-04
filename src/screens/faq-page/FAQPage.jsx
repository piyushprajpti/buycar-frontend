import React, { useState } from 'react'
import style from "./faqpage.module.scss"
import Header2 from "../../components/header/Header2"
import { R } from '../../constants/resources'
import { ActionButton } from '../../components/buttons/Buttons'

export default function FAQPage() {
   return (
      <>
         <Header2 />

         <div className={style["container"]}>
            <div className={style["wrapper"]}>
               <div className={style["faq-list-container"]}>

                  <p className={style["faq-text"]}>Frequently Asked Questions</p>

                  <FAQBox
                     title={"Suspendisse ultrices pharetra libero sed interdum."}
                     description={"Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus."}
                  />
                  <FAQBox
                     title={"Suspendisse ultrices pharetra libero sed interdum."}
                     description={"Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus."}
                  />
                  <FAQBox
                     title={"Suspendisse ultrices pharetra libero sed interdum."}
                     description={"Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus."}
                  />
                  <FAQBox
                     title={"Suspendisse ultrices pharetra libero sed interdum."}
                     description={"Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus."}
                  />
                  <FAQBox
                     title={"Suspendisse ultrices pharetra libero sed interdum."}
                     description={"Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus."}
                  />
               </div>

               <div className={style["support-box-container"]}>
                  <div className={style["support-box-wrapper"]}>
                     <p className={style["box-heading"]}>Don't find your answer. Ask for support.</p>
                     <p className={style["box-description"]}>Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis primis in faucibu raesent eget sem purus.</p>

                     <input type="text" className={style["input"]} placeholder='Email address' />
                     <input type="text" className={style["input"]} placeholder='Subject' />
                     <textarea className={style["textarea"]} placeholder='Message (optional)' />

                     <ActionButton
                        name={"Send Message"}
                        containerStyle={style["action-button-container"]}
                     />
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

const FAQBox = ({ title, description }) => {

   const [isActive, setIsActive] = useState(false)

   const icon = isActive ? R.ic_minus_white : R.ic_plus_black;
   const headerBackColor = isActive ? "var(--primary-color)" : "#ffffff";
   const border = isActive ? "none" : "1px solid var(--filter-horizontal-divider)";
   const headerColor = isActive ? "#ffffff" : "var(--specs-font-black)";
   const boxShadow = isActive ? "0 8px 40px 0 var(--arrow-button-text)" : "none";

   return (
      <div className={style["faq-box-container"]} style={{ border: border, boxShadow: boxShadow }}>

         <div className={style["faq-box-header-wrapper"]} style={{ backgroundColor: headerBackColor }}>
            <p className={style["faq-box-header"]} style={{ color: headerColor }}>{title}</p>
            <div className={style["icon-wrapper"]} onClick={() => setIsActive(!isActive)}>
               <img src={icon} className={style["icon-img"]} alt='icon' />
            </div>
         </div>

         {isActive && <div className={style["faq-box-description-wrapper"]}>
            <p className={style["description"]}>{description}</p>
         </div>}

      </div>
   )
}
