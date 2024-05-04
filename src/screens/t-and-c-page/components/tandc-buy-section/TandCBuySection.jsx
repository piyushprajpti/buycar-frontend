import React, { useState } from 'react'
import style from "./tandcBuySection.module.scss"
import titleStyle from "./titleBox.module.scss"
import { R } from '../../../../constants/resources'
import PrimaryPara from "../../../../components/primary-paragraph/PrimaryPara"

export default function TandCBuySection() {

   const [activeButton, setActiveButton] = useState(0)

   return (
      <div className={style["container"]}>
         <div className={style["titles-container"]}>
            <TitleBox title={"About the Company"} isActive={activeButton === 0} onClick={() => setActiveButton(0)} />
            <TitleBox title={"Trademarks and Domain Name"} isActive={activeButton === 1} onClick={() => setActiveButton(1)} />
            <TitleBox title={"On Boarding"} isActive={activeButton === 2} onClick={() => setActiveButton(2)} />
            <TitleBox title={"7-Day Return policy"} isActive={activeButton === 3} onClick={() => setActiveButton(3)} />
            <TitleBox title={"Anciliary Services"} isActive={activeButton === 4} onClick={() => setActiveButton(4)} />
            <TitleBox title={"TERM AND TERMINATION"} isActive={activeButton === 5} onClick={() => setActiveButton(5)} />
            <TitleBox title={"DISCLAIMERS AND WARRENTIES"} isActive={activeButton === 6} onClick={() => setActiveButton(6)} />
            <TitleBox title={"FORCE MAJEURE"} isActive={activeButton === 7} onClick={() => setActiveButton(7)} />
            <TitleBox title={"CONSENT TO USE DATA"} isActive={activeButton === 8} onClick={() => setActiveButton(8)} />
            <TitleBox title={"NEW CAR ASSURED BUYBACK"} isActive={activeButton === 9} onClick={() => setActiveButton(9)} />
         </div>

         <p className={style["vertical-divider"]} />

         <div className={style["description-container"]}>
            <PrimaryPara
               title={"About the Company"}
               description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
               containerStyle={style["para-desc-container"]}
            />
            <PrimaryPara
               title={"Trademarks and Domain Name"}
               description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
               containerStyle={style["para-desc-container"]}
            />

            
         </div>
      </div>
   )
}

const TitleBox = ({ title, isActive, onClick }) => {

   const backColor = isActive ? "var(--title-box-back)" : "#ffffff";

   const borderColor = isActive ? "var(--title-box-back)" : "var(--arrow-button-text)"

   return (
      <div className={titleStyle["container"]} onClick={onClick} style={{ backgroundColor: backColor, borderColor: borderColor }}>
         <p className={titleStyle["title"]}>{title}</p>
         <img src={R.ic_arrow_right_black} className={titleStyle["arrow-right"]} />
      </div>
   )
}