/*<Home>
<photo-link image=ostrichText.jpg />
<h1>Home</h1>
<reverb-widget />
</Home>*/

import React, {Component} from 'react'
import {ReverbWidget, CarouselWidget} from './functional'
export class Home extends Component{
	render() {return(
		<div className='post-body'>
		<CarouselWidget />
		<ReverbWidget />
		</div>
		);
	}
}