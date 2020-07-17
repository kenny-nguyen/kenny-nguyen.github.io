import React from 'react';


const TutorialPage = () => {

    return(
        <div>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/community">Community</a></li>
                <li class="breadcrumb-item active">Tutorials</li>
            </ol>
            <div class="dropdown-divider"></div>
            <div className="home-page-main-body container">
            <h1 id="home-welcome">Welcome to the Tutorial Page</h1>
            <div class="list-group">
            <a href="/community/tutorials/hairstyling" class="list-group-item list-group-item-action green-text">Hair Styling Tutorials</a>
                <a href="/community/tutorials/products" class="list-group-item list-group-item-action green-text">Product Use Tutorials</a>
                <a href="/community/tutorials/tipsandtricks" class="list-group-item list-group-item-action green-text">Tips and Tricks</a>
            </div>
        </div>
        </div>
    )

}

export default TutorialPage;