import React, { useState } from 'react';
import todo from '../images/todo1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isTemplateSpan } from 'typescript';


const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);


    const addItem = () => {
        if (!inputData) {

        } else {
            setItems([...items, inputData]);
            setInputData('');
        }
    };


    const deteleItem = (id) => {
        console.log(id);
        const updatedItems = items.filter((item, index) => {
           return index !== id;
        });
        setItems(updatedItems);
    }

    const removeAll = () => {
        setItems([]);
    }
    return (
        <>
            <div>
                <div>
                    <figure>
                        <img src={todo} width={50} height={70} alt='todo image' />
                        <figcaption>Add Your List Here</figcaption>
                    </figure>

                    <div>
                        <input type='text' placeholder='@ Add Item'
                            value={inputData} onChange={(e) => setInputData(e.target.value)}

                        />
                        {/* <i className="fa fa-plus add-btn" title='Add Item' onClick={addItem}></i> */}
                        <p onClick={addItem}>+</p>
                    </div>

                    <div>
                        {
                            items.map((item, index) => {
                                return (

                                    <div key={index}>
                                        <h3>{item}</h3>
                                        {/* <i className="fa fa-trash-alt add-btn" title='Delete Item'></i> */}
                                        <button onClick={() => deteleItem(index)}>Delete Item</button>
                                    </div>
                                );

                            })

                        }
                    </div>

                    <div>
                        <button onClick={removeAll}>Remove All</button>
                    </div>



                </div>
            </div>
        </>
    );
};

export default Todo;
