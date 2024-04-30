import React, { useState } from 'react'
import style from "./collapsibleTab.module.scss";
import FilterHeader from '../filter-header/FilterHeader';

{/* <div className={[style['container'], containerStyle].join(' ')}>
<div className={[style['header'], headerStyle].join(' ')}> */}


export default function CollapsibleTab(
   {heading, initiallyExpended, children}
) {

   const [isExpended, setIsExpended] = useState(initiallyExpended)

   return (
      <div>
         <FilterHeader 
            title={heading}
            isExpanded={isExpended}
            onAction={() => setIsExpended(!isExpended)}
         />

         {isExpended && children}

      </div>
   )
}