import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const About = () => {

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location)
  console.log(navigate);

  // const confirm = ((e) => {
  //   navigate('/uselocation')
  // })
  return (
      <div>
        <p>hello {location.pathname.replace('/','')} page</p>
        {/* <button onClick={location.pathname.replace('/','')}>Home Page</button> */}
        {
          location.pathname === '/about/reshu' ?
          <p>hii, i am reshu</p> :
          <p>login to see your file</p>
        }
        <button onClick={() => navigate('/uselocation')}>Home Page</button>
      </div>
  );
};

export default About;