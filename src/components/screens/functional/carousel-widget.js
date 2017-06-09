import React from 'react'
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;
export const CarouselWidget=() =>{ 
return(
	<Carousel showThumbs={false} >
		<div>
                <img src={require('../../../assets/images/armyslider.jpg')} />                    
        		<p className="legend">Click to sign up now!</p>
        </div>
        <div>
                <img src={require('../../../assets/images/albumslider.jpg')} />                  
        </div>
        <div>
                <img src={require('../../../assets/images/photosslider.png')} />           
        </div>
       	<div>
                <img src={require('../../../assets/images/videoslider.png')} />
                    
        </div>
	</Carousel>
	);
}