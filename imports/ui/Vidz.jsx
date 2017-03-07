import React, { Component, PropTypes } from 'react';

import { Dildos } from '../api/vidz.js';
import { Meteor } from 'meteor/meteor';

export default class Vidz extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		var hotJosyVidz = "https://www.youtube.com/embed/" + this.props.vidz.linkz;
		this.state = {
			linkz : hotJosyVidz,
		}
	}

	DOOM() {
		Meteor.call('pedr0.remove', this.props.vidz._id);
	}

	render() {
		return (
			<div className="col-md-4">
				<iframe width="360" height="202" src={this.state.linkz} frameborder="0" allowfullscreen></iframe>
				<span className="text">{this.props.vidz.createdBy} DAMON l'a mise en ligne !</span>
				{ this.props.username ?
					<button className="btn btn-danger pull-right" type="button" onClick={this.DOOM.bind(this)}>DOOM</button> : ''
				}
			</div>
		);
	}
}

Vidz.propTypes = {
	vidz : PropTypes.object.isRequired,
};