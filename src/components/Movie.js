import React from 'react'

class Movie extends React.Component {
	render() {
		const imgUrl = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${this.props.movieData.poster_path}`
		const movieUrl = `https://www.themoviedb.org/movie/${this.props.movieData.id}`
		return (
			<div className="movie">
				<img src={imgUrl} alt={this.props.movieData.title} />
				<h1 className="title">{this.props.movieData.title}</h1>
				<p className="desc">{this.props.movieData.overview}</p>
				<a href={movieUrl} target="_blank"><button>View</button></a>
			</div>
		)
	}
}

export default Movie