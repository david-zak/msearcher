import React from 'react'

class TopBar extends React.Component {
	state = {
		inputValue: ''
	}

	inputChange = (e) => {
		this.props.inputValueHandler(e.target.value)
		this.setState({inputValue: e.target.value})
	}

	render() {
		const {inputValue} = this.state
		return (
			<div className="top-bar">
				<div className="logo">
					<img src="img/logo.png" alt="MSearcher Logo" />
				</div>
				<input type="text" name="query" placeholder="Type here to search for movies" value={inputValue} onChange={this.inputChange} />
			</div>
		)
	}
}

export default TopBar