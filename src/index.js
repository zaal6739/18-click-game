import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import NavBar from './components/navbar';
import Cover from './components/cover';
import Container from './components/container';
import Footer from './components/footer';

const characters = ['image1.png', 'image2.PNG', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9', 'image10', 'image11', 'image12',];

const colors = ['yellow', 'purple', 'magenta', 'indigo', 'red','blue', 'light-blue', 'neon-green', 'teal', 'green', 'light-green', 'fuschia',];

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			info: 'Begin By Clicking an Image Card',
			score: 0,
			topScore: 0,
			characters: characters,
			selectedCharacters: []
		};
	};

	shuffleCharacters() {
		this.setState({ characters: _.shuffle(characters) });
	};

	topScoreUpdater(currentScore, currentTopScore, name) {
		currentScore++;
		_.delay(() => {
			this.setState({ info: 'Choose your next Landmark!' });
		}, 500);
		if (currentScore >= currentTopScore) {
			return this.setState({ score: currentScore, topScore: currentScore, info: `${name} Correct!` });
		};
		return this.setState({ score: currentScore, info: `${name} Correct!` });
	};

	checkForDuplicate(name) {
		if (this.state.selectedCharacters.indexOf(name) === -1) {
			this.state.selectedCharacters.push(name);
			this.topScoreUpdater(this.state.score, this.state.topScore, name);
			if (this.state.selectedCharacters.length === characters.length) {
				this.setState({ selectedCharacters: [] });
			};
		} else {
			_.delay(() => {
				this.setState({ info: 'Try Again!' });
			}, 500);
			this.setState({ score: 0, selectedCharacters: [], info: `${name} Duplicate!` });
		}
		this.shuffleCharacters();
	};

	handleSelectCharacters(name) {
		this.checkForDuplicate(name);
	};

	render() {
		return (
			<div>
				<NavBar
					score={this.state.score}
					topScore={this.state.topScore}
					message={this.state.info}
				/>
				<Cover />
				<div className="row"></div>
				<Container
					colors={colors}
					characters={this.state.characters}
					onImageClick={name => { this.handleSelectCharacters(name) }}
				/>
				<Footer />
			</div>
		);
	};
};

ReactDOM.render(<App />, document.getElementById('root'));