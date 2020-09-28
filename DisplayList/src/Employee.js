import React from 'react'

function Employees() {
    const employees =[
    {name:'Charlie',job:'Janitor'},
    {name:'Mac',job:'Bouncer'},
    {name:'Dee',job:'Aspiring Actress'},
    {name:'Dennis',job:'Bartender'}];
   
    return (

        <div >
            <table >
        <thead>
            <th style={{border:"3px solid"}}>Name</th>
            <th style={{border:"3px solid"}}>Job</th>
        </thead>
        <tbody >

                    {employees.map((data) => (
                <tr> 
                <td style={{border:"3px solid"}}>{data.name}</td>
                <td style={{border:"3px solid"}} >{data.job}</td>
                
                </tr>
            ))}
        </tbody>
            </table>
        </div>


      
    )
}

export default Employees
