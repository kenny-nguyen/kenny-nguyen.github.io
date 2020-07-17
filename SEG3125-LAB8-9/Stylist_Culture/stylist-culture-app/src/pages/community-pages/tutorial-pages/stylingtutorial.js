import React from 'react';


const StylingTutorialPage = () => {

    return(
        <div>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/community">Community</a></li>
                <li class="breadcrumb-item"><a href="/community/tutorials">Tutorials</a></li>
                <li class="breadcrumb-item active">Hair Styling Tutorials</li>
            </ol>
            <div class="dropdown-divider"></div>
            <div className="home-page-main-body container">
                <h1 id="home-welcome">Welcome to the Hair Styling Tutorial Page</h1>
                <h5 className="text-muted">Check out the tutorials below: </h5>
            <div class="list-group">
                <a href="./hairstyling/tutorialexample" class="list-group-item list-group-item-action green-text">1. [Video] Fake a Blowout Using a Hair Straightener</a>
            </div>
        </div>
        </div>
    )

}

export default StylingTutorialPage;