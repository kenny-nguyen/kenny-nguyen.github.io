import React from 'react';


const CommunityPage = () => {

    return(
        <div>
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active">Community</li>
        </ol>
        <div className="home-page-main-body container">
            <h1 id="home-welcome">Welcome to the Community Page</h1>
            <div class="list-group">
            <a href="/community/tutorials" class="list-group-item list-group-item-action green-text">Tutorials</a>
                <a href="/community/requests" class="list-group-item list-group-item-action green-text">Tutorial Requests</a>
                <a href="/community/discussions" class="list-group-item list-group-item-action green-text">Discussion Board</a>
                <a href="/oopsiepoopsie" class="list-group-item list-group-item-action green-text">Broken Link Example</a>
            </div>
        </div>
    </div>
    )

}

export default CommunityPage;