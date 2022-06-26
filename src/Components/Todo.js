import React, {useEffect, useState} from 'react';
import todo from '../todo1.jpg';

//to set the data from ls

const getLocalItems = () => {
    let list = localStorage.getItem('lists')
    // console.log(list)

    if(list){
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return  []
    }
}

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItems());
    const [toggleSubmit, setToggleSubmit] = useState(true)
    const [isEditItem, setIsEditItem] = useState(null)



    const addItem = () => {
        if (!inputData) {
            alert('please fill the data');
        } else if(inputData && !toggleSubmit){
            setItems(
                items.map((item)=>{
                    if(item.id === isEditItem){
                        return {...item, name: inputData}
                    }
                    return item;
                })
            )
            setToggleSubmit(true)
            setInputData('')
            setIsEditItem(null);
            }else {
            const allInputData = {id: new Date().getTime().toString(), name: inputData}
            setItems([...items, allInputData]);
            setInputData('');
        }
    };


    const deteleItem = (index) => {
        // console.log(item.id);
        const updatedItems = items.filter((item) => {
           return index !== item.id;
        });
        setItems(updatedItems);
    }

    const editItem = (id) => {
                let newEditItem = items.find((item) => {
                    return item.id === id
                });
        console.log(newEditItem)
        setToggleSubmit(false)
        setInputData(newEditItem.name)
        setIsEditItem(id);
    }

    const removeAll = () => {
        setItems([]);
    }

    //add data to localstorage
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items]);
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
                        {
                            toggleSubmit ? <p onClick={addItem}>+</p> : <p onClick={addItem}>..edit..</p>
                        }
                    </div>

                    <div>
                        {
                            items.map((item) => {
                                return (

                                    <div key={item.id}>
                                        <h3>{item.name}</h3>
                                        {/* <i className="fa fa-trash-alt add-btn" title='Delete Item'></i> */}
                                        <button onClick={() => editItem(item.id)}>Edit Item</button>
                                        <button onClick={() => deteleItem(item.id)}>Delete Item</button>
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
