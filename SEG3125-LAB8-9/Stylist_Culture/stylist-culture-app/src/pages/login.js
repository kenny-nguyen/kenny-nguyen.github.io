import React from 'react';


const LoginPage = () => {

    return(
        <div className="signup-form container">
                    <h1>Welcome Back!</h1>
                        <h5 className="text-muted">Login to your account: </h5>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                        </div>
                        <div className="row">
                            <div className="col center-vert">
                                <h6>Don't have an account yet? We'd love for you to join us. <a href="/signup">Sign-up</a> today!</h6>
                            </div>
                            <div className="col">
                                <button className="signup-btn"><a href="signup/personalize">Next Page</a></button><br></br>
                            </div>
                        </div>
                    </form>
                </div>
    )

}

export default LoginPage;