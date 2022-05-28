import React, { useState } from 'react'

const Spred_ope = () => {
    const [myObject, setMyObject] = useState({
        myName: "reshu", age: 23, degree: "B.Tech"
    });

    const changeObject = () => {
        // setMyObject({myName: 'reshu singh', age: 24, degree: "B.Tech & diploma"})
         setMyObject({...myObject, myName: 'reshu singh'})

    }

  return (
    <div>
        <h1>Name: {myObject.myName}& age: {myObject.age} & degree {myObject.degree}</h1>
        <button type='submit' onClick={changeObject}>Update</button>
    </div>
  )
}

export default Spred_ope
