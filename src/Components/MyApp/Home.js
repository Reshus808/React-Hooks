import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UseLocation from "./UseLocation";
import About from "./About";
import NavBar from "./NavBar";
import Login from '../Notification/Login';

const Home = () => {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<UseLocation />} />
          <Route path="/uselocation" element={<UseLocation />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/reshu" element={<About />} />
            <Route path="login" element={<Login />} />
            {/*<Route path="*" element={<NoPage />} />*/}
        </Routes>
      </BrowserRouter>
  );
};

export default Home;