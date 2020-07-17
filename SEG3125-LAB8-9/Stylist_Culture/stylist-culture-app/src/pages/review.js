import React, {Component} from 'react';

class ReviewPage extends Component{

    render(){
        return(
            <div className="signup-form container">
                <h1>Account Review</h1>
                    <h5 className="text-muted">We want to know the real you. Did we get the right information?</h5>
                <div className="signup-process">
                    <ol className="signup">
                        <li className="inline-display">1. Sign up <i class="fa fa-check-circle-o" aria-hidden="true"></i></li>
                        <li className="inline-display">2. Personalize <i class="fa fa-check-circle-o" aria-hidden="true"></i></li>
                        <li className="inline-display">3. Review <i class="fa fa-circle-o" aria-hidden="true"></i></li>
                    </ol>
                </div>
                <form>
                    <div class="card border-light mb-3">
                        <div class="card-header"><strong>First Name:</strong></div>
                        <div class="card-body">
                            <p class="card-text">Kenny</p>
                        </div>
                    </div>
                    <div class="card border-light mb-3">
                        <div class="card-header"><strong>Last Name:</strong></div>
                        <div class="card-body">
                            <p class="card-text">Nguyen</p>
                        </div>
                    </div>
                    <div class="card border-light mb-3">
                        <div class="card-header"><strong>Username:</strong></div>
                        <div class="card-body">
                            <p class="card-text">knguy040</p>
                        </div>
                    </div>
                    <div class="card border-light mb-3">
                        <div class="card-header"><strong>Email:</strong></div>
                        <div class="card-body">
                            <p class="card-text">knguy040@uottawa.ca</p>
                        </div>
                    </div>
                    <div class="card border-light mb-3">
                        <div class="card-header"><strong>Bio:</strong></div>
                        <div class="card-body">
                            <p class="card-text">student</p>
                        </div>
                    </div>                
                    <div className="row">
                        <div className="col">
                            <button className="previous-btn"><a href="/signup/personalize">Previous Page</a></button>
                        </div>
                        <div className="col">
                            <button className="signup-btn"><a href="/account">Create Account</a></button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ReviewPage;