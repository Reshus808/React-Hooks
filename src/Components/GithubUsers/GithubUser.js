import React from 'react';
import styles from "./api.module.scss";
import { FcOk } from "react-icons/fc";

const GithubUser = ({users}) => {
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
                      <div>{login} <FcOk/> </div>
                      <div>{type}</div>
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

export default GithubUser;