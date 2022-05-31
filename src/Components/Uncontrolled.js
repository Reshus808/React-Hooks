import React, {useRef, useState} from 'react';

const Uncontrolled = () => {

  const luckyName = useRef(null)
  const [show, setShow] = useState(false)

  const submit = (e) => {
    e.preventDefault();
    console.log(luckyName.current.value);
    const name = luckyName.current.value;
    name === '' ? alert('plz fill the input') : setShow(true);
  }
  return (
      <div>
       <form action='' onSubmit={submit}>
         <div>
           <label>Enter your LuckyName</label>
           <input type='text' ref={ luckyName }/>
         </div>
         <button type='submit'>Submit</button>
       </form>
        <p>{show ? `Your lucky name is ${luckyName.current.value}`: ""}</p>
      </div>
  );
};

export default Uncontrolled;