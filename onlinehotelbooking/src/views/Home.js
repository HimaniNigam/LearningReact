import React from 'react'
import DefaultHeader from '../components/DefaultHeader';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Service';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <>
        
                           
        <Link to="/staffsignin" className="btn btn-outline-primary">Staff Sign In</Link>          
        <DefaultHeader defaultheader="defaultheader">
            
        </DefaultHeader>
        <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at 3 lakh">
                <Link to="/rooms" className="btn btn-primary">
                      Our Rooms
                </Link>
                
        </Banner>
        
        <Services/> 
        <FeaturedRooms/>
        </>

    )
}
