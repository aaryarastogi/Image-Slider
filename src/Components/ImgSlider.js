import { useState } from "react";
import {FaArrowUp} from 'react-icons/fa'

// Styling the react component
const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  // right: "-55%",
  left:"78%",
  fontSize: "5rem",
  color: "rgb(255, 99, 0)",
  zIndex: 1,
  cursor: "pointer",
  paddingRight:"5%",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "-18%",
  right:"100%",
  fontSize: "5rem",
  color: "rgb(255, 99, 0)",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  margin:"12%",
  position: "relative",
  height: "100%",
  width:"100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  paddingRight:"30%",
  margin:"auto",
  marginTop:"6.25rem",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "2rem",
  color:"rgb(90, 90, 90)"
};

const IconStyle={
  backgroundColor:"rgb(255, 41, 0)" ,
  width:"4rem", height:"4rem", 
  marginTop: "-28%" , 
  marginLeft:"90%" , 
  borderRadius:"0.625rem" ,
  fontSize:"3rem" , 
  color:"white",
  cursor:"pointer"
}

const paraStyle={
  fontSize:"2rem",
  marginTop:"-1.375rem",
  paddingBottom:"1.375rem",
  color:"white",
  backgroundColor:"rgb(255,99,0)", 
  marginRight:"-1%", 
  marginLeft:"-9.25%",
  borderRadius:"10px",
  padding:"5px",
  border:"5px solid rgb(255,99,0)"
}

const headingStyle={
  marginTop:"63rem" ,
  fontSize:"2rem",
  paddingTop:"1rem",
  paddingBottom:"1rem",
  borderLeft:"2px solid rgb(255,99,0)",
  borderRight:"2px solid rgb(255,99,0)",
  backgroundColor:"white",
  justifyContent:"right",
  marginRight:"-1%", 
  marginLeft:"-8.5%" , 
  alignSelf:"flex-start", 
  textAlign:"justify" , 
  paddingRight:"18%",
  borderRight:"0.3rem solid rgb(255,99,0)",
  borderLeft:"0.3rem solid rgb(255,99,0)"
}

//Main Component

const ImgSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStyles = {
    width:"35rem",
    height: "70rem",
    paddingLeft:"5%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    justifyContent:"center",
    border: "0.5rem solid rgb(255, 99, 26)",
    backgroundImage: `url(${slides[currentIndex].url})`,
    borderBottom:"2rem solid rgb(255,99,0)"
  };
  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>❰</div>
        <div onClick={goToNext} style={rightArrowStyles}>❱</div>
      </div>
      <div style={slideStyles}>
        <div >
        <p style={headingStyle}>A snapshot of club WA group just after inner child session</p> 
        <p style={paraStyle}>Lively minted from January Camp</p>
        </div>
        <div style={IconStyle}><FaArrowUp/></div>
      </div> 
       <div style={dotsContainerStyles} id="1">
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgSlider;