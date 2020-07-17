import React from 'react';


const ErrorPage = () => {

    return(
        <div class="jumbotron">
            <h1 class="display-3">Oops!</h1>
            <p class="lead">We can't seem to find the page you're looking for.</p>
            <hr class="my-4"/>
            <p>Here are some pages that might be helpful!</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="/" role="button">Home</a>
                <a class="btn btn-primary btn-lg" href="/community/tutorials" role="button">Tutorials</a>
                <a class="btn btn-primary btn-lg" href="/community/discussions" role="button">Discussion Board</a>
                <a class="btn btn-primary btn-lg" href="/signup" role="button">Sign-up</a>
                <a class="btn btn-primary btn-lg" href="/login" role="button">Login</a>
            </p>
        </div>
    )

}

export default ErrorPage;