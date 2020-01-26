import React from 'react'

import {ReactComponent as Typing} from '../img/data.svg'

class Hint extends React.Component {
	render() {
		return (
			<div className="hint">
				<Typing />
				<h1>No results</h1>
				<p>Start typing in search box on top to find movies</p>
			</div>
		)
	}
}

export default Hint