import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { CharacterList } from '../components';
// import actions
import { getCharacters, getNextCharacters } from '../actions';

class CharacterListView extends React.Component {
	constructor() {
		super();
	}
	componentDidMount() {
		// call our action
		this.props.getCharacters();
	}

	render() {
		console.log('PROPS From CLV', this.props);
		if (this.props.isFetching) {
			return <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />;
			// return something here to indicate that you are fetching data
		}
		return (
			<div className="CharactersList_wrapper">
				<CharacterList characters={this.props.characters} />
				<button onClick={this.props.getCharacters}>Show Previous</button>
				<button onClick={this.props.getNextCharacters}>Show Next</button>
			</div>
		);
	}
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = (state) => {
	console.log(state);
	return {
		characters: state.charsReducer.characters,
		isFetching: state.charsReducer.isFetching
	};
};

export default connect(mapStateToProps, {
	/* action creators go here */
	getCharacters,
	getNextCharacters
})(CharacterListView);
