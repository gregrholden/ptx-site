import React, { Component } from 'react';
import VideoEmbed from '../components/VideoEmbed';
import grinch from '../images/video-thumbnails/mr-grinch.jpg';
import attention from '../images/video-thumbnails/attention.jpg';
import home from '../images/video-thumbnails/home.jpg';
import partysOver from '../images/video-thumbnails/when-the-partys-over.jpg';
import breakMyHeart from '../images/video-thumbnails/break-my-heart.jpeg';
import bLights from '../images/video-thumbnails/blinding-lights.jpeg';
import bohemian from '../images/video-thumbnails/bohemian-rhapsody.jpg';
import cheerleader from '../images/video-thumbnails/cheerleader.png';
import hear from '../images/video-thumbnails/do-you-hear-what-i-hear.png';
import dreams from '../images/video-thumbnails/dreams.jpg';
import god from '../images/video-thumbnails/god-only-knows.jpg';
import hallelujah from '../images/video-thumbnails/hallelujah.png';
import happy from '../images/video-thumbnails/happy.png';
import love from '../images/video-thumbnails/i-need-your-love.png';
import loveAgain from '../images/video-thumbnails/love-again.png';
import shallow from '../images/video-thumbnails/shallow.jpg';
import silence from '../images/video-thumbnails/sound-of-silence.jpg';
import loveTonight from '../images/video-thumbnails/the-love-tonight.jpg';
import daftPunk from '../images/video-thumbnails/daft-punk.jpg';
import perfume from '../images/video-thumbnails/perfume-medley.jpg';

export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.changeVideo = this.changeVideo.bind(this);
    this.state = {
      url: 'https://www.youtube.com/watch?v=oY0RvTVp5i0'
    }
  }

  changeVideo(e) {
    e.preventDefault();
    this.setState({
      url: e.target.dataset.url
    });
  }

  render() {
    return (
      <div className='video-page'>
        <div className='player'>
          <h2>VIDEOS</h2>
          <VideoEmbed url={this.state.url} />
        </div>
        <div className='playlist-container'>
          <h2>PLAYLIST</h2>
          <div className='playlist'>
            <ul>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={dreams} data-url='https://www.youtube.com/watch?v=oY0RvTVp5i0' />
                </a>
                <p>Dreams</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={breakMyHeart} data-url='https://www.youtube.com/watch?v=fn4JZ58oT-Y' />
                </a>
                <p>Break My Heart</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={partysOver} data-url='https://www.youtube.com/watch?v=787f_0bwBWI' />
                </a>
                <p>When the Party's Over</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={bLights} data-url='https://www.youtube.com/watch?v=9imANGpHlP0' />
                </a>
                <p>Blinding Lights</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={home} data-url='https://www.youtube.com/watch?v=9xE9q7iW7Q0' />
                </a>
                <p>Home</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={hear} data-url='https://www.youtube.com/watch?v=7cSq8zlzwdU' />
                </a>
                <p>Do You Hear What I Hear? (feat. Whitney Houston)</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={grinch} data-url='https://www.youtube.com/watch?v=6KdLcd-sUQA' />
                </a>
                <p>You're a Mean One, Mr. Grinch</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={god} data-url='https://www.youtube.com/watch?v=SOaukqq9cIQ' />
                </a>
                <p>God Only Knows</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={loveTonight} data-url='https://www.youtube.com/watch?v=cT1Kzk7akjQ' />
                </a>
                <p>Can You Feel the Love Tonight?</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={shallow} data-url='https://www.youtube.com/watch?v=7NpklKcfI5o' />
                </a>
                <p>Shallow</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={silence} data-url='https://www.youtube.com/watch?v=gdVjVtpr55M' />
                </a>
                <p>The Sound of Silence</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={attention} data-url='https://www.youtube.com/watch?v=m1-rpd3S-48' />
                </a>
                <p>Attention</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={bohemian} data-url='https://www.youtube.com/watch?v=ojRj2JK5oCI' />
                </a>
                <p>Bohemian Rhapsody</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={perfume} data-url='https://www.youtube.com/watch?v=Y95B-dZ32uQ' />
                </a>
                <p>Perfume Medley</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={cheerleader} data-url='https://www.youtube.com/watch?v=P95_pCbCPZw' />
                </a>
                <p>Cheerleader</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={happy} data-url='https://www.youtube.com/watch?v=uJ4diEohODE' />
                </a>
                <p>Happy</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={loveAgain} data-url='https://www.youtube.com/watch?v=F80FsZDTgn0' />
                </a>
                <p>Love Again</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={hallelujah} data-url='https://www.youtube.com/watch?v=LRP8d7hhpoQ' />
                </a>
                <p>Hallelujah</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={love} data-url='https://www.youtube.com/watch?v=u6C2N2t4NXE' />
                </a>
                <p>I Need Your Love</p>
                <hr />
              </li>
              <li>
                <a href='#'
                  onClick={this.changeVideo}>
                  <img src={daftPunk} data-url='https://www.youtube.com/watch?v=3MteSlpxCpo' />
                </a>
                <p>Daft Punk</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}