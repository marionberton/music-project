import React from "react";
import "./Card.css";
import Radium from "radium";

export class Card extends React.Component {
  /*	constructor(props) {
		super(props);
		this.state = {}
	}

	toggleView = () => {
		const isOpen = this.state.isOpen;
		this.setState({isOpen: !isOpen})
	}*/

  render() {
    const style = {
      color: "white",
      padding: "5px 20px",
			cursor: "pointer",
			
      borderRadius: "25px",
      border: "none",
      fontSize: "16px",
      fontWeight: "700",
      backgroundColor: "#44d7b6",
      position: "absolute",
      top: "88%",
      left: "70%",
      ":hover": {
        backgroundColor: "purple",
        transform: "scale(1.1)",
        transition: "transform 1.05s ease-in-out"
      }
    };
    //const isOpen = this.state.isOpen;
    return (
      <div className="containerwrapper">
        <div className="container">
          <img className="image" src={this.props.picture} />
          <button type="button" style={style} onClick={this.props.onClick}>
            View
          </button>
        </div>
        <p className="number">{this.props.number}</p>
        <div>
          <h2>{this.props.title}</h2>
        </div>
      </div>
    );
  }
}

Card = Radium(Card);
