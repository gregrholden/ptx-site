import React, { Component } from 'react';

export default class JumboTron extends Component {
  constructor(props) {
    super(props);
    this.generateDivs = this.generateDivs.bind(this);
    this.rainbow = this.rainbow.bind(this);
    this.state = {
      divs: null,
    }
  }

  componentDidMount() {
    // Set element dimensions.
    let width = document.getElementById('jumbotron').offsetWidth;
    let height = document.getElementById('jumbotron').offsetHeight;
    let count = Math.ceil((width * height / 2500));
    let jumbotron = document.getElementById('jumbotron');
    this.generateDivs(count);
  }

  generateDivs(count) {
    // Generate 50px square divs inside jumbotron.
    let divs = [];
    for (let i = 0; i < count; i++) {
      let div = <div key={i} onMouseEnter={this.rainbow} className='' />
      divs.push(div);
    }
    this.setState({
      divs: divs
    });
  }

  // Each div appended to jumbotron has an event listener that is watching
  // for the CSS class 'animated' to trigger the rainbow animation.
  // This class also needs to be removed after the animation ends.
  rainbow(e) {
    // To keep the synthetic event from closing.
    // Ref: https://reactjs.org/docs/events.html
    e.persist();
    e.target.className = 'animated';
    setTimeout(function() {
      e.target.className = ''
    }, 1000);
  }

  render() {
    return (
      <div className='container__jumbotron'>
        <div id='jumbotron'>
          {this.state.divs}
          <h1>PENTATONIX</h1>
        </div>
      </div>
    );
  }
}