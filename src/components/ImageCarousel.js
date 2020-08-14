import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import group from '../images/video-thumbnails/mr-grinch.jpg';
import ep from '../images/video-thumbnails/attention.jpg';
import onTour from '../images/video-thumbnails/home.jpg';
import cover from '../images/video-thumbnails/when-the-partys-over.jpg';
import grammies from '../images/video-thumbnails/break-my-heart.jpeg';

export default function ImageCarousel() {
  return (
    <CarouselProvider
      naturalSlideWidth={30}
      naturalSlideHeight={15}
      isIntrinsicHeight={true}
      totalSlides={5}
      isPlaying={true}
      interval={5000}
      infinite={true}
    >
      <Slider>
        <Slide index={0}><Image src={ep} hasMasterSpinner={true} /></Slide>
        <Slide index={1}><Image src={group} /></Slide>
        <Slide index={2}><Image src={onTour} /></Slide>
        <Slide index={3}><Image src={cover} /></Slide>
        <Slide index={4}><Image src={grammies} /></Slide>
      </Slider>
    </CarouselProvider>
  );
}