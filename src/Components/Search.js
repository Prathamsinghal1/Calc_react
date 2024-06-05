import React from 'react';
import styles from "./Search.module.css";

export default function Search({calVal,mode}) {

  return (
      <div className={`${styles.input}`}>
          <p className={styles.screen} style={{color:mode==='grey'?'black':'white'}}>{calVal===""?"0":calVal}</p>
      </div>
  )
}
