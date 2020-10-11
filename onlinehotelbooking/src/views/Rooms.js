import React from 'react'
import DefaultHeader from '../components/DefaultHeader'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';
const Rooms = () => {
    return (
    <div>
        <DefaultHeader defaultheader="roomsHero">
        </DefaultHeader>
        <Banner title="Available Rooms" subtitle="Best in Class Room">
                <Link to="/" className="btn btn-warning">
                      RETURN HOME
                </Link>
        </Banner>
        <RoomsContainer/>
    </div>
    )
}

export default Rooms
