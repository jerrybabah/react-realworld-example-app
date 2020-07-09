import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import Article from './page/Article';

export default function App() {
  return (
    <Router>
      <Header />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          {/* slug 전달 */}
          <Route path='/article/<:slug>'>
            <Article />
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}
