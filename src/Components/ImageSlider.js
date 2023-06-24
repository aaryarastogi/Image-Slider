import React, { useState } from 'react'

const ImageSlider = ({slides}) => {
    const[currentIndex , setCurrentIndex]=useState(0);
  return (
    <div>
        <div style={{backgroundImage:`url(${slides[currentIndex].url})`}}></div>
    </div>
  )
}

export default ImageSlider
