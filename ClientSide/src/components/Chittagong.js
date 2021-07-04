import React,{useState} from 'react'
import Card from './Card';
import Map from '../components/image/map1.jpg'



const Chittagong = () => {

    const [input, setInput] = useState([]);
    const [myInput, setMyInput] = useState([]);
    const openNewWindow = event => {

        event.preventDefault();
        if (myInput !== null) {
            setInput(myInput);

        }

    }

    return (
        <>
                   
                   <h1 className="card-title">Welcome to Chittagong</h1>

            <form action="" className="d-flex justify-content-lg-center align-items-center flex-row w-100 mt-3 "
                onSubmit={openNewWindow}
            >

                <div className="form-row">
                    <input type="text" className="form-control mx-3 p-2" placeholder="Search Service..."

                        onChange={event => setMyInput(event.target.value)}
                    />
                </div>
                <div className="form-row">
                    <input type="submit" value="Search" className="btn btn1 btn-lg btn-block mx-3 px-5" />
                </div>


            </form>

            <section className="main-card">
            <div className="card-block">
                    
                    {Card.filter(product => product.name.includes(input)).map((item) => {
                        const { image, name, price, description } = item;
                        return (
        
                            <div className="card-sec">
                                <div className="card">
                                    <div className="imag-sec">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="descrip">
                                        <h3>{name}</h3>
                                        <h4>price:{price}/-</h4>
                                        <p>{description}</p>
                                        <a href="#">Booking</a>
                                    </div>
        
                                </div>
                            </div>
        
        
                        )
                    })}
                        </div>
                <div className="card-block2">
                <img src={Map} alt="" />
                </div>
            </section>
                


        </>

    )

}

export default Chittagong;
