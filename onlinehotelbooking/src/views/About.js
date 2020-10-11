import React from 'react'

function About() {
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-12 my-auto">
                <img src={require('../images/about.svg')} alt="about us" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 my-auto">
                <h1 className="display-4 text-center my-5">About Us </h1>
                <p className="lead text-justify text-center">Le Méridien Bora Bora connects you with the islands of French Polynesia. Take in the silhouette of Mount Otemanu from the hotel beach. Find a nearby turtle sanctuary and ecological center, offering a firsthand look at the rehabilitation process. Dive the coast for glimpses of exotic marine life or enjoy an island tour by jeep. Return to the hotel for fresh seafood inspired by international flavors, where savory cuisine and signature cocktails complement the tropical backdrop. Energize at the wellness center and fitness center before you arrive at your overwater bungalow or private beach villa. The bungalows feature glass-bottom floors with exhilarating views of the lagoon while the luxury villas expand your living space. Delight in private terraces, pools and beachside hammocks that sway with a soft breeze. All hotel accommodations are air-conditioned, serviced with 24-hour in-room dining and decorated in true South Pacific style. Experience the sensorial at Le Méridien Bora </p>
                
            </div>
        </div>       
        
    </div>
    )
}
export default About;