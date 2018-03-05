import React, { Component } from 'react';
import Main from './components/main/main'
import Chat from './components/chating/chating'
import {Router, Route, Switch, Link} from 'react-router-dom'




class App extends Component {
  render() {
    return (
      <div>
          <Router history={history}>
              <div>
                  <Switch>
                      <Route exact path={'/'} component={Main}/>
                      <Route exact path={'/main'} component={Main}/>
                      <Route exact path={'/chat'} component={Chat}/>
                  </Switch>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
