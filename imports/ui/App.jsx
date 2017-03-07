import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Dildos } from '../api/vidz.js';

import Vidz from './Vidz.jsx';
import CoffeeCup from './AccountsUIWrapper.jsx';

class App extends Component {
	renderVidz() {
		return this.props.dildos.map((vidz) => (
			<Vidz key={vidz.id} vidz={vidz} username={this.props.currentUser}/>
		));
	}

	handleDatShit(event) {
		event.preventDefault();

		const linkz  = ReactDOM.findDOMNode(this.refs.textInput).value.trim().split('watch?v=')[1];

		Meteor.call('pedr0.insert', linkz);

		ReactDOM.findDOMNode(this.refs.textInput).value = '';
	}

	render() {
		return (
			<div className="container">
				<header>
					<div className="row">
						<div className="col-md-8 col-md-2-offset">
							<h1> Merci Nir et Poopee DOT Space, la V2 </h1>
						</div>
					</div>

					<CoffeeCup />

					{ this.props.currentUser ?
						<form className="new-vidz" onSubmit = {this.handleDatShit.bind(this)} >
							<input
								type="text"
								ref = "textInput"
								placeholder = "Lien de ta vidéo si tu as des ballz !"
							/>
						</form> : ''
					}
				</header>

				<main>
					<div className="row">
						{this.renderVidz()}
					</div>
				</main>
			</div>
		);
	}
}

App.propTypes = {
	dildos : PropTypes.array.isRequired,
};

export default createContainer(() => {
	Meteor.subscribe('pedr0');

	return {
		dildos : Dildos.find({}).fetch(),
		currentUser: Meteor.user(),
	};
},App);