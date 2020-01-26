import React from 'react'

import Movie from './Movie'

class Result extends React.Component {
	render() {
		const movies = this.props.movies	
		return (
			<main>
				<p className="valuetext">Showing results for <b>'{this.props.inputValue}'</b></p>
				<div className="result">
					{
						movies.map((data) => {
							return <Movie key={data.id} movieData={data} />
						})
					}
				</div>
			</main>
		)
	}
}

export default Result