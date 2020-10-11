import React, { Component } from 'react'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css"

 class Receptionist extends Component {
    handleSubmit =()=>{
         this.props.history.push('/');
          }
    
    render() {
        const data = [{  
            name: 'Ayaan',  
            startDate: "11/10/2020",
            endDate:"15/10/2020",
            noOfDays: 4,
            noOfAdults:2,
            noOfKids: 0,
            roomType:'Deluxe'  ,
            roomNo : 101
            },{  
             name: 'Ahana',  
             startDate: "11/10/2020",
            endDate:"16/10/2020",
            noOfDays: 5,
            noOfAdults:2,
            noOfKids: 1,
            roomType:'Super Deluxe'  ,
            roomNo : 102
             },{  
             name: 'Peter',  
             startDate: "11/10/2020",
            endDate:"16/10/2020",
            noOfDays: 5,
            noOfAdults:2,
            noOfKids: 1,
            roomType:'Super Deluxe'  ,
            roomNo : 103
             },{  
             name: 'Virat',  
             startDate: "11/10/2020",
            endDate:"16/10/2020",
            noOfDays: 5,
            noOfAdults:2,
            noOfKids: 2,
            roomType:'Presidential room'  ,
            roomNo : 501
             },{  
             name: 'Rohit',  
             startDate: "11/10/2020",
            endDate:"16/10/2020",
            noOfDays: 5,
            noOfAdults:2,
            noOfKids: 1,
            roomType:'Premium Deluxe'  ,
            roomNo : 201
             },{  
             name: 'Dhoni',  
             startDate: "11/10/2020",
            endDate:"16/10/2020",
            noOfDays: 5,
            noOfAdults:2,
            noOfKids: 1,
            roomType:'Super Deluxe'  ,
            roomNo : 202
             }] 

             const columns = [{  
                Header: 'Name',  
                accessor: 'name'  
                },
                {  
                Header: 'Start Date',  
                accessor: 'startDate'  
                },
                {  
                    Header: 'End Date',  
                    accessor: 'endDate'  
                },
                {  
                    Header: 'Duration(No.Of Days)',  
                    accessor: 'noOfDays'  
                },
                {  
                    Header: 'No. Of Adults',  
                    accessor: 'noOfAdults'  
                },
                {  
                    Header: 'No. Of Kids',  
                    accessor: 'noOfKids'  
                },
                {  
                    Header: 'Room Type',  
                    accessor: 'roomType'  
                },
                {  
                    Header: 'Room No.',  
                    accessor: 'roomNo'  
                }]  
        return (
            <div>
                 <button className="btn btn-outline-dark btn-lg" onClick={()=>this.handleSubmit()}>Home</button>
                <ReactTable  
                  data={data}  
                  columns={columns}  
                  defaultPageSize = {2}  
                  pageSizeOptions = {[2,4, 6]}  
              /> 
            </div>
        )
    }
}

export default Receptionist
