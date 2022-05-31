import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const diffToast = () => {
        // alert('login successfully');
        // toast('Login Successfull!') // normal message
        toast.success('Login Successfull!', {
            position: "bottom-left"

        });
        toast.error('Login UnSuccessfull!', {
            position: "top-right"

        });
        toast.dark('Login Successfull!', {
            position: "top-left"

        });
        toast.warn('Login Successfull!', {
            position: "bottom-right"

        });
    };
    return (
        <>
            <div>
                <h2>Welcome to sign in page</h2>
                <button onClick={diffToast}>Login</button>

            </div>
            <ToastContainer />
        </>
    );
};

export default Login;
