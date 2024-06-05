import React from 'react'
import style from './ButtonContainer.module.css';

export default function ButtonContainer({handleonClick,handleMode,mode,handleEqualTo,handlePi,handleNaturalLog,handleFactorial}) { 
    return (
    <div className={style.result}>
            <div className={style.rows}>
                <button className={style.button} style={{color:mode==='grey'?'black':'white'}} onClick={handleMode}>Mode</button>
                <button className={style.button} style={{color:mode==='grey'?'black':'white'}}  onClick={handleonClick} value={"("}>(</button>
                <button className={style.button} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick} value={")"}>)</button>
                <button className={style.button} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick} value={""}>C</button>
                <button className={style.button} id={style.button3} onClick={handleonClick} value={"back"}>⌫</button>
            </div>
            <div className={style.rows}>
                <button className={style.button} value={3.14159265359} style={{color:mode==='grey'?'black':'white'}} onClick={handlePi}>π</button>
                <button className={style.button} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick} value={7}>7</button>
                <button className={style.button} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick} value={8}>8</button>
                <button className={style.button} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick} value={9}>9</button>
                <button className={style.button} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick} value={"/"}>÷</button>
            </div>
            <div className={style.rows}>
                <button className={style.button} style={{color:mode==='grey'?'black':'white'}} onClick={handleNaturalLog} value={2.71828}>e</button>
                <button className={style.button} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick} value={4}>4</button>
                <button className={style.button} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick} value={5}>5</button>
                <button className={style.button} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick} value={6}>6</button>
                <button className={style.button} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick} value={"*"}>x</button>
            </div>
            <div className={style.rows}>
                <button className={style.button} value={"!"} style={{color:mode==='grey'?'black':'white'}} onClick={handleFactorial}>x!</button>
                <button className={style.button} value={1} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick}>1</button>
                <button className={style.button} value={2} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick}>2</button>
                <button className={style.button} value={3} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick}>3</button>
                <button className={style.button} value={"-"} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick}>-</button>
            </div>
            <div className={style.rows}>
                <button className={style.button} value={"."} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick}>.</button>
                <button className={style.button} value={0} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick}>0</button>
                <button className={style.button} style={{color:mode==='grey'?'black':'white'}} id={style.button1} onClick={handleEqualTo}>=</button>
                <button className={style.button} value={"+"} style={{color:mode==='grey'?'black':'white'}} onClick={handleonClick}>+</button>
            </div>
        </div>
  )
}
