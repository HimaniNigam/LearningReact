import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import About from './views/About';
import Home from './views/Home';
import Contact from './views/Contact';
import Rooms from './views/Rooms';
import SingleRoom from './views/SingleRoom';
import Booknow from './views/BookNow';
import Footer from './components/Footer';
import Offers from './views/Offers';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import ConfirmBooking from './views/ConfirmBooking';
import Receptionist from './views/Receptionist';
import StaffSignIn from './views/StaffSignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
      <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/rooms/" component={Rooms}/>
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/booknow/:slug" component={Booknow} />
          <Route exact path="/offers" component={Offers} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/confirmBooking" component={ConfirmBooking} />
          <Route exact path="/receptionist" component={Receptionist} />
          <Route exact path="/staffsignin" component={StaffSignIn} />
          <Route component={Error}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
