import React, {Component} from 'react';

class AccountPage extends Component{

    render(){        
        return(
            <div class="jumbotron">
                <h1 class="display-3">Welcome to Stylist Culture, Kenny!</h1>
                <p class="lead">It is our honor to welcome you to our community. </p>
                <hr class="my-4"/>
                <p>Learn, share, and connect with fellow hair enthusiast</p>
                <p class="lead">
                    <a class="btn btn-primary btn-lg" href="/" role="button">Get Started</a>
                </p>           
            </div>
        );
    }
}

export default AccountPage;