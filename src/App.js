import React, { Component } from 'react'
import CatComponent from './CatComponent.js'
import { GraceHopperQuoteComponent } from './GraceHopperQuoteComponent.js'
import MouseComponent from './MouseComponent.js'

class App extends Component {
	render() {
		// your code in the return statement below!
		return(
			<div >
				<CatComponent />
				<GraceHopperQuoteComponent />
				<MouseComponent />
			</div>
		)
	}
}

export default App;
