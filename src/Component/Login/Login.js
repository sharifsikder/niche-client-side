import React from 'react';
import './Login.css'

import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuht from '../../hooks/useAuth';

const Login = () => {

    const {  error, signInEmail, HandelEmail, HandelPassword, googleSingIn} = useAuht()

    const location = useLocation();
    const history = useHistory();

    // const redirect_uri = location.state?.from || "/serviceDetails";

    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleLogin = () => {
        googleSingIn()
            .then(result => {
                // history.push(redirect_uri);
                history.replace(from)
            })
           
    }

    const HandelPasswordLogin = (e) => {
        e.preventDefault();
        signInEmail()
            .then(result => {
                history.replace(from);
                
            })
           
    }

    return (
        <div className="login-form">
            <div className="login-box d-flex align-items-center justify-content-center">
                <div className="login">
                    <div className="login-box">
                       <h1 className="text-white">Please Login</h1>
                        <form onSubmit={HandelPasswordLogin} >
                            <input
                                onBlur={HandelEmail}
                                className="input-felid"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                            />
                            <br />
                            <input
                                onBlur={HandelPassword}
                                className="input-felid"
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                            />
                            <p className='text-center text-danger'>{error}</p>
                            <input

                                className="mt-3 w-50 btn btn-danger m-auto"
                                type="submit"
                                value="Login"
                            />
                        </form>

                    </div>
                    
                    <p className="mt-3 text-white">---OR---</p>

                    <button onClick={handleGoogleLogin} className="me-2 mb-3 btn btn-success" >
                        Login with Google <i class="fab fa-google"></i>
                    </button>

                    <Link to="/register" className='new-user text-white'>
                        <p>Create An Account</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login