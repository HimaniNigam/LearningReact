import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';



function App() {
  const ulstyle = {
    margin: "0",
    padding: "0",
    overflow: "hidden",
    backgroundColor: "#5597b4",
    listStyleType:"none",
    width:'100%'
    
  }
  const navlinkstyle ={
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration:"none"
  }

 
  return (
    <Router>
      <div className="App">
      ​<nav class="navbar navbar-default ">
         <div class="container-fluid">
    <ul className="" style={ulstyle}>
    <li style={{float:"left"}} className="active">
         <NavLink to = '/' exact activeStyle={
           {backgroundColor:'#e35885'}} style={navlinkstyle}>HOME</NavLink>
         </li>
         <li  style={{float:"left"}}>
         <NavLink to = '/projects' exact activeStyle={
           {backgroundColor:'#e35885'}} style={navlinkstyle}>PROJECTS</NavLink> 
         </li>
         <li  style={{float:"left"}}>
         <NavLink to = '/services' exact activeStyle={
           {backgroundColor:'#e35885'}} style={navlinkstyle}>SERVICES</NavLink>
         </li>
         <li  style={{float:"left"}}>
         <NavLink to = '/contact' exact activeStyle={
           {backgroundColor:'#e35885'}} style={navlinkstyle}>CONTACT</NavLink>
         </li>
    </ul>
  </div>
</nav>
        <Route path='/' exact strict render={
          () => {
            return (<h1>You chose HOME</h1>)
          }
        }/>
        <Route path='/projects' exact strict render={
          () => {
            return (<h1>You chose PROJECTS</h1>)
          }
        }/>

         <Route path='/services' exact strict render={
          () => {
            return (<h1>You chose SERVICES</h1>)
          }
        }/>
        <Route path='/contact' exact strict render={
          () => {
            return (<h1>You chose CONTACT</h1>)
          }
        }/>
       
      </div>
      
    </Router>     
    
  );
}

export default App;
