import React, {Component} from 'react';

class SignupPage extends Component{

    render(){
        return(
                <div className="signup-form container">
                    <h1>Sign Up</h1>
                        <h5 className="text-muted">Please fill out the form below to create an account!</h5>
                    <div className="signup-process">
                        <ol className="signup">
                            <li className="inline-display">1. Sign up <i class="fa fa-circle-o" aria-hidden="true"></i></li>
                            <li className="inline-display">2. Personalize <i class="fa fa-circle-o" aria-hidden="true"></i></li>
                            <li className="inline-display">3. Review <i class="fa fa-circle-o" aria-hidden="true"></i></li>
                        </ol>
                    </div>
                    <form>
                        <div className="name-form">
                            <div class="form-group">
                                <label class="col-form-label" for="inputDefault">First Name</label>
                                <input type="text" class="form-control" placeholder="Enter First Name" id="inputDefault" required/>
                            </div>
                            <div class="form-group">
                                <label class="col-form-label" for="inputDefault">Last Name</label>
                                <input type="text" class="form-control" placeholder="Enter Last Name" id="inputDefault" required/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-form-label" for="inputDefault">Username</label>
                            <input type="text" class="form-control" placeholder="Enter Username" id="inputDefault" required/>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                            <label for="exampleInputPassword1">Confirm Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                        </div>
                        <div className="row">
                            <div className="col center-vert">
                                <h6>Already a member? <a href="/login">Login</a> instead</h6>
                            </div>
                            <div className="col">
                                <button className="signup-btn"><a href="signup/personalize">Next Page</a></button><br></br>
                            </div>
                        </div>
                    </form>
                </div>
        );
    }
}

export default SignupPage;