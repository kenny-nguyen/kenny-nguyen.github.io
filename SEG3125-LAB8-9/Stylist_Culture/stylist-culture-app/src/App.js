import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';

//Pages
import HomePage from './pages/home';
import NewsPage from './pages/news';
import AnnouncementPage from './pages/announcement';
import CommunityPage from './pages/community';
import SignupPage from './pages/signup';
import PersonalizePage from './pages/personalize';
import ReviewPage from './pages/review';
import AccountPage from './pages/account';
import LoginPage from './pages/login';
import ErrorPage from './pages/error';
import TutorialPage from './pages/community-pages/tutorials';
import TutorialRequestPage from './pages/community-pages/tutorial-requests';
import DiscussionPage from './pages/community-pages/discussion';
import StylingTutorialPage from './pages/community-pages/tutorial-pages/stylingtutorial';
import ProductTutorialPage from './pages/community-pages/tutorial-pages/productstutorial';
import TipsTutorialPage from './pages/community-pages/tutorial-pages/tipstutorial';
import TutorialExamplePage from './pages/community-pages/tutorial-pages/tutorialexample';
import NaviBar from './pages/navi-bar';
import Footer from './pages/footer';

//css
import './App.css';

//I18N
//Code for I18N inspired by https://www.youtube.com/watch?v=cHqxgLhOl5Y


function App() {
 
    return (
        <Router>
          <div className="todo-app center page-container">
              {/* Top Navigation Bar + Logo */}
              <NaviBar/>
              <div className="content-wrapper container">
                <Switch>
                  <Route exact path="/" component={HomePage}></Route>
                  <Route exact path="/announcements" component={AnnouncementPage}></Route>
                  <Route exact path="/news" component={NewsPage}></Route>
                  <Route exact path="/community" component={CommunityPage}></Route>
                  <Route exact path="/signup" component={SignupPage}></Route>
                  <Route exact path="/signup/personalize" component={PersonalizePage}></Route>
                  <Route exact path="/signup/review" component={ReviewPage}></Route>
                  <Route exact path="/account" component={AccountPage}></Route>
                  <Route exact path="/login" component={LoginPage}></Route>
                  <Route exact path="/community/tutorials" component={TutorialPage}></Route>
                  <Route exact path="/community/requests" component={TutorialRequestPage}></Route>
                  <Route exact path="/community/discussions" component={DiscussionPage}></Route>
                  <Route exact path="/community/tutorials/hairstyling" component={StylingTutorialPage}></Route>
                  <Route exact path="/community/tutorials/products" component={ProductTutorialPage}></Route>
                  <Route exact path="/community/tutorials/tipsandtricks" component={TipsTutorialPage}></Route>
                  <Route exact path="/community/tutorials/hairstyling/tutorialexample" component={TutorialExamplePage}></Route>
                  <Route exact path="/404" component={ErrorPage}></Route>
                  <Redirect to="/404"></Redirect>
                </Switch>
              </div>
              <Footer/>
          </div>
        </Router>
    );
}

export default App;
