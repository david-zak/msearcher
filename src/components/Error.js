import React from 'react'

class Error extends React.Component {
	render() {
		return (
			<div className="error">
				<div className="text">
					<h1>Error!</h1>
					<p>Couldn't fetch data from API server. Please try later!</p>
				</div>
			</div>
		)
	}
}

export default Error