import React from 'react';
import ReactPlayer from 'react-player/lazy';

export default function VideoEmbed(props) {
  return (
    <ReactPlayer
      url={props.url}
      className="container__video"
      width={1280}
      height={720}
      controls={true}
    />
  )
}