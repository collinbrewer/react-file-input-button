import React from 'react';

const fileInputStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	opacity: 0,
	width: '100%',
	zIndex: -1
};

class ReactFileInputButton extends React.Component {
	render () {
		let {children, ...inputProps} = this.props;

		return (
			<span onClick={this.handleClick}>
				<input ref={(node) => { this.fileInput = node; }} type='file' {...inputProps} style={fileInputStyle} />
				{children}
			</span>
		);
	}

	handleClick = (e) => {
		this.fileInput.click();
	}
}

ReactFileInputButton.propTypes = {
	children: React.PropTypes.node,
	onChange: React.PropTypes.func
};

export default ReactFileInputButton;
