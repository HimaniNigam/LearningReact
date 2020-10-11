import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import srDisc from '../images/sr_discount.png';
import corporateDisc from '../images/corporate.png';
import military from '../images/military.png';
function Offers() {
    return (
    <div className="container">
        
        
        <div className="team">
            <h1 className="display-4">Offers</h1>
        </div>
        <div className="row mb-5">
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src={srDisc} className="card-img-top" alt="Discount" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Senior Discount</h5>
                        <div className="card-text text-black-50">If you’re 62 years or older, you can save at least 15% on your room rate at Marriott hotels.<p><a href="http://google.com">Build your trip</a></p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src={corporateDisc} className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Corporate / Promotional Code</h5>
                        <div className="card-text text-black-50">Enter your valid code when making a reservation to take advantage of special rates and promotions.<p><a href="http://google.com">Save with corporate or promo code</a></p>
                        </div>
                        <h6 className="mt-5">CONNECT</h6>
                        <div className="d-flex justify-content-around">
                            <FaFacebookSquare className="connect" />
                            <AiFillInstagram className="connect" />
                            <FaLinkedin className="connect" />
                            <IoLogoYoutube className="connect" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src={military} className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Government & Military</h5>
                        <div className="card-text text-black-50">Qualified government employees and military personnel are eligible for special rates and offers.<p> <a href="http://google.com">Save with government & military special rates</a></p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Offers;