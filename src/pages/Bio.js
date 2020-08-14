import React from 'react';
import group from '../images/ptx-group.jpg';

export default function Bio() {
  return (
    <div className='bio-page'>
      <img src={group} aria-hidden='true' />
      <div className='bio-page__body'>
        <h2>BIO</h2>
          <p>
            Three-time Grammy® Award-winning and multi-platinum-selling artist
            Pentatonix (presently comprised of Scott Hoying, Mitch Grassi, Kirstin
            Maldonado, Kevin Olusola, and Matt Sallee) formed in 2011 during NBC’s
            The Sing Off. Shortly after winning NBC's a cappella singing competition
            the band separated from their record label and subsequently turned to
            YouTube to promote their debut independent releases. The Pentatonix
            YouTube channel currently boasts 18 million subscribers and has yielded
            more than 4.5 billion video views, including "Hallelujah" (500 million
            views), "Daft Punk" (325 million views), and "Mary, Did You Know?"
            (230 million views).
          </p>
          <p>
            Now signed to RCA Records, Pentatonix has sold more than 10 million
            albums worldwide, which includes two #1 albums on Billboard’s Top 200
            Chart - 2015’s gold-certified self-titled album and the 2x platinum
            That’s Christmas To Me.  All ten Pentatonix releases have reached the
            top 10 on the Billboard Charts and the group has received multiple RIAA
            certifications for multi-platinum, platinum and gold-selling albums and
            singles. They have also received a Daytime Emmy nomination, starred in
            three holiday specials for NBC and appeared in the feature film Pitch
            Perfect 2. Pentatonix most recently released a compilation of their
            biggest holiday songs, The Best of Pentatonix Christmas, which included
            their multi-platinum singles "Hallelujah" and "Mary, Did You Know?" and
            collaborations with Kelly Clarkson, Maren Morris, Jennifer Hudson, Tori
            Kelly, Jazmine Sullivan and a duet featuring Whitney Houston.
          </p>
          <p>
            In addition to their Christmastime collaborators, Pentatonix has also
            performed with Stevie Wonder, Smokey Robinson, Miley Cyrus, the
            Backstreet Boys, Jason Derulo, Reba McEntire, Jennifer Nettles, The
            John Williams Orchestra, Lindsey Stirling, the Los Angeles Philharmonic,
            and, most notably, Dolly Parton, whose "Jolene" collaboration earned
            Pentatonix and Dolly a Grammy for Best Country Duo/Group Performance in
            2017.
          </p>
          <p>
            Pentatonix is currently in the middle of their World Tour, which began
            in 2019 with a 44-city North American run.  The tour includes stops in
            South America, Mexico, Japan, Asia, Australia and Europe and will be
            returning to the US this summer. Additional dates are yet to be
            announced.
          </p>
          <p>
            Pentatonix will be releasing new music throughout 2020.
          </p>
      </div>
    </div>
  );
}