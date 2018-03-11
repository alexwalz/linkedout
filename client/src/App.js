import React, { Component } from 'react';
import Nav from "./Feed/Components/Nav";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './Login/LoginPage'
import FeedPage from './Feed/FeedPage'
import UserProfile from './Profile/ProfilePage'
import NotFound from './NotFound/NotFound'
import ClassifiedsPage from './Classifieds/ClassifiedsPage'
import './css/index.css'
import './App.css'
import background from "./img/midnight.jpg";



const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};

class App extends Component {
  render() {
    const timeout = { enter: 900, exit: 900 };
    return (
      
      <div style={{
        background: `url(${background}) no-repeat center center fixed`,
        webkitBackgroundSize: "cover",
        mozBackgroundSize: "cover",
        oBackgroundSize: "cover",
        backgroundSize: "cover",
        backgroundSize: "cover",
      }}
      >
      <TransitionGroup component="main" className="page-main" style={{ height: '100%' }}>
        <CSSTransition
          //key={currentKey}
          timeout={timeout}
          classNames="fade"
          appear
        >



          <Router>
            <div>
              <Route path="/home" component={Nav} />
              <Switch>
                  <Route path="/" exact component={LoginPage} />
                  <Route path="/home/feed" exact component={FeedPage} />
                  <Route path="/home/profile/:id" exact component={UserProfile} />
                  <Route path="/home/classifieds" exact component={ClassifiedsPage} />
                  <Route component={NotFound} />
              </Switch>
            </div>
          </Router>


        </CSSTransition>
      </TransitionGroup>
      </div>
    );
  }
}

export default App;
