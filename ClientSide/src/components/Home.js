import React, { useState } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import { InputGroup } from "react-bootstrap";

const Home = () => {
    const [input, setInput] = useState(null);
    const [myInput, setMyInput] = useState(null);
    const [showSearch, setShowSearch] = useState(false)


    const products = [
        {
            name: 'Mobile',
            price: 240,
        },
        {
            name: 'TShirt',
            price: 40
        },
        {
            name: 'Juelarry',
            price: 2490
        },
        {
            name: 'Gaming Tools',
            price: 24780
        },
        {
            name: 'Laptop',
            price: 7760
        },
        {
            name: 'FoodProduct',
            price: 240
        },
        {
            name: 'Motorcycle'
            , price: 345430
        },

    ];

    const openNewWindow = event => {

        event.preventDefault();
        if (myInput !== null) {
            setInput(myInput);
            setShowSearch(true)

        }

    }
    return (
        <>
            {!showSearch && (

                <div className="home">
                    <div className=" container w-50 h-100 d-flex justify-content-center align-items-center flex-column">
                        <h1 className=" text-light">Best Rental Service</h1>
                        <form action="" className="d-flex justify-content-lg-center align-items-center flex-row w-100 mt-3 "
                            onSubmit={openNewWindow}
                        >
                            <div>
                                <ReactBootstrap.InputGroup className="mr-2">
                                    <ReactBootstrap.DropdownButton

                                        as={InputGroup.Prepend}
                                        title="Rent type"
                                        id="input-group-dropdown-1"
                                    >
                                        <ReactBootstrap.Dropdown.Item href="#">Bachelor</ReactBootstrap.Dropdown.Item>
                                        <ReactBootstrap.Dropdown.Item href="#">Family</ReactBootstrap.Dropdown.Item>


                                    </ReactBootstrap.DropdownButton>

                                </ReactBootstrap.InputGroup>
                            </div>
                            <div className="form-row">
                                <input type="text" className="form-control mx-3 p-2" placeholder="Search Service..."

                                    onChange={event => setMyInput(event.target.value)}
                                />
                            </div>
                            <div className="form-row">
                                <input type="submit" value="Search" className="btn btn1 btn-lg btn-block mx-3 px-5" />
                            </div>


                        </form>
                    </div>
                </div>
            )
            }
            <div className="cardContainer">
                {showSearch && (<h1 className="searchedText text-center mt-5 ">Searched Rent</h1>)}

                {
                    products.filter(product => product.name.includes(input)).map(item =>

                        <div className=" d-flex justify-content-center align-items-center flex-row  ">
                            <div class="card text-center shadow " >
                                <div class="card-body">
                                    <h5 class="card-title">Name: {item.name}</h5>
                                    <p class="card-text">Price: {item.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Home
