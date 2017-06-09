import React, {Component} from 'react'
import {} from 'path'
export class Music extends Component{
	render() {return(
 		<div>
        <div>
          <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/136832190&auto_play=false&hide_related=false&visual=true" width="100%" height={150} frameBorder="no" scrolling="no" />
          <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/111144336&auto_play=false&hide_related=false&visual=true" width="100%" height={150} frameBorder="no" scrolling="no" />
          <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/111146079&auto_play=false&hide_related=false&visual=true" width="100%" height={150} frameBorder="no" scrolling="no" />
          <a name="spotify">
            <iframe src="https://open.spotify.com/embed/album/4S3xElKFHteMfshJELqwc3" width={300} height={380} frameBorder={0} allowTransparency="true" />
          </a></div>
        <a name="spotify">
        </a></div>
		);
	}
}