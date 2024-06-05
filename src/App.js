import React, { useState } from 'react'
import Search from './Components/Search'
import ButtonContainer from './Components/ButtonContainer'
import style from './Components/App.module.css'


export default function App() {

  let [calVal, setCalVal] = useState("");
  let [mode, setMode] = useState("grey");

  
  const handleEqualTo = () => {
    try {
      if (/^[0-9+\-*/().\s]+$/.test(calVal)) {
        const result = eval(calVal);
        setCalVal(String(result));
      } else {
        alert("Invalid characters in the expression");
      }
    } catch (error) {
      alert(`Error: ${error.message}`)
    }

  }
  const handlePi = (event) => {
    if(calVal[calVal.length-1]==='+' || calVal[calVal.length-1]==='-' || calVal[calVal.length-1]==='*' || calVal[calVal.length-1]==='/'){
      setCalVal(String(eval(calVal+event.target.value)));
    }
    else
    setCalVal(String(eval(event.target.value+"*"+calVal)));
  }
  const handleNaturalLog = (event) => {
    if(calVal[calVal.length-1]==='+' || calVal[calVal.length-1]==='-' || calVal[calVal.length-1]==='*' || calVal[calVal.length-1]==='/'){
      setCalVal(String(eval(calVal+event.target.value)));
    }
    else
    setCalVal(String(eval(event.target.value+"*"+calVal)));
  }
  const handleFactorial = (event) => {
    if(calVal=='0'){
      setCalVal("1")
    }
    else{
      var decimal = 0;
      for(let i=0;i<calVal.length;i++){
        if(calVal[i]<'0' && calVal[i]>'9'){
          decimal = 1;
          break
        }
      }
      if(decimal===1)
      alert("Check Number")
      else{
        var value = Number(calVal)
        for(let i=2;i<Number(calVal);i++){
          console.log(eval(i+"*"+calVal));
          value = value * i;
        }
        setCalVal(String(value));
      }
    }
  }

  const handleOnClick = (event) => {
    if(event.target.value==="back"){
      setCalVal(calVal.slice(0,calVal.length-1));
    }
    else if(event.target.value){
      setCalVal(calVal+event.target.value);
    }
    else
    setCalVal("");
  }

    const handleMode = () => {
        if(mode==="grey")
          setMode("#cbced1")
        else
          setMode("grey")
        
        document.body.style.backgroundColor=mode;
        console.log(mode)
    }


  return (
    <div className={`${style.calculator}`}>
      <Search calVal={calVal} mode={mode}/>
      <ButtonContainer handleonClick={handleOnClick} handleMode={handleMode} mode={mode} handleEqualTo={handleEqualTo} handlePi={handlePi} handleNaturalLog={handleNaturalLog} handleFactorial={handleFactorial}/>
    </div>
  )
}
