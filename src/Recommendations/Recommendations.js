import React from 'react'
import Popular from '../Popular/Popular'
export default function Recommendations() {
  return (
    <div>
          <div className="popular">
          <h1 style={{color:"#fff", marginLeft:"25px"}}>
            Popular on Netflix
          </h1>
          <Popular/>
        </div>
        <div className="popular">
          <h1 style={{color:"#fff", marginLeft:"25px"}}>
            Popular on Netflix
          </h1>
          <Popular/>
        </div>
        <div className="popular">
        <h1 style={{color:"#fff", marginLeft:"25px"}}>
          Popular on Netflix
        </h1>
        <Popular/>
      </div>
      
  </div>
  )
}
