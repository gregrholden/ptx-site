import React, { Component } from 'react';
import Favicon from 'react-favicon';
import Page from './pages/Page';
import { hot } from 'react-hot-loader';
// Create Font Awesome library:
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, faTicketAlt);

class App extends Component {
  render() {
    return (
      <div>
        <Favicon url={'./images/favicon.ico'} />
        <Page />
      </div>
    );
  }
}

export default hot(module)(App);