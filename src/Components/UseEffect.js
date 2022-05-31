import React, { useEffect, useState } from 'react';
import useTitleCount from "./UseTitleCount";




const UseEffect = () => {

    const [count, setCount] = useState(0);
    //custom hooks
  useTitleCount(count)
    // useEffect(() => {
    //     console.log("hello i am first useeffect");
    //     if(count >= 1){
    //     document.title = `Chats(${count})`
    //     } else{
    //         document.title = "Chats"
    //     }
    // }, [count]);


    useEffect(() => {
        console.log("i am second useEffect");
    }, [count]);

    console.log("hello outside");

    return (
        <div>
            <h1>{count}</h1>
            <button type='submit' onClick={() => setCount(count + 1)
            }>Click</button>
        </div>
    );
};

export default UseEffect;


// useEffect not use conditonally but use conditionally inside of useEffect and this is used like: call API

// useEffect use dependency based
