import React from 'react'
import $ from 'jquery'
import './css/style.css'

import TopBar from './components/TopBar'
import Result from './components/Result'
import Hint from './components/Hint'
import Error from './components/Error'

class App extends React.Component {
	state = {
		inputValue: '',
		error: false,
		moviesResult: []
	}

	inputValueChanged = data => {
		this.setState({inputValue: data})
		this.performSearch(data)
	}

	performSearch = (query) => {
		if(query !== '') {
			const urlString = `http://api.themoviedb.org/3/search/movie?query=${query}&api_key=1b5adf76a72a13bad99b8fc0c68cb085`

			$.ajax({
				url: urlString,
				success: (searchResults) => {
					this.setState({moviesResult: searchResults.results})
				},
				error: (xhr, status, err) => {
					this.setState({error: true})
					console.error("Failed to fetch data")
				}
			})
		}
	}

	render() {
		return (
			<React.Fragment>
				<TopBar inputValueHandler={this.inputValueChanged}/>
				{(this.state.inputValue === '') ? null : <Result inputValue={this.state.inputValue} movies={this.state.moviesResult} />}
				{(this.state.inputValue !== '') ? null : <Hint />}
				{(this.state.error ? <Error /> : null)}
			</React.Fragment>
		)
   	}
}

export default App;
