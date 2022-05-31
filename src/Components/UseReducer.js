import React, {useReducer, useState} from 'react';

const initialState = 0;
const reducer = (state, action)  => {
  console.log(state, action);
  if(action.type === 'Increment'){
    return state + 1;
  }
  if(action.type === 'Decrement'){
    return state - 1;
  }
  return state;
}
const UseReducer = () => {
  // const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
      <div>
        {/*<p>{count}</p>*/}
        {/*<div>*/}
        {/*  <button onClick={() => setCount(count+1)}>Increment</button>*/}
        {/*  <button onClick={() => setCount(count-1)}>Decrement</button>*/}
        {/*</div>*/}
        <p>{state}</p>
        <div>
          <button onClick={() => dispatch({type: "Increment"})}>Increment</button>
          <button onClick={() => dispatch({type: "Decrement"})}>Decrement</button>
        </div>
      </div>
  );
};

export default UseReducer;