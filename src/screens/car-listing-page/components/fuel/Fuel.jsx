import React from 'react'
import SelectableTag from '../selectable-tag/SelectableTag'
import FilterHeader from '../filter-header/FilterHeader'

export default function Fuel() {
  return (
    <>

      <SelectableTag placeholder={"Petrol"} count={"45"} checkbox />
      <SelectableTag placeholder={"Petrol"} count={"45"} checkbox />
      <SelectableTag placeholder={"Petrol"} count={"45"} checkbox />
      <SelectableTag placeholder={"Petrol"} count={"45"} checkbox />
    </>
  )
}
