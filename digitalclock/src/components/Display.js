import React from 'react';
import DateTime from './DateTime'
import './Display.css';

const Display = (props) => (
    <div className="container-fluid">
        <div className="d-flex flex-row">
            <div className="col-md-4 mx-auto">
                <div className="display">
                    <div className="display-time">{DateTime.toTimeString(props.date)}</div>
                    { <div className="display-date">{DateTime.toDateString(props.date)}</div> }
                </div>
            </div>
        </div>
    </div>
);

Display.defaultProps = {
    date: new Date()
};


export default Display;