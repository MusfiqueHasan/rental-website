import React from 'react'
import { Link } from 'react-router-dom'
import * as ReactBootstrap from 'react-bootstrap'

const Navbar = () => {

    return (

        <ReactBootstrap.Navbar collapseOnSelect expand="lg" className="main-nav"  >

            <div className="container">
                <Link to="/" className="navbar-brand ">
                    <h1> <span>R</span>ental</h1>
                </Link>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className=" allNavbar ml-auto d-flex flex-row align-items-center justify-content-center">
                        <Link className="btn  btn2 " to="/help">Help</Link>

                        <ReactBootstrap.NavDropdown className="btn " title=" Log in" id="collasible-nav-dropdown">
                            <Link to="/signin" className="btn ">

                                User Login
                            </Link>
                            <ReactBootstrap.NavDropdown.Divider />
                            <Link to="/signin" className="btn" >
                                Marchent Login
                            </Link>

                        </ReactBootstrap.NavDropdown>
                        <Link to="/marchentuser" className="btn btn2 " >
                            Sign up
                        </Link>
                        <ReactBootstrap.NavDropdown className="btn  " title=" Rental Devison " id="collasible-nav-dropdown">
                            <Link to="/" className="btn ">

                                Dhaka
                            </Link>
                            <ReactBootstrap.NavDropdown.Divider />
                            <Link to="/chittagong" className="btn" >
                                Chittagong
                            </Link>
                            <ReactBootstrap.NavDropdown.Divider />
                            <Link to="/" className="btn" >
                                Rajshahi
                            </Link>
                            <ReactBootstrap.NavDropdown.Divider />
                            <Link to="/" className="btn" >
                                Sylhet
                            </Link>
                            <ReactBootstrap.NavDropdown.Divider />
                            <Link to="/" className="btn" >
                                Khulna
                            </Link>
                            <ReactBootstrap.NavDropdown.Divider />
                            <Link to="/" className="btn" >
                                Barishal
                            </Link>
                            <ReactBootstrap.NavDropdown.Divider />
                            <Link to="/" className="btn" >
                                Mymensingh
                            </Link>

                            <ReactBootstrap.NavDropdown.Divider />
                            <Link to="/" className="btn" >
                                Rangpur
                            </Link>

                        </ReactBootstrap.NavDropdown>
                    </ReactBootstrap.Nav>



                </ReactBootstrap.Navbar.Collapse>
            </div>

        </ReactBootstrap.Navbar>




    )
}

export default Navbar
