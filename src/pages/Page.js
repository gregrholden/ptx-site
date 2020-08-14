import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// Components:
import Header from '../components/Header';
import Footer from '../components/Footer';
// Pages:
import Home from '../pages/Home';
import Tour from '../pages/Tour';
import Videos from '../pages/Videos';
import Bio from '../pages/Bio';
import Contact from '../pages/Contact';
import PromoPage from '../pages/PromoPage';
import Error from '../pages/Error';

// The Page class creates the baseline structure for the site with React-Router
// providing a Switch component to render different pages based on path.
export default class Page extends Component {
  render() {
    return (
      <div className='page'>
        <Header />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/tour' component={Tour} />
          <Route path='/video' component={Videos} />
          <Route path='/bio' component={Bio} />
          <Route path='/contact' component={Contact} />
          <Route path='/vip' component={PromoPage} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
