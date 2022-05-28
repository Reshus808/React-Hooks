import React, { useEffect, useState } from 'react'
import styles from "./styles/index.module.scss"


const Index = () => {
  const [name, setName] = useState(20);
  
  // useEffect(()=>{
  //   console.log("my age print", name);
  // })

  const age = () => {

    const age =name;
    // if else use
    if(age === 20){
      setName(10);
    }else{
      setName(20);
    }

    // ternary use
    // (age === 20) ? setName(10) : setName(20);

    // setName(name + 1)
  }
 


  console.log("my age is:", name);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
      <h1>This is react-hooks tutorial</h1>
      <p>My age is <span>{name}</span></p>
      <button type='submit' onClick={age}>Submit</button>
    </div>
    </div>
  )
}

export default Index
