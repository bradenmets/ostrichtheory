//Potential re-factor? Building a default page layout with a props array of headers and items?
import React, {Component} from 'react'
import {MusicianBio} from './functional'
export class Bio extends Component{

	render(){
	return( <div className='post-body'>
	<h1 id="biohead">Who is Ostrich Theory?</h1>
	<p>Ostrich Theory is a four piece Alternative Modern Rock band with a sound all their own with influences ranging from Radiohead, to Pink Floyd, to Rush with grooves like Red Hot Chili Peppers and The Police and occasional busts of raw hard rock reminiscent of Queens of the Stone Age.</p>
	<p>Instrumentation:</p>

	<MusicianBio name="Luke Martin" positions={["Vocals","Guitar"]} />
	<MusicianBio name="Robert Achilles" positions={["Keyboards"]} />
	<MusicianBio name="Michael Stewart" positions={["Bass"]}/>
	<MusicianBio name="Jarrett Aitkens" positions={["Drums"]}/>

	<h1>Ostrich Theory Orgins</h1>
	<p><span >Lead vocalist/guitarist Luke Martin was searching for the right guys for some time when he finally met the drummer he was looking for in Jarrett Aitkens. Luke needed a drummer with more than one speed for the grooves that he liked playing with a hard rock edge. After frustration with other drummers, Luke’s long time friend, bassist Kato McKay said, “Call this guy. (Jarrett) He’s a real drummer.” Luke had been playing on and off with bassist Michael Stewart since 2010 when they finally got a hold of Jarrett at the last minute for a show they had already booked at the Boardwalk in Orangevale. That was March 9</span>
	<sup><span >th</span></sup>
	<span > 2012. Since then the guys picked up the young talent, keyboard player Robert Achilles, who added a whole new depth and dimension to their sound. Luke’s voice is original. The lyrics tend toward the dark and abstract with occasional political undertones although much of the songs are like love songs with a bit of a dark twist. Ostrich Theory is a rock band, but with all of the rhythmic influences from funk to jazz, this is no ordinary rock band.</span></p>
	<p><span >In December of 2013, the band released its first music video, Digital, directed by Andrew Bennett.  (directed for Deftones, Nickleback, Perry Farrell, Jonas Brothers and more) In October 2014 Ostrich Theory released its first album, self titled, Ostrich Theory.  The album is receiving radio play in Missouri on top 40 station, Y 107 (106.9) and FM 93.5 rocks the lake.   Shortly after, the band played the theme song, Last Day, for the release of independent film Predatory Lender.  This has also led to an appearance by the band itself in the independent film, Bullets, Blades, and Blood, starring 5 time world kickboxing champion Robert Parham.  The single Pilgrim was also featured in Sacramento film festivals winning film, Shadow over Sacramento.  The band also co wrote and recorded the theme song for a short film, Bunny and Claude, featured at Sacramento&#8217;s Fashion on Film.   Now the band is working on getting its album in front of larger audiences.</span></p>
	</div>
	);

	}
}