import React, { useState } from 'react'

// const tables = [
//     {id: 1, name: "reshu", age: 23},
//     {id: 2, name: "reshu", age: 23},
//     {id: 3, name: "reshu", age: 23},
//     {id: 4, name: "reshu", age: 23},

// ]
// console.log(tables);


const Array = () => {
    
    const tables = [
        {id: 1, name: "reshu", age: 23},
        {id: 2, name: "reshu", age: 23},
        {id: 3, name: "reshu", age: 23},
        {id: 4, name: "reshu", age: 23},
    
    ]
    console.log(tables);
const [button, setButton] = useState(tables);


const clearArray = () => {
    setButton([]);
}
  return (
    <div>
        {
        button.map((table) => {
          return <h1 key={table.id}>name: {table.name} age: {table.age}</h1>
        })
        }
        {/* {
        button.map((table) => <h1 key={table.id}>name: {table.name} age: {table.age}</h1>)
        } */}

        <button type='submit' onClick={clearArray}>Submit</button>
    </div>
  )
}

export default Array
