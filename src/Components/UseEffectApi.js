import React, { useState, useEffect } from 'react';
import styles from "./styles/api.module.scss";
import {Link} from "react-router-dom";

const UseEffectApi = () => {

  const [users, setUsers] = useState([]);


  const getUsers = async () => {
    const response = await fetch('https://api.github.com/users');
    // const data = await response.json()
    setUsers(await response.json());
    // console.log(data);
  };

  useEffect(() => {
    getUsers();
    // console.log("api call");
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.part_1}>
        <h2>List of github user</h2>
      </div>
      <div className={styles.part_2}>
        {
          users.map((user) => {

            const { id, login, avatar_url, url, type} = user;
            return (
              <div className={styles.cont_1} key={id} >
                  <div className={styles.div_1}>
                    <h1>{id}.</h1>
                  </div>
                  <div className={styles.div_2}>
                    <img src={avatar_url} height={140} width={140} alt='images'/>
                  </div>
                  <div className={styles.div_3}>
                    <div className={styles.div1}>{login}</div>
                    <div className={styles.div2}>{type}</div>
                    <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                  </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default UseEffectApi;
