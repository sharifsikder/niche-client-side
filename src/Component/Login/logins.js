
import React from 'react';
import { Link } from 'react-router-dom';

import './Register.css'

import useAuht from '../../hooks/useAuth';

const Register = () => {
    const { handelName, error, signUpEmail, HandelPassword, HandelEmail , googleSingIn} = useAuht()
    return (
        <div className='register'>
            <div className="login-box d-flex align-items-center justify-content-center">
                <div className="login">
                   
                      <h1 className="text-white">Please Registation</h1> 
                        <form className="mb-3" >
                            <input
                                onBlur={handelName}
                                className="input-felid"
                                type="text"
                                name="text"
                                placeholder="Enter your Name"
                                required
                            />
                            <br />
                            <input
                                onBlur={HandelEmail}
                                className="input-felid"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                                required
                            />
                            <br />

                            <input
                                onBlur={HandelPassword}
                                className="input-felid"
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                                required
                            />
                            <p className='text-center text-danger'>{error}</p>
                            <input
                                onClick={signUpEmail}
                                className="mt-3 w-50 btn btn-warning m-auto"
                                type="submit"
                                value="Sign Up Now"
                            />
                        </form>
                        <p className="mt-3 text-white">---OR---</p>
                        <button onClick={googleSingIn} className="me-2 mb-3 btn btn-success" >
                        Sign Up with Google <i class="fab fa-google"></i>
                        </button>
                        <Link  to="/login" className='text-white' >
                            <p >Already Have An Account</p>
                        </Link>
                    </div>
                </div>
          
        </div>
    );
};

export default Register;