import React from 'react'
import login from '../components/image/userLogin.svg'
import { Link } from 'react-router-dom'

const User = () => {
    return (
        <div>
            <div className=" marchent d-flex justify-content-center  ">
                <div className="container marchentCon d-flex justify-content-center align-items-center  shadow ">
                    <div className="firstSection w-50 h-75 ml-5  ">
                        <img src={login} className=" w-75 h-75 " alt="" srcset="" />
                        <h1 className="text-center mt-3">Welcome</h1>
                        <div className="text-center">
                            <p >It is nice to see you,, Login to continue your acount.</p>
                        </div>
                    </div>


                    <div className="secondSection w-50 px-5  " >
                        <form method="POST">
                            <h1 className="font-weight-bold text-center"> <span className="text-danger">User</span> Pannel</h1>
                            <div className="form-row">
                                <input type="email" className="form-control my-3 p-2" placeholder="E-mail" />
                            </div>
                            <div className="form-row">
                                <input type="password" className="form-control my-3 p-2" placeholder="Password" />
                            </div>
                            <div className="form-row">
                                <Link to="/marchentaccount" className="btn btn-danger btn-lg btn-block my-3 p-2"> Login</Link>
                            </div>
                            <p className="mt-2">Don't have an account? <Link to="/marchentuser">Register here</Link></p>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default User
