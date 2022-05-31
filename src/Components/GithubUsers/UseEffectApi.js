import React, { useState, useEffect } from 'react';
import Loading from "./Loading";
import GithubUser from "./GithubUser";

const UseEffectApi = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try{
      setLoading(false)
      const response = await fetch('https://api.github.com/users');
      // const data = await response.json()
      setUsers(await response.json());
      // console.log(data);
    } catch (error) {
      console.log("error is"+ error)
    }
  };

  useEffect(() => {
    getUsers();
    // console.log("api call");
  }, []);

  if(loading) {
    return <Loading/>
  }

  return (
   <GithubUser users={users}/>
  );
};

export default UseEffectApi;
