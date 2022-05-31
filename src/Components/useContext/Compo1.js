import React, {createContext, useContext} from 'react';
import Compo2 from "./Compo2";


const BioData = createContext();
const Compo1 = () => {
  return (
      // <Compo2 name = {"useContext use"} />
      <BioData.Provider value={"useContext use"}>
        <Compo2/>
      </BioData.Provider>
  )
};

export default Compo1;
export {BioData}


// use provider in useContext no need of other component props pass