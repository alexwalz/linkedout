import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './Login/LoginPage'
import FeedPage from './Feed/FeedPage'
import UserProfile from './Profile/ProfilePage'
import NotFound from './NotFound/NotFound'

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
      
      
      <TransitionGroup component="main" className="page-main" style={{ height: '100%' }}>
        <CSSTransition
          //key={currentKey}
          timeout={timeout}
          classNames="fade"
          appear
        >



          <Router>
              <Switch>
                  <Route path="/" exact component={LoginPage} />
                  <Route path="/feed" exact component={FeedPage} />
                  <Route path="/profile/:id" exact component={UserProfile} />
                  <Route component={NotFound} />
              </Switch>
          </Router>


        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default App;
