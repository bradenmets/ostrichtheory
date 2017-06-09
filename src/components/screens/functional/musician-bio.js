import React from 'react'

export const  MusicianBio=(props) =>{ 
	return(<p> {props.name} | {props.positions.join('/')} </p>);
}
/*  MusicianBio.propTypes = {
    name: React.PropTypes.string.isRequired,
 	positions: React.PropTypes.array.isRequired
  }
*/