import React, { useEffect, useState } from 'react';
import useTitleCount from "./UseTitleCount";

const Test = () => {

  const [count, setCount] = useState(0);
  //custom hooks
  useTitleCount(count)

  console.log("hello outside");
  return (
      <div>
        <h1>{count}</h1>
        <button type='submit' onClick={() => setCount(count + 1)
        }>Click Test</button>
      </div>
  );
};

export default Test;


// useEffect not use conditonally but use conditionally inside of useEffect and this is used like: call API

// useEffect use dependency based
