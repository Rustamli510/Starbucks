import React, { useContext } from 'react'
import './scss/Bucket.css'
import DataContext from './Context/DataContext'

function Bucket() {
  const {data}=useContext(DataContext)
  console.log(data);
  return (
    <div>Bucket</div>
  )
}

export default Bucket