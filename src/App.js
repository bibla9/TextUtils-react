import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  // const [color, setColor] = useState("red")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  // const toggleColors =() =>{
  //   if(color === "green"){
  //     setColor("green")
  //     document.body.style.backgroundColor="green";
  //   }
  //   else if(color === "red") {
  //     setColor("red")
  //     document.body.style.backgroundColor="red";
  //   }
  //   else{
  //     setColor("yellow")
  //     document.body.style.backgroundColor="yellow"
  //   }
    

  // } 
  const toggleMode = () =>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor="#000e20";
      document.body.style.color="white";
      showAlert("The darkMode has been enabled", "success")
      document.title = "TextUtils - DarkMode"
      // setInterval(() => {
      //   document.title = "TextUtils is amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // }, 1500);
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("The light mode has been enabled", "success")
      document.title = "TextUtils - LightMode"
    }
  }
  return (
    <>
      {/* the below are the props */}
      {/* <Navbar/> */}
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} showAlert={showAlert} aboutText="About Us"/>
              {/* <Navbar title="TextUtils"
              aboutText="About Us"/>  */}
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes> */}
            {/* <Route exact path="/about" element  ={<About title="About Us"/>}/> */}
              
            {/* <Route exact path="/" element={}/>
             */}
             <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert}/>
      {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

