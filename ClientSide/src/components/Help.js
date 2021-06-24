import React from 'react'
import First from '../components/image/home.svg'
import Second from '../components/image/home1.svg'

const Help = () => {
    return (
        <>
        <section className="mainSection section1">

        <div className=" sub-container shadow ">
            <div className="image">

            </div>
            <div className="adminInfo">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti cumque beatae adipisci dolorem maiores laudantium. Voluptatibus ut eos, soluta recusandae voluptates alias, nostrum, eligendi cum repudiandae voluptas quia maxime vitae.</p>
            </div>
        </div>

        </section>
        <section className="section2">
               <div className="sub-container2">
               <h1 className="text-center">Simply the perfect rental marketplace</h1>
               </div>
               <div className=" sub-container3">
                   <div className="first">
                       <img src={First} alt="" srcset=""/>
                       <h5 className="mt-4">Your rental, your way</h5>
                       <p className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis necessitatibus eveniet provident doloribus maiores fugit.</p>
                   </div>
                   <div className="first">
                       <img src={First} alt="" srcset=""/>
                       <h5 className="mt-4">Your rental, your way</h5>
                       <p className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis necessitatibus eveniet provident doloribus maiores fugit.</p>
                   </div>
                   <div className="first">
                       <img src={First} alt="" srcset=""/>
                       <h5 className="mt-4">Your rental, your way</h5>
                       <p className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis necessitatibus eveniet provident doloribus maiores fugit.</p>
                   </div>
               </div>
                    

        </section>
        <section className="section3">
            <div className="sub-section3">
            <h1>How this works</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, neque.</p>
            </div>
           
           
           
        </section>
        <section className="section4">
            <div className="sub-section4">
                <div className="image1">
                    <img src={Second} alt="" srcset=""/>
                </div>
            </div>
            <div className="section-sub4">
                <div className="third">
                    <h5 className=" "><span>1</span>Set up your property</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nesciunt voluptatum,Lorem ipsum dolor sit amet. </p>
                </div>
                <div className="third">
                    <h5 className=" mt-5"><span>2</span>Start earning</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nesciunt voluptatum,Lorem ipsum dolor sit amet. </p>
                </div>
                <div className="third">
                    <h5 className="mt-5 "><span>3</span>Get the perfect match</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nesciunt voluptatum,Lorem ipsum dolor sit amet. </p>
                </div>
            </div>
        </section>
            
        </>
    )
}

export default Help
