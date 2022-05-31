import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const UseLocation = () => {

  const location = useLocation();
  const navigate = useNavigate(); //useHistory() is replaced by useNavigate(). in react 6 version 
  console.log(location)
  console.log(navigate)
  return (
      <div>
       <h1>Hello {location.pathname.replace('/','')} page</h1>
       {/* <button onClick={location.pathname.replace('/','')}>About Page</button> */}
       {/* <button onClick={() => navigate('/about/reshu')}> */}
       <button onClick={() => navigate(-1)}>

        Go Back</button>
      </div>
  );
};

export default UseLocation;