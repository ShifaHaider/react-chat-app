import React, { Component } from 'react';
import Main from './components/main/main'
import Chat from './components/chating/chating'
import {Router, Route, Switch, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import firebase from 'firebase'
import firestore from 'firebase/firestore'
    var config = {
    apiKey: "AIzaSyD3wt0efi35IV2HEMnkNoDXHXxgubU8jxE",
    authDomain: "react-chat-app-a5c6d.firebaseapp.com",
    databaseURL: "https://react-chat-app-a5c6d.firebaseio.com",
    projectId: "react-chat-app-a5c6d",
    storageBucket: "react-chat-app-a5c6d.appspot.com",
    messagingSenderId: "735665733511"
};
firebase.initializeApp(config);

const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <div>
          <Router history={history}>
              <div>
                  <Switch>
                      <Route exact path={'/'} component={Main}/>
                      <Route exact path={'/main'} component={Main}/>
                      <Route exact path={'/chat/:id'} component={Chat}/>
                  </Switch>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
