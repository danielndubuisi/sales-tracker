import React from 'react'

 export const statusList = [
  {
    value: 'all',
    text: 'All',
    id: Math.random()*10000
  },
  {
    value: 'ACTIVE',
    text: 'Active',
    id: Math.random()*10000
  },
  {
    value: 'active',
    text: 'Bullwhip',
    id: Math.random()*10000
  },
  {
    value: 'Dormant',
    text: 'Dormant',
    id: Math.random()*10000
  },
  {
    value: 'Inactive',
    text: 'Inactive',
    id: Math.random()*10000
  },
  {
    value: 'Lead',
    text: 'Leads',
    id: Math.random()*10000
  },

]

export const typeList = [
  {
    value: 'all',
    text: 'All',
    id: Math.random()*10000
  },
  {
    value: 'Pharmacy',
    text: 'Pharmacies',
    id: Math.random()*10000
  },
  {
    value: 'Hospital',
    text: 'Hospitals',
    id: Math.random()*10000
  },
  {
    value: 'PPMV',
    text: 'PPMVs',
    id: Math.random()*10000
  },
  {
    value: 'Uncategorized',
    text: 'Uncategorized',
    id: Math.random()*10000
  },
  
]

const FilterBox = () => {
  return (
    <div>Filterbox</div>
  )
}

export default FilterBox

