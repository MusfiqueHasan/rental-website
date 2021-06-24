import React from 'react'
import signup from '../components/image/signup.svg'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
            <div className=" marchent d-flex justify-content-center align-items-center">
                <div className="container marchentCon d-flex justify-content-center  shadow ">
                    

                    <div className="secondSection w-50 px-5 mt-5 " >
                        <form action="">
                            <h1 className="font-weight-bold text-center"> <span className="text-danger">Sign</span>Up</h1>
                            <div className="form-row">
                                <input type="text" className="form-control my-3 p-2" placeholder="Username" />
                            </div>
                            <div className="form-row">
                                <input type="email" className="form-control my-3 p-2" placeholder="E-mail" />
                            </div>
                            <div className="form-row">
                                <input type="password" className="form-control my-3 p-2" placeholder="Password" />
                            </div>
                            <div className="form-row">
                                <Link to="/marchent" className="btn btn-danger btn-lg btn-block my-3 p-2">SignUp</Link>
                            </div>
                            <p className="mt-2">If you have an account? <Link to="/marchent">Login</Link></p>

                        </form>
                    </div>
                    <div className="firstSection w-50 h-75 mt-5 ">
                        <img src={signup} className=" w-75 h-75 " alt="" srcset="" />
                        <h1 className="text-center mt-3">Hi....</h1>
                        <div className="text-center">
                            <p >It is nice to see you again,, Signup to rent your service...</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SignUp