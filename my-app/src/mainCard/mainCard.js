import React from 'react';
import './mainCard.css'


export class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	toggleView = () => {
		const isOpen = this.state.isOpen;
		this.setState({isOpen: !isOpen})
	}
	

	render() {
		const isOpen = this.state.isOpen; 
		return (
				<div className="containerwrapper">
					<div className="container">
						<img className="image" src={this.props.picture}/>
						<button type="button" className="view button" onClick={this.toggleView}>View</button>
					</div>
					<p className="number">{this.props.number}</p>
					<div>
						<h2>{this.props.title}</h2>
					</div>
					{isOpen && this.props.children}
				</div>
				
	
			
		)
	}


}