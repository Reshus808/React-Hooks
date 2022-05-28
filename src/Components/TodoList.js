import React, {useState} from 'react'
import styles from "./styles/spred.module.scss"


const TodoList = () => {

    const tables = [
        {id: 1, name: "reshu", age: 23},
        {id: 2, name: "reshu", age: 23},
        {id: 3, name: "reshu", age: 23},
        {id: 4, name: "reshu", age: 23},
    
    ]
    console.table(tables);
    const [button, setButton] = useState(tables);
    
    
    const clearArray = () => {
        setButton([]);
    }

    const removeElem = (id) => {
        // alert(id)
        const myNewArray = button.filter((table) => {
            return table.id  !== id;

    })
    setButton(myNewArray);
}
  return (
      
    <div>
        {
        button.map((table) => {
          return (
          <h1 key={table.id}>name: {table.name} age: {table.age}
          <button type='submit' onClick= { () => removeElem(table.id)}>Remove</button>
          </h1>

          );
        })
        }
        <button type='submit' onClick={clearArray}>Clear</button>

    
    </div>
  )
}

export default TodoList
