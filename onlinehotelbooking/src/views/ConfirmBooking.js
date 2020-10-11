import React, { Component } from 'react'
import { Link } from 'react-router-dom';
 class ConfirmBooking extends Component {
    render() {
        return (
                       


            <div className="container my-5">
                <div className="row">
                <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
                <div>
                        <h1 className="display-4">Confirm Booking</h1>
                </div>
                            <div className="col-md-6 col-12 float-right">
                                <button className="btn btn-block btn-outline-primary" data-toggle="modal" data-target="#thanks">Confirm Booking</button>
                            </div>
                </div>
                </div>
            <div className="modal fade" id="thanks">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body p-4">
                        <h3>Thank you </h3>
                        <p className="lead">Your room is booked successfully....</p>
                    </div>
                    <div className="modal-footer">
                        <Link to="/" className="btn btn-dark">Goto Home</Link>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default ConfirmBooking
