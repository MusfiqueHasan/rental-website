import React from 'react'
import Card from './Card';
// import './styles/App.css'


const Chittagong = () => {


    return (
        <>
         { Card.map((item) => {
       const {image, name, price,description }= item;
          return(
            
           <div className="card-sec">
           <div className="card">
                <div className="imag-sec">
                    <img src={image} alt="" />
                </div>
                <div className="descrip">
                    <h3>{name}</h3>
                    <h4>price:{price}/-</h4>
                    <p>{description}</p>
                    <a href="#">view</a>
                </div>
                
            </div>
           </div>
            
           
          )
        })} 
        </>
       
    )
   
}

export default Chittagong;
