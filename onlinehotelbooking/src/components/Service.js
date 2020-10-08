import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail , FaShuttleVan,FaBeer, FaBiking} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "Free MockTail",
                info: "Enjoy free mocktails*"
            },
            {
                icon:<FaBiking/>,
                title: "Eco Friendly Tour",
                info: "This tour will emphasize the conservation and marine wildlife "
            },
            {
                icon:<FaShuttleVan/>,
                title: "Free Shuttle",
                info: "Free Airport Hotel Transfer"
            },
            {
                icon:<FaBeer/>,
                title: "Unlimited Beer",
                info: "Enjoy our special Beer"
            },

        ]
    }
    render() {
        return (
            <div className="container-fluid services">
             <Title title="Services" />
                <div className="row">
                   {this.state.services.map((item, index) => {
                      return(
                        <div className="col-md-4 col-lg-3 col-12 mx-auto my-3" key={index}>
                            <div className="card shadow-lg border-0 p-4">
                                <article className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>              
                           </div>
                        </div>
                      )
                   })}
                </div>
            </div>
        )
    }
}