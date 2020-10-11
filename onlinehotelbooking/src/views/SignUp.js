import React, { Component } from 'react'
function validate(firstName,lastName,phoneNo, email, password,confirmPassword) {
    
    const errors = [];
    if (firstName.length === 0) {
        errors.push("First Name should not be blank");
      }
      if (lastName.length === 0) {
        errors.push("Last Name should not be blank");
      }
      if (phoneNo.length  < 10 && phoneNo.length > 10) {
        errors.push("Phone number should be 10 digit");
      }
    if (email.length < 5) {
      errors.push("Email should be at least 5 charcters long");
    }
    if (email.split("").filter(x => x === "@").length !== 1) {
      errors.push("Email should contain a @");
    }
    if (email.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot");
    }
  
    if (password.length < 6) {
      errors.push("Password should be at least 6 characters long");
    }  
    if (confirmPassword !== password) {
        errors.push("Confirm Password should be same as Password");
      }  
    return errors;
  }

 class SignUp extends Component {
    state ={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        phoneNo:'',
        errors:[]
    };
    handleFirstName = (text)=>{
        this.setState({firstName:text.target.value})
    }
    handleLastName = (text)=>{
        this.setState({lastName:text.target.value})
    }
    handleEmail =(text)=>{
        this.setState({email:text.target.value})
    }
    handlePassword =(text) =>{
        this.setState({password:text.target.value})
    }
    handleConfirmPassword =(text)=>{
        this.setState({confirmPassword:text.target.value})
    }
    handlePhone =(text) =>{
        this.setState({phoneNo:text.target.value})
    }
    handleSubmit =(firstName,lastName,phoneNo, email, password,confirmPassword)=>{
        const errors = validate(firstName,lastName,phoneNo, email, password,confirmPassword);
        if (errors.length > 0) {
            this.setState({ errors });
          //  return;
          alert (errors);
          
          }
        else {
        alert ("Welcome" );
        this.props.history.push('/confirmBooking/');
          }
    }
    render() {
        return (
            <div className="container">
    <div className="row">
        <div className="col-md-8 col-12 mx-auto">
            <div className="card shadow-lg border-0 p-4">
                <h1 className="text-center bg-dark text-white display-4 d-inline-block">Sign Up</h1>
                <div className="form-group my-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="text" className="form-control-lg" placeholder="First Name" required onChange={this.handleFirstName}/>
                        </div>
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="text" className="form-control-lg" placeholder="last Name" required onChange={this.handleLastName}/>
                        </div>
                    </div>
                </div>
                <div className="form-group mb-5">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="email" className="form-control-lg" placeholder="Email Address" required onChange={this.handleEmail}/>
                        </div>
                        <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="tel" className="form-control-lg" placeholder="Phone no." required onChange={this.handlePhone}/>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="row">
                <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="password" className="form-control-lg" placeholder="Password" required onChange={this.handlePassword}/>
                </div>
                <div className="col-md-6 col-12 mx-auto my-2">
                            <input type="password" className="form-control-lg" placeholder=" Confirm Password" required onChange={this.handleConfirmPassword}/>
                </div>
                </div>
                
                <div className="mt-5 col-md-6 col-12 mx-auto">
                    <button className="btn btn-outline-dark btn-lg btn-block" onClick={()=>this.handleSubmit(this.state.firstName,this.state.lastName,this.state.phoneNo, this.state.email,this.state.password,this.state.confirmPassword)}>Join</button>
                </div>
            </div>
        </div>
    </div>
</div>
        )
    }
}

export default SignUp
