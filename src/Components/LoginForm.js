import React, { useState } from 'react';

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);


    // const data = {email: email, password: password}
    // console.log(data);

    const submitForm = (e) => {
        e.preventDefault();

        if (email) {
            if (password) {
                const newEntry = { id: new Date().getTime().toString(), email: email, password: password };
                setAllEntry([...allEntry, newEntry]);
                console.log(newEntry);
                setEmail("");
                setPassword("");
            } else {
                alert("plz fill passwors");
            }
        } else {
            alert("plz fill the data");
        }
    };


    return (
        <>
            <form action='' onSubmit={submitForm}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' id='email' value={email}
                        onChange={(e) => setEmail(e.target.value)} autoComplete='off' />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' id='password' value={password}
                        onChange={(e) => setPassword(e.target.value)} autoComplete='off' />
                </div>
                <button type='submit'>Login</button>
            </form>

            <div>
                {
                    allEntry.map((curElem) => {
                        const { id, email, password } = curElem;
                        return (
                            <div key={id}>
                                <button><p>{email}</p>
                                    <p>{password}</p></button>
                            </div>
                        );

                    })
                }
            </div>

        </>
    );
};

export default LoginForm;
