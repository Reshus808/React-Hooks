import React, {useContext} from 'react';
import {BioData} from "./Compo1";

const Compo3 = () => {
  const name = useContext(BioData)
  return (
      <div>
        <h1>hello compo3 {name} </h1>
      </div>
  );
};

export default Compo3;