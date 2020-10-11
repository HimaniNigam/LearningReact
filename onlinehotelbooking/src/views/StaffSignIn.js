import React, { Component } from 'react'
function validate(email, password) {
    
    const errors = [];
    
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
    return errors;
  }

 class StaffSignIn extends Component {
     state ={
         email:'',
         password:'',
         errors:[]
     };
      
    handleEmail =(text)=>{
        this.setState({email:text.target.value})
    }
    handlePassword =(text) =>{
        this.setState({password:text.target.value})
    }
    handleSubmit =(email,password)=>{
        const errors = validate(email, password);
        if (errors.length > 0) {
            this.setState({ errors });
            alert (errors);          
          }
          else if(email === "Receptionist@myhotel.com")
          {
            this.props.history.push('/receptionist/');
          }
          else 
          {
              alert("Only Staff can log in from here ,please visit to booking page for login/signup");
          }
        
    }
    render() {
        return (
            <div>
               
    
    <div className="container">
        <div className="row">
            <div className="col-md-8 col-12 mx-auto">
                <div className="card shadow-lg border-0 p-4">
                    <h1 className="text-center bg-dark text-white display-4 d-inline-block">Sign In</h1>
                    
                    <div className="form-group mb-5">
                        <div className="row">
                            <div className="col-md-6 col-12 mx-auto my-2">
                                <input type="email" className="form-control-lg" placeholder="Email Address" required onChange={this.handleEmail}/>
                            </div>
                            
                            <div className="col-md-6 col-12 mx-auto my-2">
                                <input type="password" className="form-control-lg" placeholder="Password" required onChange={this.handlePassword}/>
                    </div>
                        </div>
                    </div>
                    
                    <div className="mt-5 col-md-6 col-12 mx-auto">
                        <button className="btn btn-outline-dark btn-lg btn-block" onClick={()=>this.handleSubmit(this.state.email,this.state.password)}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    
            </div>
        )
    }
}

export default StaffSignIn
