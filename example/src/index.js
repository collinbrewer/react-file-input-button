import React from 'react';
import ReactDOM from 'react-dom';
import ReactFileInputButton from '../../src/ReactFileInputButton.js';

class App extends React.Component {
	render () {
		return (
			<div style={{margin: 'auto', maxWidth: '296px', border: '1px solid grey', marginBottom: '24px'}}>
				<ReactFileInputButton>
					<button>pretty file button</button>
				</ReactFileInputButton>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
