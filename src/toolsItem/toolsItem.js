import React from 'react';
import './toolsItem.css'

export class Tools extends React.Component {
	

	render() {
		
		return (
			
				<div className="skillsdisplaycontainer">
					<div className="iconcontainer">
						<img className="icon" src="./img/html.svg"/>
					</div>
					<div className="iconcontainer">
						<img className="icon" src="./img/css.svg"/>
					</div>
					<div className="iconcontainer">
						<img className="icon" src="./img/js.svg"/>
					</div>
					<div className="iconcontainer">
						<img className="icon" src="./img/vs.svg"/>
					</div>
					<div className="iconcontainer">
						<img className="icon" src="./img/sketch.svg"/>
					</div>
					<div className="iconcontainer">
						<img className="icon" src="./img/github.svg"/>
					</div>
				</div>
			
			
		)
	}


}