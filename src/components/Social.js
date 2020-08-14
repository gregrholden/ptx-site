import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Social() {
  return (
    <div className='social-icons'>
      <a href='https://www.facebook.com/Pentatonix' target="_blank"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
      <a href='https://twitter.com/PTXofficial' target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
      <a href='https://www.youtube.com/channel/UCmv1CLT6ZcFdTJMHxaR9XeA' target="_blank"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
      <a href='https://open.spotify.com/artist/26AHtbjWKiwYzsoGoUZq53' target="_blank"><FontAwesomeIcon icon={['fab', 'spotify']} /></a>
      <a href='https://itunes.apple.com/us/artist/pentatonix/id466047278' target="_blank"><FontAwesomeIcon icon={['fab', 'itunes-note']} /></a>
      <a href='https://www.snapchat.com/add/ptxsnap' target="_blank"><FontAwesomeIcon icon={['fab', 'snapchat']} /></a>
      <a href='https://www.instagram.com/PTXofficial' target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
      <a href='https://www.patreon.com/pentatonix' target="_blank"><FontAwesomeIcon icon={['fab', 'patreon']} /></a>
    </div>
  );
}