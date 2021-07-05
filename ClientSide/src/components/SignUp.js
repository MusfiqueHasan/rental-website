import React, { useState } from 'react';
import signup from '../components/image/signup.svg';
import { Link, useHistory } from 'react-router-dom';

const SignUp = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "", email: "", password: "", cpassword: ""
    });
    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });

    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword
            })

        });
        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert(`Invalid Registration`);
            console.log(`Invalid Registration`);

        }else {
            window.alert(`Registration Successful`)
            console.log(`Registration Successful`);
            history.push("/login")
        }
    }

    return (
        <div>
            <div className=" marchent d-flex justify-content-center align-items-center">
                <div className="container marchentCon d-flex justify-content-center  shadow ">


                    <div className="secondSection w-50 px-5 mt-5 " >
                        <form method="POST">
                            <h1 className="font-weight-bold text-center"> <span className="text-danger">Sign</span>Up</h1>
                            <div className="form-row">
                                <input type="text" name="name" className="form-control my-3 p-2"
                                    value={user.name}
                                    onChange={handleInputs}
                                    placeholder="Username" />
                            </div>
                            <div className="form-row">
                                <input type="email" name="email" className="form-control my-3 p-2"
                                    value={user.email}
                                    onChange={handleInputs}
                                    placeholder="E-mail" />
                            </div>
                            <div className="form-row">
                                <input type="password" name="password" className="form-control my-3 p-2"
                                    value={user.password}
                                    onChange={handleInputs}
                                    placeholder="Password" />
                            </div>
                            <div className="form-row">
                                <input type="password" name="cpassword" className="form-control my-3 p-2"
                                    value={user.cpassword}
                                    onChange={handleInputs}

                                    placeholder="Cpassword" />
                            </div>
                            <div className="form-row">
                                <Link to="/marchent" onClick={PostData} className="btn btn-danger btn-lg btn-block my-3 p-2 ">SignUp</Link>
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

export default SignUp;
