import './App.css';
import slides from './Components/data';
import ImageSlider from './Components/ImageSlider';
import ImgSlider from './Components/ImgSlider';

function App() {
  const styles={
    border:"5px solid rgb(255, 99, 26)",
    borderRadius:"10px",
    width:"60rem",
    margin: "0 auto",
    justifyContent:"center",
    marginTop:"25rem",
    marginBottom:"5rem",
    marginLeft:"35%",
    marginRight:"35%",
    boxSizing:"content-box"
  }
  const containerStyle={
    display:"flex-row",
    width: "auto",
    height: "auto",
    margin: "0 auto",
    paddingLeft:"3.5rem",
    justifyContent:"center"
  }
  return (
    <div className="App">
      <div style={styles} >
      <div style={containerStyle} >
        <ImgSlider slides={slides}/>
      </div>
      </div>
   </div>
  );
}

export default App;
